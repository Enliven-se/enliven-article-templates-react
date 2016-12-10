Package.describe({
  name: 'enliven:article-templates',
  summary: 'ENLIVEN components package',
  version: '0.0.1',
  git: 'git@gitlab.com:enliven/enliven-article-templates-react.git'
})

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@1.0'])

  api.use([
      // Nova packages
      'nova:core@0.27.5-nova',
      'nova:posts@0.27.5-nova',
      'nova:users@0.27.5-nova',
      'nova:comments@0.27.5-nova',

      // third-party packages
      'fortawesome:fontawesome@4.5.0',
      'tmeasday:check-npm-versions@0.3.1',
      'std:accounts-ui@1.2.6',
      'utilities:react-list-container@0.1.10'
  ])

  api.mainModule('app/lib/server.js', 'server')
  api.mainModule('app/lib/client.js', 'client')
})
