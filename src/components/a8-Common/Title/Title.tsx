import React, { FC } from 'react';
import s from './Title.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TitleProps } from './types';
import Tilt from 'react-parallax-tilt';

export const Title: FC<TitleProps> = ({ title, accentTitle, icon }) => (
  <>
    <h2 className={s.aboutTitle}>
      <Tilt tiltMaxAngleY={10} tiltMaxAngleX={10}>
        <span className={s.aboutTitleWhite}>{title}</span>
        <span className={s.aboutTitleYellow}>{accentTitle}</span>
      </Tilt>
    </h2>
    <div className={s.aboutWrapperIcon}>
      <span className={s.outerLine} />
      <span className={s.aboutIcon}>
        <FontAwesomeIcon icon={icon} />
      </span>
      <span className={s.outerLine} />
    </div>
  </>
);
