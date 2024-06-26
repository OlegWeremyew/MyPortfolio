import React, { FC, ReactElement } from 'react';
import s from './Skills.module.scss';
import { skills } from './constants';
import Tilt from 'react-parallax-tilt';
import { SkillsType } from 'components/a3-AboutMe/Resume/Skills/types';

export const Skills: FC = () => {
  const skillsList = skills.map(
    (skill: SkillsType): ReactElement => (
      <li key={skill.id} className={s.skillItem}>
        <Tilt tiltMaxAngleX={45} tiltMaxAngleY={45}>
          <img src={skill.icon} className={s.aboutIcon} alt="skill icon" />
        </Tilt>
        <p className={s.skillTitle}>{skill.skill}</p>
      </li>
    ),
  );

  return (
    <div className={`${s.skillBox} ${s.animation}`}>
      <div className={s.skillHeadingBox}>
        <h3 className={s.skillHeading}>Skills</h3>
      </div>
      <ul className={s.skillList}>{skillsList}</ul>
    </div>
  );
};
