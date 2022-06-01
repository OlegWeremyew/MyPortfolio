import React from 'react';
import s from './Skills.module.scss'
import {skills} from "./constants";

export const Skills = () => {

    const skillsList = skills.map(skill => {
        return (
            <li key={skill.id} className={s.skillItem}>
                <img src={skill.icon} className={s.aboutIcon} alt={"skill icon"}/>
                <p className={s.skillTitle}>{skill.skill}</p>
            </li>
        )
    })

    return (
        <div className={`${s.skillBox} ${s.animation}`}>
            <div className={s.skillHeadingBox}>
                <h3 className={s.skillHeading}>Skills</h3>
            </div>
            <ul className={s.skillList}>
                {skillsList}
            </ul>

        </div>
    )
}