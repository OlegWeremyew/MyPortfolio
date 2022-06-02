import React from 'react';
import s from './ContactBlock.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {contact} from "./constants";

export const ContactBlock = () => {

    const contactInfo = contact.map((el, index) => {
        return (
            <li key={index} className={s.contactItem}>
                <h3 className={s.contactTitle}>{el.title}</h3>
                <span className={s.contactIcon}><FontAwesomeIcon icon={el.icon}/></span>
                {el.text === 'Go to github'
                    ? <a className={s.contactText} target='_blank' href='https://github.com/OlegWeremyew' rel="noreferrer">{el.text}</a>
                    : el.text === 'Go to linkedIn'
                        ? <a className={s.contactText} target='_blank'
                             href='http://www.linkedin.com/in/olegweremyev' rel="noreferrer">{el.text}</a>
                        : el.text === '+375 29 841 39 53'
                            ? <a className={s.contactText} target='_blank' href="tel:+375173582979" rel="noreferrer">{el.text}</a>
                            : el.text === 'Go to mail'
                                ? <a className={s.contactText} target='_blank'
                                     href='https://mail.ru/olegweremey1994@mail.ru' rel="noreferrer">{el.text}</a>
                                : el.text === 'Go to telegram'
                                    ? <a className={s.contactText} target='_blank'
                                         href='https://t.me/olegwerem' rel="noreferrer">{el.text}</a>
                                    : el.text === 'Go to Skype'
                                        ? <a className={s.contactText} target='_blank'
                                             href='skype:live:c8a5b007ba674ab?call' rel="noreferrer">{el.text}</a>
                                        : el.text === 'Go to Gmail'
                                            ? <a className={s.contactText} target='_blank'
                                                 href='https://olegweremey103151@gmail.com' rel="noreferrer">{el.text}</a>
                                            : <span className={s.contactText}>{el.text}</span>
                }
            </li>
        )
    })
    return (
        <div className={s.contactBox}>
            <ul className={s.contactList}>{contactInfo}</ul>
        </div>
    )
}
