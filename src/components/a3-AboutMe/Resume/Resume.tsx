import { Experience } from './Experience';
import { Skills } from './Skills';
import React, { FC, useState } from 'react';
import s from './Resume.module.scss';

export const Resume: FC = () => {
  const [activeComponent, setActiveComponent] = useState<boolean>(true);

  const experienceClickHandler = (): void => setActiveComponent(true);

  const skillsClickHandler = (): void => setActiveComponent(false);

  const experienceClassName = `${activeComponent ? s.active : ''} ${s.resumeBtn}`;
  const skillsClassName = `${!activeComponent ? s.active : ''} ${s.resumeBtn}`;

  return (
    <div className={s.resumeBox}>
      <div className={s.resumeBtnBox}>
        <button
          type="button"
          onClick={experienceClickHandler}
          className={experienceClassName}
        >
          education
        </button>
        <button type="button" onClick={skillsClickHandler} className={skillsClassName}>
          skills
        </button>
      </div>
      <div className={s.resumeComponentBox}>
        {activeComponent ? <Experience /> : <Skills />}
      </div>
    </div>
  );
};
