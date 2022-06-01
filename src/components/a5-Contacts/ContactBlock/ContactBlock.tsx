import React, {FC} from 'react';
import s from './ContactBlock.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMailForward, faMapMarkedAlt, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin, faSkype, faTelegramPlane} from '@fortawesome/free-brands-svg-icons';

const contact = [
    {title: 'phone', text: '+375 29 841 39 53', icon: faPhoneAlt},
    {title: 'address', text: 'Minsk, Belarus', icon: faMapMarkedAlt},
    {title: 'telegram', text: 'Go to telegram', icon: faTelegramPlane},
    {title: 'linkedIn', text: 'Go to linkedIn', icon: faLinkedin},
    {title: 'mail', text: 'Go to mail', icon: faMailForward},
    {title: 'gmail', text: 'Go to Gmail', icon: faMailForward},
    {title: 'github', text: 'Go to github', icon: faGithub},
    {title: 'skype', text: 'Go to Skype', icon: faSkype},
]

type ContactBlockPropsType = {
    setStatusResult: (value: boolean) => void
    showModal: (value: boolean) => void
}

export const ContactBlock: FC<ContactBlockPropsType> = ({setStatusResult, showModal}) => {

    const contactInfo = contact.map((el, index) => {
        return (
            <li key={index} className={s.contactItem}>
                <h3 className={s.contactTitle}>{el.title}</h3>
                <span className={s.contactIcon}><FontAwesomeIcon icon={el.icon}/></span>
                {el.text === 'Go to github'
                    ? <a className={s.contactText} target='_blank' href='https://github.com/OlegWeremyew'>{el.text}</a>
                    : el.text === 'Go to linkedIn'
                        ? <a className={s.contactText} target='_blank'
                             href='http://www.linkedin.com/in/olegweremyev'>{el.text}</a>
                        : el.text === '+375 29 841 39 53'
                            ? <a className={s.contactText} target='_blank' href="tel:+375173582979">{el.text}</a>
                            : el.text === 'Go to mail'
                                ? <a className={s.contactText} target='_blank'
                                     href='https://mail.ru/olegweremey1994@mail.ru'>{el.text}</a>
                                : el.text === 'Go to telegram'
                                    ? <a className={s.contactText} target='_blank'
                                         href='https://t.me/olegwerem'>{el.text}</a>
                                    : el.text === 'Go to Skype'
                                        ? <a className={s.contactText} target='_blank'
                                             href='skype:live:c8a5b007ba674ab?call'>{el.text}</a>
                                        : el.text === 'Go to Gmail'
                                            ? <a className={s.contactText} target='_blank'
                                                 href='https://olegweremey103151@gmail.com'>{el.text}</a>
                                            : <span className={s.contactText}>{el.text}</span>
                }
            </li>
        )
    })
    return (
        <div className={s.contactBox}>
            <ul className={s.contactList}>{contactInfo}</ul>
            {/*<ContactFormBlock setStatusResult={setStatusResult} showModal={showModal}/>*/}
        </div>
    )
}
