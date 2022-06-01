import React from 'react';
import s from './Projects.module.scss';
import socialNwtWork from './projectCover/socialNetWork.jpg'
import todolist from './projectCover/todolist.jpg'
import learnCards from './projectCover/learnCards.jpg'
import bookShop from './projectCover/bookShop.jpg'
import calculator from './projectCover/calculator.jpg'
import {v1} from 'uuid';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEye} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const project = [
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


export const Projects = () => {


    const projects = project.map(project => {
        return (
            <div className={s.tiles} key={project.id}>
                <div className={s.tile}>
                    <img src={project.image} className={s.projectImage} alt='project image'/>
                    <div className={s.details}>
                        <span className={s.title}>{project.heading}</span>
                        <span className={s.info}>
							<FontAwesomeIcon icon={faEye} className={s.icon}/>
							<a href={project.demo} className={s.link} target="_blank">Demo</a>
						</span>
                        <span className={s.info}>
							<FontAwesomeIcon icon={faGithub} className={s.icon}/>
							<a href={project.github} className={s.link} target="_blank">Github</a></span>
                    </div>
                </div>
            </div>
        )
    })


    return (
        <div className={s.projectBox}>
            {projects}
        </div>
    )
}