import { v1 } from 'uuid';
import projectCover from '../projectCover/meetQI.jpg';
import todolist from '../projectCover/todolist.jpg';
import socialNwtWork from '../projectCover/socialNetWork.jpg';
import quizCards from '../projectCover/learnCards.jpg';
import bookShop from '../projectCover/bookShop.jpg';
import calculator from '../projectCover/calculator.jpg';
import pizza from '../projectCover/pizza.jpg';
import countries from '../projectCover/countries.jpg';
import { ProjectItemType } from '../types';

export const project: ProjectItemType[] = [
  {
    id: v1(),
    heading: 'MeetQI',
    demo: 'https://meetqi.com/',
    github: '',
    image: projectCover,
    description:
      'An application in which you can create video conferences, chat, create notes, keep event calendars, etc. The user can customize the interface to their liking, recording video conferences and much more is possible.',
  },
  {
    id: v1(),
    heading: 'Todolist',
    demo: 'https://olegweremyew.github.io/MyToDoList/',
    github: 'https://github.com/OlegWeremyew/MyToDoList',
    image: todolist,
    description:
      "What is a ToDo List? The definition is a simple one. It's a list of tasks you need to complete, or things that you want to do. Most typically, they're organised in order of priority. Traditionally, they're written on a piece of paper or post it notes and acts as a memory aid.",
  },
  {
    id: v1(),
    heading: 'Quiz cards',
    demo: 'https://olegweremyew.github.io/QuizCards/#/profile',
    github: 'https://github.com/OlegWeremyew/QuizCards',
    image: quizCards,
    description: `Quiz cards is an app for learning question and answer cards. You can create your own cards, edit them, delete them. you can also study the maps of other users`,
  },
  {
    id: v1(),
    heading: 'Social NetWork',
    demo: 'https://olegweremyew.github.io/social_network/',
    github: 'https://github.com/OlegWeremyew/social_network',
    image: socialNwtWork,
    description:
      'A social network is a website that allows people with similar interests to come together and share information, photos and videos.',
  },
  {
    id: v1(),
    heading: 'Book shop',
    demo: 'https://OlegWeremyew.github.io/BookShop',
    github: 'https://github.com/OlegWeremyew/BookShop',
    image: bookShop,
    description:
      'The bookstore is an application for online search and purchase of books of interest to you.',
  },
  {
    id: v1(),
    heading: 'Go Pizza',
    demo: 'https://olegweremyew.github.io/goPizza',
    github: 'https://github.com/OlegWeremyew/goPizza',
    image: pizza,
    description:
      'In this application, you can find a pizza to your taste and make an online purchase.',
  },
  {
    id: v1(),
    heading: 'Calculator',
    demo: 'https://olegweremyew.github.io/calculator/',
    github: 'https://github.com/OlegWeremyew/calculator',
    image: calculator,
    description:
      'This application is an online calculator with the ability to record the history of calculations, select a design theme, etc.',
  },
  {
    id: v1(),
    heading: 'Countries',
    demo: 'https://olegweremyew.github.io/Countries/',
    github: 'https://github.com/OlegWeremyew/Countries',
    image: countries,
    description:
      'An application in which you can find out various information about any country on our planet. You can sort countries by continents and names etc.',
  },
];
