module.exports = {
  parserPreset: 'conventional-changelog-conventionalcommits',
  // Configuration for commitlint rules
  rules: {
    // Ensure a blank line before the commit body
    'body-leading-blank': [1, 'always'],
    // Limit the length of the commit body to 200 characters
    'body-max-line-length': [2, 'always', 200],
    // Ensure a blank line before the commit footer
    'footer-leading-blank': [1, 'always'],
    // Limit the length of the commit footer to 200 characters
    'footer-max-line-length': [2, 'always', 200],
    // Limit the length of the commit header to 200 characters
    'header-max-length': [2, 'always', 200],
    // Require lower case for commit type
    'type-case': [2, 'always', 'lower-case'],
    // Ensure commit type is not empty
    'type-empty': [2, 'never'],
    // Specify allowed commit types
    'type-enum': [
      2,
      'always',
      ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'],
    ],
    // Ensure commit subject is not empty
    'subject-empty': [2, 'never'],
    // Ensure commit subject does not end with a period
    'subject-full-stop': [2, 'never', '.'],
  },
  // Configuration for commit message prompts
  prompt: {
    questions: {
      type: {
        description: "Select the type of change that you're committing",
        enum: {
          feat: {
            description: 'A new feature',
            title: 'Features',
            emoji: '✨',
          },
          fix: {
            description: 'A bug fix',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
          docs: {
            description: 'Documentation only changes',
            title: 'Documentation',
            emoji: '📚',
          },
          style: {
            description:
              'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
            title: 'Styles',
            emoji: '💎',
          },
          refactor: {
            description: 'A code change that neither fixes a bug nor adds a feature',
            title: 'Code Refactoring',
            emoji: '📦',
          },
          perf: {
            description: 'A code change that improves performance',
            title: 'Performance Improvements',
            emoji: '🚀',
          },
          test: {
            description: 'Adding missing tests or correcting existing tests',
            title: 'Tests',
            emoji: '🚨',
          },
          build: {
            description:
              'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
            title: 'Builds',
            emoji: '🛠',
          },
          ci: {
            description:
              'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
            title: 'Continuous Integrations',
            emoji: '⚙️',
          },
          chore: {
            description: "Other changes that don't modify src or test files",
            title: 'Chores',
            emoji: '♻️',
          },
          revert: {
            description: 'Reverts a previous commit',
            title: 'Reverts',
            emoji: '🗑',
          },
        },
      },
      scope: {
        description: 'Specify the scope of this change (e.g., component, file name). Leave empty if unsure:',
      },
      subject: {
        description: 'Write a short, imperative tense description of the change',
      },
      body: {
        description: 'Provide a longer description of the change',
      },
      // ...
    },
  },
}
