'use strict'
const { execSync } = require('child_process')
const { writeFileSync, existsSync } = require('fs')
const { randomBytes } = require('crypto')
const readline = require('readline')
const path = require('path')

const ROOT = path.resolve(__dirname, '..')
const API  = path.join(ROOT, 'api-backend')
const CMS  = path.join(ROOT, 'cms-admin')
const SITE = path.join(ROOT, 'public-site')

const G = '\x1b[32m', C = '\x1b[36m', B = '\x1b[1m', R = '\x1b[0m', E = '\x1b[31m'

function run(cmd, cwd, extraEnv) {
  execSync(cmd, {
    cwd: cwd || ROOT,
    stdio: 'inherit',
    env: { ...process.env, ...extraEnv }
  })
}

function check(testCmd, name, url) {
  try {
    execSync(testCmd, { stdio: 'pipe' })
    console.log(`  ${G}✓${R} ${name}`)
  } catch {
    console.error(`\n${E}✗ ${name} is not installed.\n  Download it from: ${url}${R}\n`)
    process.exit(1)
  }
}

function ask(q) {
  return new Promise(resolve => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
    rl.question(q, a => { rl.close(); resolve(a.trim()) })
  })
}

async function main() {
  console.log(`\n${B}╔══════════════════════════════════════╗
║  Unfilter Story — First-Time Setup   ║
╚══════════════════════════════════════╝${R}\n`)

  // 1 ── Prerequisites
  console.log(`${C}[ 1 / 5 ]${R} Checking prerequisites`)
  check('node --version',   'Node.js',        'https://nodejs.org')
  check('docker --version', 'Docker Desktop', 'https://www.docker.com/products/docker-desktop')

  // 2 ── Database
  console.log(`\n${C}[ 2 / 5 ]${R} Starting database (PostgreSQL + Redis)`)
  try {
    run('docker compose up -d')
  } catch {
    console.error(`\n${E}Could not start Docker. Make sure Docker Desktop is open and running.${R}`)
    process.exit(1)
  }
  process.stdout.write('  Waiting for database to be ready')
  for (let i = 0; i < 7; i++) {
    await new Promise(r => setTimeout(r, 1000))
    process.stdout.write('.')
  }
  console.log(` ${G}ready${R}`)

  // 3 ── Environment files
  console.log(`\n${C}[ 3 / 5 ]${R} Creating environment files`)

  if (!existsSync(path.join(API, '.env'))) {
    writeFileSync(path.join(API, '.env'),
      `DATABASE_URL="postgresql://unfilter:password@localhost:5432/unfilter_story"\n` +
      `JWT_SECRET="${randomBytes(32).toString('base64')}"\n` +
      `NODE_ENV="development"\n` +
      `PORT=3000\n`
    )
    console.log(`  ${G}✓${R} api-backend/.env`)
  } else {
    console.log(`  - api-backend/.env (already exists, skipped)`)
  }

  if (!existsSync(path.join(CMS, '.env'))) {
    writeFileSync(path.join(CMS, '.env'),
      `VITE_API_URL=http://localhost:3000\nVITE_PUBLIC_SITE_URL=http://localhost:4321\n`
    )
    console.log(`  ${G}✓${R} cms-admin/.env`)
  } else {
    console.log(`  - cms-admin/.env (already exists, skipped)`)
  }

  if (!existsSync(path.join(SITE, '.env'))) {
    writeFileSync(path.join(SITE, '.env'), `PUBLIC_API_URL=http://localhost:3000\n`)
    console.log(`  ${G}✓${R} public-site/.env`)
  } else {
    console.log(`  - public-site/.env (already exists, skipped)`)
  }

  // 4 ── Install & migrate
  console.log(`\n${C}[ 4 / 5 ]${R} Installing packages and setting up database tables`)
  console.log('  Installing API backend packages...')
  run('npm install', API)
  console.log('  Installing CMS admin packages...')
  run('npm install', CMS)
  console.log('  Installing public site packages...')
  run('npm install', SITE)
  console.log('  Running database migrations...')
  run('npx prisma migrate deploy', API)
  console.log(`  ${G}✓${R} All done`)

  // 5 ── Admin account
  console.log(`\n${C}[ 5 / 5 ]${R} Create your admin account\n`)
  console.log('  This is the account you will use to log into the CMS.\n')

  const email     = await ask('  Email address : ')
  const firstName = await ask('  First name    : ')
  const lastName  = await ask('  Last name     : ')
  const password  = await ask('  Password      : ')

  if (!email || !password) {
    console.error(`\n${E}Email and password are required.${R}`)
    process.exit(1)
  }

  run(`node scripts/create-admin.js "${email}" "${firstName}" "${lastName}"`, API, {
    ADMIN_PASSWORD: password
  })
  console.log(`\n  ${G}✓${R} Admin account created for ${email}`)

  // Done
  console.log(`\n${B}╔═══════════════════════════════════════════╗
║   Setup complete! You're ready to go.    ║
║                                          ║
║   Windows  →  double-click  start.bat    ║
║   Mac/Linux →  run  ./start.sh           ║
╚═══════════════════════════════════════════╝${R}\n`)
}

main().catch(e => {
  console.error(`\n\x1b[31mSetup failed: ${e.message}\x1b[0m`)
  process.exit(1)
})
