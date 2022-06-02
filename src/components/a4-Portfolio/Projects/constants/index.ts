import {v1} from "uuid";
import todolist from "../projectCover/todolist.jpg";
import socialNwtWork from "../projectCover/socialNetWork.jpg";
import learnCards from "../projectCover/learnCards.jpg";
import bookShop from "../projectCover/bookShop.jpg";
import calculator from "../projectCover/calculator.jpg";
import {ProjectItemType} from "../types";

export const project: ProjectItemType[] = [
    {
        id: v1(),
        heading: 'Todolist',
        demo: 'https://olegweremyew.github.io/MyToDoList/',
        github: 'https://github.com/OlegWeremyew/MyToDoList',
        image: todolist
    },
    {
        id: v1(),
        heading: 'Social NetWork',
        demo: 'https://olegweremyew.github.io/social_network/',
        github: 'https://github.com/OlegWeremyew/social_network',
        image: socialNwtWork
    },
    {
        id: v1(),
        heading: 'Learn cards',
        demo: 'https://olegweremyew.github.io/React-Cards/',
        github: 'https://github.com/OlegWeremyew/React-Cards',
        image: learnCards
    },
    {
        id: v1(),
        heading: 'Book shop',
        demo: 'https://olegweremyew.github.io/mui-shop-project/',
        github: 'https://github.com/OlegWeremyew/mui-shop-project',
        image: bookShop
    },
    {
        id: v1(),
        heading: 'Calculator',
        demo: 'https://olegweremyew.github.io/calculator/',
        github: 'https://github.com/OlegWeremyew/calculator',
        image: calculator
    },
]