//@ts-check

import shell from 'shelljs'

shell.ls('./')

shell.exec('git clone -q --depth=1 https://${GITHUB_USER}:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY} data')
shell.exec('nuxt build')
shell.mkdir('-p', '.vercel/output/functions/index.func')
shell.cp('-r', 'data', '.vercel/output/functions/index.func')
