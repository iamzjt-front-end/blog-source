'use strict'

module.exports = {
  types: [
    {
      value: 'WIP',
      name: 'πͺ    WIP:     Work in progress',
    },
    {
      value: 'feat',
      name: 'β¨   feat:     A new feature',
    },
    {
      value: 'fix',
      name: 'π    fix:     A bug fix',
    },
    {
      value: 'build',
      name: 'π¨  build:     Changes that affect the build system or external dependencies'
    },
    {
      value: 'perf',
      name:'β‘   perf:     A code change that improves performance',
    },
    {
      value: 'docs',
      name: 'π   docs:     Documentation only changes',
    },
    {
      value: 'style',
      name: 'π  style:     Code Style, Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
    },
    {
      value: 'refactor',
      name:'π  refactor:    A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'test',
      name: 'π   test:     Add missing tests or correcting existing tests',
    },
    {
      value: 'chore',
      name: "π―   chore:     Changes that don't modify src or test files. Such as updating build tasks, package manager",
    },
    {
      value: 'ci',
      name: 'π·     ci:     Changes to our CI configuration files and scripts'
    },
    {
      value: 'revert',
      name: 'βͺ revert:     Revert to a commit',
    }
  ],
  scopes: [],

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix', 'build', 'perf', 'refactor'],
  footerPrefix: 'Related issuesοΌ'
}
