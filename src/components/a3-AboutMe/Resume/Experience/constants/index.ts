import { v1 } from 'uuid';
import { ExperienceItemType } from '../types';

export const experience: ExperienceItemType[] = [
  {
    id: v1(),
    company: 'AIBY',
    url: 'https://aiby.com/',
    position: 'Software Engineer',
    type: 'full-time',
    responsibility: [
      'Frontend development',
      'Backend development',
      'Refactor legacy code',
      'Project evaluation',
      'Team supporting',
      'Testing',
      'SEO optimization',
    ],
    stack: [
      'JavaScript',
      'TypeScript',
      'PHP',
      'HTML',
      'CSS',
      'SQL',
      'Vue',
      'Nuxt',
      'Svelte',
      'NodeJS',
      'KoaJS',
      'Sails.JS',
      'Git',
      'GitLab',
      'SCSS',
      'Adaptive layout',
      'Mobile layout',
      'Rest API',
      'MySQL',
      'Swagger',
      'Vuex',
      'Figma',
      'Zeplin',
      'Jira',
      'ESLint',
      'Prettier',
    ],
    timeStart: 'December 2022',
    timeEnd: 'Current',
  },
  {
    id: v1(),
    company: 'IT STEP Academy',
    url: 'https://itstep.by/',
    position: 'Tutor',
    type: 'part-time',
    responsibility: [
      'Training students according to the program',
      'Mentoring',
      'Supporting',
    ],
    stack: ['JavaScript', 'TypeScript', 'React', 'Angular', 'NodeJS'],
    timeStart: 'September 2023',
    timeEnd: 'Current',
  },
  {
    id: v1(),
    company: 'Mesh Group',
    url: 'https://itstep.by/',
    position: 'Tutor',
    type: 'part-time',
    responsibility: [
      'Mobile development',
      'Refactor legacy code',
      'Project evaluation',
      'Team supporting',
    ],
    stack: [
      'JavaScript',
      'TypeScript',
      'Swift',
      'React-native',
      'Redux Toolkit',
      'Functional components',
      'Class components',
      'Android integration',
      'iOS integration',
      'Git',
      'GitLab',
      'Rest API',
      'Swagger',
      'Postman',
      'Figma',
      'Android Studio',
      'Xcode',
      'YouTrack',
      'ESLint',
      'Prettier',
    ],
    timeStart: 'January 2024',
    timeEnd: 'May 2024',
  },
  {
    id: v1(),
    company: 'NybleCraft',
    url: 'https://nyblecraft.com/',
    position: 'Front-end Developer',
    type: 'full-time',
    responsibility: [
      'Frontend development',
      'Mobile development',
      'Refactor legacy code',
      'Project evaluation',
      'Team supporting',
      'Meetings with clients',
      'Testing',
      'SEO optimization',
    ],
    stack: [
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'React',
      'React-Native',
      'Gatsby',
      'Node.js',
      'Express',
      'Git',
      'GitHub',
      'Docker',
      'Nginx',
      'MobX',
      'WebSocket',
      'Rest API',
      'Swagger',
      'Figma',
      'Material-UI',
      'SCSS',
      'Emotion',
      'ESLint',
      'Prettier',
      'Husky',
    ],
    timeStart: 'September 2021',
    timeEnd: 'November 2022',
  },
];
