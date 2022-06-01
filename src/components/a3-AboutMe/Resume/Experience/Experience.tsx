import React from 'react';
import s from './Experience.module.scss'
import {v1} from 'uuid';


const experience = [
    {
        id: v1(),
        company: 'https://it-incubator.by/React-online.html',
        title: 'Front-end (React/Redux/Typescript)',
        description: 'IT-incubator, 2021'
    },
    {
        id: v1(),
        company: 'https://htmlacademy.ru/',
        title: 'JavaScript for beginners',
        description: 'HTML Academy, 2021'
    },
    {
        id: v1(),
        company: 'https://htmlacademy.ru/',
        title: 'Professional HTML &CSS. Responsive layout and automation',
        description: 'HTML Academy, 2021'
    },
    {
        id: v1(),
        company: 'https://ispeak-school.by/',
        title: 'iSpeak',
        description: 'Design engineer / Process engineer'
    },
    {
        id: v1(),
        company: 'https://en.bntu.by/',
        title: 'Belarusian National Technical University',
        description: 'English courses'
    },
]

export const Experience = () => {

    const experienceList = experience.map(exp => {
        return <li key={exp.id} className={s.expItem}>
            <p className={s.expHeading}>{exp.title}</p>
            <a className={s.expLink} href={exp.company} target="_blank">{exp.description}</a>
        </li>

    })
    return (
        <div className={`${s.expBox} ${s.animation}`}>
            <div className={s.expBoxTitle}>
                <h3 className={s.expTitle}>Education</h3>
            </div>
            <ul className={s.expList}>
                {experienceList}
            </ul>
        </div>
    )
}