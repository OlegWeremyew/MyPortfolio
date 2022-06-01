import s from './PersonalInfo.module.scss';
import React from 'react';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import MyPDF from './cv/cv.pdf';

const personalInfo = [
    {title: 'First Name: ', content: 'Oleg'},
    {title: 'Last Name: ', content: 'Veremyev'},
    {title: 'Date of birth: ', content: '6 June 1994'},
    {title: 'English: ', content: 'Intermediate (in progress)'},
    {title: 'Address: ', content: 'Minsk, Belarus'},
    {title: 'Email: ', content: 'olegweremey1994@mail.ru'},
    {title: 'Phone: ', content: '+375 29 841 39 53'},
    {title: 'Telegram: ', content: '@olegwerem'},
]

export const PersonalInfo = () => {

    const info = personalInfo.map((el, index) => {
        return <li className={s.personalInfoItem} key={index}>
            <span className={s.title}>{el.title}</span>
            <span className={s.content}>{el.content}</span>
        </li>
    })
    return (
        <div className={s.personalBox}>
            <div className={s.personalInfo}>
                <div className={s.personalInfoTitle}>
                    <span className={s.personalIcon}><FontAwesomeIcon icon={faUser}/></span>
                    <h4 className={s.personalInfoHeading}>Personal Info</h4>
                </div>
                <div className={s.personalDesc}>
                    I'm a frontend developer who has a results-focused attitude to creating SPA, using React(JS/TS), Redux.
                    My free time is dedicated to Codewars, programming tutorials, and becoming familiar with NodeJS, because, in
                    the future, I see myself as a Full Stack Developer.
                    <p className={s.subPersonalDesc}>Ready to consider project work and full-time employment. </p>
                </div>
                <div className={s.personalInfoInner}>
                    <ul className={s.personalInfoList}>
                        {info}
                    </ul>
                </div>
            </div>
            <div className={s.resume}>
                <a className={s.resumeLink}
                   href={MyPDF} download={'CV_OlegVeremyev'}
                   target="_blank" rel="noopener noreferrer">Download CV</a>
            </div>
        </div>
    )
}