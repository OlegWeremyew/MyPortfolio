import React, { FC } from 'react';
import s from './Experience.module.scss';
import { experience } from './constants';
import { ExperienceItemType } from 'components/a3-AboutMe/Resume/Experience/types';

export const Experience: FC = () => {
  const experienceList = experience.map((exp: ExperienceItemType) => (
    <li key={exp.id} className={s.expItem}>
      <a className={s.expLink} href={exp.url} target="_blank" rel="noreferrer">
        <h3 className={s.expCompany}>{exp.company}</h3>
      </a>
      <p className={s.expHeading}>
        Position: <span className={s.expValue}>{exp.position}</span>
      </p>
      <p className={s.expHeading}>Responsibility:</p>
      <ul className={s.expValueUl}>
        {exp.responsibility.map((item: string, index: number) => (
          <li key={index} className={s.expValueLi}>
            {item}
          </li>
        ))}
      </ul>
      <div className={s.expHeading}>
        Stack technologies:{' '}
        <p className={s.stackContainer}>
          {exp.stack.map((tech: string, index: number) => (
            <span className={s.stack} key={index}>
              {' '}
              {tech},{' '}
            </span>
          ))}
        </p>
      </div>
      <p className={s.expHeading}>
        Time start: <span className={s.expValue}>{exp.timeStart}</span>
      </p>
      <p className={s.expHeading}>
        Time end: <span className={s.expValue}>{exp.timeEnd}</span>
      </p>
    </li>
  ));

  return (
    <div className={`${s.expBox} ${s.animation}`}>
      <div className={s.expBoxTitle}>
        <h3 className={s.expTitle}>Experience</h3>
      </div>
      <ul className={s.expList}>{experienceList}</ul>
    </div>
  );
};
