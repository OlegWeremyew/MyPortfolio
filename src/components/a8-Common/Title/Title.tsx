import React, { FC } from 'react';
import s from './Title.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TitleProps } from './types';
import Tilt from 'react-parallax-tilt';

export const Title: FC<TitleProps> = ({ title, accentTitle, icon }) => (
  <>
    <Tilt>
      <h2 className={s.aboutTitle}>
        <span className={s.aboutTitle_white}>{title}</span>
        <span className={s.aboutTitle_yellow}>{accentTitle}</span>
      </h2>
    </Tilt>
    <div className={s.aboutWrapperIcon}>
      <span className={s.outerLine} />
      <span className={s.aboutIcon}>
        <FontAwesomeIcon icon={icon} />
      </span>
      <span className={s.outerLine} />
    </div>
  </>
);
