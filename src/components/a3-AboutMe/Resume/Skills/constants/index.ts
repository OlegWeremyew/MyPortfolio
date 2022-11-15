import { v1 } from 'uuid';
import react from '../image/react.svg';
import redux from '../image/redux.svg';
import type from '../image/typescriptlang-icon.svg';
import js from '../image/js.svg';
import html from '../image/html.svg';
import css3 from '../image/css3.svg';
import git from '../image/git.svg';
import github from '../image/github.svg';
import react_hooks from '../image/react_hooks.png';
import rest_api from '../image/rest_api.png';
import redux_thunk from '../image/redux_thunk.svg';
import postman from '../image/postman.png';
import bootstrap from '../image/bootstrap.svg';
import sass from '../image/sass.svg';
import less from '../image/less.svg';
import material_ui from '../image/material_ui.svg';
import jest from '../image/jest.svg';
import story from '../image/storybook.svg';
import adobe_photoshop from '../image/adobe-photoshop.svg';
import figma from '../image/figma.svg';
import coreldraw from '../image/coreldraw.svg';
import jira from '../image/jira.svg';
import postgresql from '../image/postgresql.svg';
import npm from '../image/npm.svg';
import yarn from '../image/yarn.svg';
import nodejs from '../image/nodejs.svg';
import angular from '../image/angular.svg';
import docker from '../image/docker.svg';
import gatsbyjs from '../image/gatsbyjs.svg';
import firebase from '../image/firebase.svg';
import tailwindScc from '../image/tailwind-css.svg';
import swagger from '../image/swagger.svg';
import { SkillsType } from '../types';

export const skills: Array<SkillsType> = [
  { id: v1(), skill: 'React', icon: react },
  { id: v1(), skill: 'Angular', icon: angular },
  { id: v1(), skill: 'React-native', icon: react },
  { id: v1(), skill: 'NodeJS', icon: nodejs },
  { id: v1(), skill: 'TypeScript', icon: type },
  { id: v1(), skill: 'JavaScript', icon: js },
  { id: v1(), skill: 'HTML5', icon: html },
  { id: v1(), skill: 'CSS3', icon: css3 },
  { id: v1(), skill: 'Redux', icon: redux },
  { id: v1(), skill: 'Git', icon: git },
  { id: v1(), skill: 'GitHub', icon: github },
  { id: v1(), skill: 'Postgresql', icon: postgresql },
  { id: v1(), skill: 'Firebase', icon: firebase },
  { id: v1(), skill: 'Docker', icon: docker },
  { id: v1(), skill: 'Gatsby', icon: gatsbyjs },
  { id: v1(), skill: 'React hooks', icon: react_hooks },
  { id: v1(), skill: 'REST API', icon: rest_api },
  { id: v1(), skill: 'Redux Thunk', icon: redux_thunk },
  { id: v1(), skill: 'POSTMAN', icon: postman },
  { id: v1(), skill: 'Swagger', icon: swagger },
  { id: v1(), skill: 'Bootstrap', icon: bootstrap },
  { id: v1(), skill: 'SASS', icon: sass },
  { id: v1(), skill: 'LESS', icon: less },
  { id: v1(), skill: 'Tailwind CSS', icon: tailwindScc },
  { id: v1(), skill: 'Material UI', icon: material_ui },
  { id: v1(), skill: 'TDD - Jest', icon: jest },
  { id: v1(), skill: 'Storybook', icon: story },
  { id: v1(), skill: 'Adobe Photoshop', icon: adobe_photoshop },
  { id: v1(), skill: 'Figma', icon: figma },
  { id: v1(), skill: 'Corel Draw', icon: coreldraw },
  { id: v1(), skill: 'NPM', icon: npm },
  { id: v1(), skill: 'Yarn', icon: yarn },
  { id: v1(), skill: 'Jira', icon: jira },
];
