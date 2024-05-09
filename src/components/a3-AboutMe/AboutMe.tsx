import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import s from './AboutMe.module.scss';
import app from 'App/App.module.scss';
import { Resume } from './Resume';
import { PersonalInfo } from './PersonalInfo';
import { Title } from 'components';
import close from 'assets/image/close-button.png';

export const AboutMe: FC = () => (
  <div className={`${s.aboutBox} ${s.animation}`}>
    <div className={s.aboutWrapper}>
      <div className={`${s.aboutInner} ${app.container}`}>
        <Title title="about" accentTitle="me" icon={faIdCard} />
        <PersonalInfo />
        <Resume />
      </div>
    </div>
    <NavLink to="/" className={app.linkBack}>
      <img className={s.imageClose} src={close} alt="about me" />
    </NavLink>
  </div>
);
