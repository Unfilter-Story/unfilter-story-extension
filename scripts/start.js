'use strict'
const { spawn, execSync } = require('child_process')
const { existsSync } = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '..')
const npm  = process.platform === 'win32' ? 'npm.cmd' : 'npm'
const R = '\x1b[0m', B = '\x1b[1m'

const SERVICES = [
  { label: 'API  ', dir: 'api-backend', color: '\x1b[32m', port: 3000 },
  { label: 'CMS  ', dir: 'cms-admin',   color: '\x1b[34m', port: 5173 },
  { label: 'Site ', dir: 'public-site', color: '\x1b[35m', port: 4321 },
]

// Guard: setup must have been run first
if (!existsSync(path.join(ROOT, 'api-backend', '.env'))) {
  console.error('\x1b[31m\nSetup has not been run yet.\nRun setup.bat (Windows) or ./setup.sh (Mac/Linux) first.\x1b[0m\n')
  process.exit(1)
}

console.log(`\n${B} Starting Unfilter Story...${R}\n`)

// Kill any process tree, cross-platform. Needed because on Windows
// spawn(..., { shell: true }) creates a cmd.exe wrapper around the real
// dev server process — killing just that wrapper leaves the dev server
// running and squatting on the port, so future runs never reach it.
function killProcessTree(pid) {
  if (process.platform === 'win32') {
    try { execSync(`taskkill /PID ${pid} /T /F`, { stdio: 'ignore' }) } catch {}
  } else {
    try { process.kill(pid, 'SIGKILL') } catch {}
  }
}

// Free a port left occupied by a leaked process from a previous run
// (e.g. terminal closed without Ctrl+C, or a prior crash).
function freePort(port) {
  try {
    if (process.platform === 'win32') {
      const out = execSync(`netstat -ano | findstr :${port}`, { encoding: 'utf8' })
      const pids = new Set(
        out.split(/\r?\n/)
          .filter(line => line.includes('LISTENING'))
          .map(line => line.trim().split(/\s+/).pop())
          .filter(Boolean)
      )
      pids.forEach(killProcessTree)
    } else {
      const out = execSync(`lsof -ti tcp:${port}`, { encoding: 'utf8' })
      out.split(/\r?\n/).filter(Boolean).forEach(killProcessTree)
    }
  } catch {
    // No process holding the port — nothing to free.
  }
}

SERVICES.forEach(({ port }) => freePort(port))

// Start Docker services
try {
  execSync('docker compose up -d', { cwd: ROOT, stdio: 'inherit' })
} catch {
  console.error('\x1b[31m\nCould not start Docker. Is Docker Desktop open and running?\x1b[0m\n')
  process.exit(1)
}

console.log('')

// Start all three services with color-coded output
function startService({ label, dir, color }) {
  const cwd = path.join(ROOT, dir)

  const proc = spawn(npm, ['run', 'dev'], { cwd, stdio: 'pipe', shell: process.platform === 'win32' })


  const write = line => {
    if (line.trim()) process.stdout.write(`${color}[${label}]${R} ${line}\n`)
  }

  proc.stdout.on('data', d => d.toString().split(/\r?\n/).forEach(write))
  proc.stderr.on('data', d => d.toString().split(/\r?\n/).forEach(write))

  proc.on('exit', code => {
    if (code !== 0 && code !== null) {
      process.stdout.write(`${color}[${label}]${R} process stopped (code ${code})\n`)
    }
  })

  return proc
}

const procs = SERVICES.map(startService)

console.log(`\n${B} All services are starting — this takes about 10–20 seconds.${R}`)
console.log(` Press ${B}Ctrl+C${R} to stop everything.\n`)
console.log(` \x1b[34mCMS Admin${R}   →  http://localhost:5173`)
console.log(` \x1b[35mPublic Site${R} →  http://localhost:4321\n`)

// Graceful shutdown on Ctrl+C
process.on('SIGINT', () => {
  console.log('\n Stopping all services...\n')
  procs.forEach(p => killProcessTree(p.pid))
  process.exit(0)
})
