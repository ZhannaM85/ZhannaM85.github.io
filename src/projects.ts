export type Project = {
  name: string
  blurb: string
  stack: string[]
  url: string
  demo?: string
}

export const projects: Project[] = [
  {
    name: 'movie-chain-react',
    blurb:
      'Gamified film-discovery app with stats, streaks, and daily challenges — a React product UI playground.',
    stack: ['React 19', 'TypeScript', 'Tailwind', 'React Router'],
    url: 'https://github.com/ZhannaM85/movie-chain-react',
  },
  {
    name: 'interview-trainer-angular-app',
    blurb:
      'Karkas — Angular 21 interview trainer for practising technical answers under realistic time pressure.',
    stack: ['Angular', 'TypeScript', 'SCSS'],
    url: 'https://github.com/ZhannaM85/interview-trainer-angular-app',
  },
  {
    name: 'mouse-fixes',
    blurb:
      'Autonomous agent: give it a GitHub issue number, get back a pull request — end-to-end ownership.',
    stack: ['TypeScript', 'Claude Code', 'GitHub'],
    url: 'https://github.com/ZhannaM85/mouse-fixes',
  },
  {
    name: 'zm-index',
    blurb:
      'Local symbol index for AI coding assistants — tree-sitter parse + SQLite for instant lookup.',
    stack: ['TypeScript', 'SQLite', 'tree-sitter'],
    url: 'https://github.com/ZhannaM85/zm-index',
  },
  {
    name: 'c-trail',
    blurb:
      'CLI to browse and resume Claude Code sessions across all projects from a single terminal view.',
    stack: ['Node.js', 'JavaScript', 'Claude Code'],
    url: 'https://github.com/ZhannaM85/c-trail',
  },
  {
    name: 'turtle-steps-to-the-goal',
    blurb:
      'Local-first weight & nutrition companion — weekly pace goals, meals, macros, water, body metrics. No accounts, no cloud.',
    stack: ['TypeScript', 'React'],
    url: 'https://github.com/ZhannaM85/turtle-steps-to-the-goal',
    demo: 'https://zhannam85.github.io/turtle-steps-to-the-goal/',
  },
]
