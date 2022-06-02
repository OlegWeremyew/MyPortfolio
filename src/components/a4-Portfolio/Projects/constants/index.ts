import {v1} from "uuid";
import todolist from "../projectCover/todolist.jpg";
import socialNwtWork from "../projectCover/socialNetWork.jpg";
import quizCards from "../projectCover/learnCards.jpg";
import bookShop from "../projectCover/bookShop.jpg";
import calculator from "../projectCover/calculator.jpg";
import {ProjectItemType} from "../types";

export const project: ProjectItemType[] = [
    {
        id: v1(),
        heading: 'Todolist',
        demo: 'https://olegweremyew.github.io/MyToDoList/',
        github: 'https://github.com/OlegWeremyew/MyToDoList',
        image: todolist,
        description: "What is a ToDo List? The definition is a simple one. It's a list of tasks you need to complete, or things that you want to do. Most typically, they're organised in order of priority. Traditionally, they're written on a piece of paper or post it notes and acts as a memory aid.",
    },
    {
        id: v1(),
        heading: 'Social NetWork',
        demo: 'https://olegweremyew.github.io/social_network/',
        github: 'https://github.com/OlegWeremyew/social_network',
        image: socialNwtWork,
        description: "A social network is a website that allows people with similar interests to come together and share information, photos and videos.",
    },
    {
        id: v1(),
        heading: 'Quiz cards',
        demo: 'https://olegweremyew.github.io/React-Cards/',
        github: 'https://github.com/OlegWeremyew/React-Cards',
        image: quizCards,
        description: `Quiz cards is an app for learning question and answer cards. You can create your own cards, edit them, delete them. you can also study the maps of other users`,
    },
    {
        id: v1(),
        heading: 'Book shop',
        demo: 'https://olegweremyew.github.io/mui-shop-project/',
        github: 'https://github.com/OlegWeremyew/mui-shop-project',
        image: bookShop,
        description: "The bookstore is an application for online search and purchase of books of interest to you.",
    },
    {
        id: v1(),
        heading: 'Calculator',
        demo: 'https://olegweremyew.github.io/calculator/',
        github: 'https://github.com/OlegWeremyew/calculator',
        image: calculator,
        description: "This application is an online calculator with the ability to record the history of calculations, select a design theme, etc.",
    },
]