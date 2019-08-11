var shell = require('shelljs');
var ghpages = require('gh-pages');

shell.exec("npm run build")
process.argv.forEach(function(val, index, array) {
  if (val === 'dev') {
    ghpages.publish('build', {
      add: true,
      branch: 'gh-pages',
      repo: 'git@github.com:jpribyl/website-frontend-dev.git'
    });
    shell.echo('Published Dev');
  }
  if (val === 'prod') {
    ghpages.publish('build', {
      add: true,
      branch: 'master',
      repo: 'git@github.com:jpribyl/jpribyl.github.io.git'
    });
    shell.echo('Published Prod');
  }
});
