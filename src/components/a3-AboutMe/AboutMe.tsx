import React, { FC } from 'react';
import s from './AboutMe.module.scss';
import close from 'assets/image/close-button.png';
import app from 'App/App.module.scss';
import { NavLink } from 'react-router-dom';
import { Resume } from './Resume';
import { PersonalInfo } from './PersonalInfo';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { Title } from 'components';

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
