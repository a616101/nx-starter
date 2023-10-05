module.exports = {
  extends: ['@commitlint/config-conventional', './commitlint.plugin'],
  rules: {
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore', 'revert']],
    'scope-case': [2, 'always', 'lower-case'],
    'scope-empty': [2, 'never'],
    'scope-max-length': [2, 'always', 12],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-max-length': [2, 'always', 60],
    'header-min-length': [2, 'always', 16],
    'header-max-length': [2, 'always', 80],
    'body-leading-blank': [2, 'always'],
    'body-min-length': [2, 'always', 30],
    'body-max-length': [2, 'always', 'Infinity'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [2, 'always'],
  },
};
