import React, { FC } from 'react';
import s from './Experience.module.scss';
import { experience } from './constants';

export const Experience: FC = () => {
  const experienceList = experience.map(exp => (
    <li key={exp.id} className={s.expItem}>
      <p className={s.expHeading}>{exp.title}</p>
      <a className={s.expLink} href={exp.company} target="_blank" rel="noreferrer">
        {exp.description}
      </a>
    </li>
  ));

  return (
    <div className={`${s.expBox} ${s.animation}`}>
      <div className={s.expBoxTitle}>
        <h3 className={s.expTitle}>Education</h3>
      </div>
      <ul className={s.expList}>{experienceList}</ul>
    </div>
  );
};
