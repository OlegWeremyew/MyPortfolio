import React, { FC } from 'react';
import s from './Intro.module.scss';
import { TypingEffect } from 'components/a2-Intro/x1-TypingEffect';

export const Intro: FC = () => (
  <a className={`${s.box} ${s.borderBtmRight}`} href="#">
    <span className={s.textIntro}>Hi There! I'm</span>
    <span className={s.textIntroName}>Oleg Veremyev</span>
    <TypingEffect />
  </a>
);
