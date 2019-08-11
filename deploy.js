var shell = require('shelljs')
var ghpages = require('gh-pages');

//shell.exec("npm run build")
//shell.echo("Project built successfully, publishing to dev")
//shell.exec("gh-pages -d build")
//shell.echo("Project published to dev, publishing to prod")
//shell.exec("git fetch origin gh-pages:gh-pages")
//shell.exec("git push -f prod gh-pages:master")
//
ghpages.publish('build', {
  add: true,
  branch: "master",
  repo: 'git@github.com:jpribyl/jpribyl.github.io.git'
});
