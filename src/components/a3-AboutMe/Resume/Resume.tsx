import { Education } from './Education';
import { Skills } from './Skills';
import React, { FC, useCallback, useState } from 'react';
import s from './Resume.module.scss';
import { Experience } from 'components/a3-AboutMe/Resume/Experience/Experience';

type ActiveBlockType = 'skills' | 'education' | 'experience';

export const Resume: FC = () => {
  const [activeComponent, setActiveComponent] = useState<ActiveBlockType>('experience');

  const educationClickHandler = (): void => setActiveComponent('education');

  const skillsClickHandler = (): void => setActiveComponent('skills');

  const experienceClickHandler = (): void => setActiveComponent('experience');

  const experienceClassName = `${activeComponent === 'experience' ? s.active : ''} ${
    s.resumeBtn
  }`;
  const educationClassName = `${activeComponent === 'education' ? s.active : ''} ${
    s.resumeBtn
  }`;
  const skillsClassName = `${activeComponent === 'skills' ? s.active : ''} ${
    s.resumeBtn
  }`;

  // eslint-disable-next-line consistent-return
  const returnRenderComponent = useCallback(() => {
    if (activeComponent === 'education') {
      return <Education />;
    }

    if (activeComponent === 'skills') {
      return <Skills />;
    }

    return <Experience />;
  }, [activeComponent]);

  return (
    <div className={s.resumeBox}>
      <div className={s.resumeBtnBox}>
        <button
          type="button"
          onClick={experienceClickHandler}
          className={experienceClassName}
        >
          experience
        </button>
        <button type="button" onClick={skillsClickHandler} className={skillsClassName}>
          skills
        </button>
        <button
          type="button"
          onClick={educationClickHandler}
          className={educationClassName}
        >
          education
        </button>
      </div>
      <div className={s.resumeComponentBox}>{returnRenderComponent()}</div>
    </div>
  );
};
