import { v1 } from 'uuid';
import projectCover from '../projectCover/meetQI.jpg';
import todolist from '../projectCover/todolist.jpg';
import socialNwtWork from '../projectCover/socialNetWork.jpg';
import quizCards from '../projectCover/learnCards.jpg';
import bookShop from '../projectCover/bookShop.jpg';
import calculator from '../projectCover/calculator.jpg';
import pizza from '../projectCover/pizza.jpg';
import countries from '../projectCover/countries.jpg';
import alfacom from '../projectCover/alfacom.jpg';
import arta from '../projectCover/arta.jpg';
import HitMeal from '../projectCover/HitMeal.jpg';
import chatOn from '../projectCover/chatOn.webp';
import free_play from '../projectCover/free-play.webp';
import InPulse from '../projectCover/InPulse.png';
import hr from '../projectCover/hr.png';
import school from '../projectCover/school.png';
import force from '../projectCover/force.webp';
import plantum from '../projectCover/plantum.png';
import { ProjectItemType } from '../types';

export const project: ProjectItemType[] = [
  {
    id: v1(),
    heading: 'FreePlay (website)',
    demo: 'https://freeplay.io/',
    github: '',
    image: free_play,
    description:
      'Website of the company "FreePlay", a manufacturer of mobile games for Android and iOS.',
  },
  {
    id: v1(),
    heading: 'AI-ARTA (website)',
    demo: 'https://ai-arta.com/',
    github: '',
    image: arta,
    description:
      'A site referring to a mobile application for generating images using artificial intelligence.',
  },
  {
    id: v1(),
    heading: 'MeetQI (website)',
    demo: 'https://meetqi.com/',
    github: '',
    image: projectCover,
    description:
      'An application in which you can create video conferences, chat, create notes, keep event calendars, etc. The user can customize the interface to their liking, recording video conferences and much more is possible.',
  },
  {
    id: v1(),
    heading: 'Plantum (website)',
    demo: 'https://myplantum.com/',
    github: '',
    image: plantum,
    description:
      'Identify 10K+ plants, flowers and trees with up to 95% accuracy! Become an expert in plant diseases with Plantum!',
  },
  {
    id: v1(),
    heading: 'IQHR (mobile app)',
    demo: 'https://play.google.com/store/apps/details?id=ru.meshgroup.global.iqhr&hl=en_IE',
    github: '',
    image: hr,
    description:
      'Mobile application for recruitment by recruiters and job search for job seekers',
  },
  {
    id: v1(),
    heading: 'IQSchool (mobile app)',
    demo: 'https://play.google.com/store/apps/details?id=ru.meshgroup.iqschool.global',
    github: '',
    image: school,
    description:
      'Mobile application for learning. A wide selection of programs is available for users of various levels and education levels',
  },
  {
    id: v1(),
    heading: 'IQForce (mobile app)',
    demo: 'https://apps.apple.com/ru/app/iqforce/id6450367753?l=en-GB',
    github: '',
    image: force,
    description:
      'IQ Force is an innovative solution for optimizing the work of sales agents, supervisors, merchandisers and any field employees, combining a modular CRM system customizable for specific business processes and smart tools for working with routes based on Big Data and AI neural networks.',
  },
  {
    id: v1(),
    heading: 'HitMeal Quiz (mobile website)',
    demo: 'https://hitmeal.app/quiz5/',
    github: '',
    image: HitMeal,
    description:
      'Website questionnaire for collecting information from users for further transfer to a mobile application.',
  },
  {
    id: v1(),
    heading: 'ChatOn (mobile website)',
    demo: 'https://chaton.ai/web/',
    github: '',
    image: chatOn,
    description:
      'The website that users reach through advertising posters is designed to briefly familiarize themselves with the product and then be redirected to the subscription purchase page.',
  },
  {
    id: v1(),
    heading: 'InPulse Quiz (mobile website)',
    demo: 'https://inpulse.app/landings/quiz1/',
    github: '',
    image: InPulse,
    description:
      'Website questionnaire for clients who use the InPulse mobile application.Яя',
  },
  {
    id: v1(),
    heading: 'Alfacom (mobile app)',
    demo: 'https://apkpure.com/alfacom/snapcode.alfa.alfacom',
    github: '',
    image: alfacom,
    description:
      'Mobile application for coordinating the work of taxi drivers from the call center. Drivers can also interact with customers, work with maps and navigation, request new tasks and pauses from operators, have direct contact with customers through chats and calls, etc. Implemented work in offline mode, location tracking, processing of push notifications, etc.',
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
