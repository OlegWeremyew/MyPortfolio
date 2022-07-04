import React, { FC } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import s from '../Intro.module.scss';

export const TypingEffect: FC = () => (
  <ReactTypingEffect
    className={`${s.textIntro} ${s.textIntroAccent}`}
    speed={100}
    eraseSpeed={30}
    eraseDelay={2000}
    text={['Frontend developer', 'React developer']}
    cursor=""
  />
);
