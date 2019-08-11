var shell = require('shelljs')

shell.exec("npm run build")
shell.echo("Project built successfully, publishing to dev")
shell.exec("gh-pages -d build")
shell.echo("Project published to dev, publishing to prod")
shell.exec("git fetch origin gh-pages:gh-pages")
shell.exec("git push prod gh-pages:master")
