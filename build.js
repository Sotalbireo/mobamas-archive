//@ts-check

const shell = require('shelljs')

shell.ls('./')

shell.exec('git clone --depth=1 https://${GITHUB_USER}:${GITHUB_TOKEN}@github.com/${GITHUB_USER}/${GITHUB_REPOSITORY}.git data')
shell.exec('nuxt build')
shell.mkdir('-p', '.vercel/output/functions/__nitro.func')
shell.cp('-r', 'data', '.vercel/output/functions/__nitro.func')
