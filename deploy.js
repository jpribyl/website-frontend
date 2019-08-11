var shell = require('shelljs')

shell.exec("npm run build")
shell.exec("gh-pages -d build")
shell.exec("git fetch origin gh-pages:gh-pages")
shell.exec("git push prod gh-pages:master")
