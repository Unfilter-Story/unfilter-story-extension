'use strict'
const { spawn, execSync } = require('child_process')
const { existsSync } = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '..')
const npm  = process.platform === 'win32' ? 'npm.cmd' : 'npm'
const R = '\x1b[0m', B = '\x1b[1m'

const SERVICES = [
  { label: 'API  ', dir: 'api-backend', color: '\x1b[32m' },
  { label: 'CMS  ', dir: 'cms-admin',   color: '\x1b[34m' },
  { label: 'Site ', dir: 'public-site', color: '\x1b[35m' },
]

// Guard: setup must have been run first
if (!existsSync(path.join(ROOT, 'api-backend', '.env'))) {
  console.error('\x1b[31m\nSetup has not been run yet.\nRun setup.bat (Windows) or ./setup.sh (Mac/Linux) first.\x1b[0m\n')
  process.exit(1)
}

console.log(`\n${B} Starting Unfilter Story...${R}\n`)

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
  procs.forEach(p => { try { p.kill() } catch {} })
  process.exit(0)
})
