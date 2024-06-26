import React, { FC, ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailForward } from '@fortawesome/free-solid-svg-icons';
import s from './Experience.module.scss';
import { experience } from './constants';
import { ExperienceItemType } from 'components/a3-AboutMe/Resume/Experience/types';

export const Experience: FC = () => {
  const experienceList = experience.map(
    (exp: ExperienceItemType): ReactElement => (
      <li key={exp.id} className={s.expItem}>
        <a className={s.expLink} href={exp.url} target="_blank" rel="noreferrer">
          <h3 className={s.expCompany}>
            {exp.company} (<span>{exp.type}</span>)
          </h3>
          <span className={s.contactIcon}>
            <FontAwesomeIcon icon={faMailForward} />
          </span>
        </a>
        <p className={s.expHeading}>
          Position: <span className={s.expValue}>{exp.position}</span>
        </p>
        <p className={s.expHeading}>Responsibility:</p>
        <ul className={s.expValueUl}>
          {exp.responsibility.map((item: string, index: number) => (
            <li key={index} className={s.expValueLi}>
              {item}
              {index === exp.responsibility.length - 1 ? '.' : ';'}
            </li>
          ))}
        </ul>
        <div className={s.expHeading}>
          Stack technologies:{' '}
          <p className={s.stackContainer}>
            {exp.stack.map((tech: string, index: number) => (
              <span className={s.stack} key={index}>
                {' '}
                {tech}
                {index === exp.stack.length - 1 ? '.' : ','}{' '}
              </span>
            ))}
          </p>
        </div>
        <p className={s.expHeading}>
          Time start: <span className={s.expValue}>{exp.timeStart}.</span>
        </p>
        <p className={s.expHeading}>
          Time end: <span className={s.expValue}>{exp.timeEnd}.</span>
        </p>
      </li>
    ),
  );

  return (
    <div className={`${s.expBox} ${s.animation}`}>
      <div className={s.expBoxTitle}>
        <h3 className={s.expTitle}>Experience</h3>
      </div>
      <ul className={s.expList}>{experienceList}</ul>
    </div>
  );
};
