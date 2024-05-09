import React, { FC, ReactElement, useCallback, useState } from 'react';
import { Education } from './Education';
import { Skills } from './Skills';
import s from './Resume.module.scss';
import { Experience } from 'components/a3-AboutMe/Resume/Experience/Experience';

enum ActiveContent {
  EDUCATION = 'education',
  SKILLS = 'skills',
  EXPERIENCE = 'experience',
}

export const Resume: FC = () => {
  const [activeComponent, setActiveComponent] = useState<ActiveContent>(
    ActiveContent.EXPERIENCE,
  );

  const educationClickHandler = (): void => setActiveComponent(ActiveContent.EDUCATION);

  const skillsClickHandler = (): void => setActiveComponent(ActiveContent.SKILLS);

  const experienceClickHandler = (): void => setActiveComponent(ActiveContent.EXPERIENCE);

  const experienceClassName = `${
    activeComponent === ActiveContent.EXPERIENCE ? s.active : ''
  } ${s.resumeBtn}`;
  const educationClassName = `${
    activeComponent === ActiveContent.EDUCATION ? s.active : ''
  } ${s.resumeBtn}`;
  const skillsClassName = `${activeComponent === ActiveContent.SKILLS ? s.active : ''} ${
    s.resumeBtn
  }`;

  const returnRenderComponent = useCallback((): ReactElement => {
    if (activeComponent === ActiveContent.EDUCATION) {
      return <Education />;
    }

    if (activeComponent === ActiveContent.SKILLS) {
      return <Skills />;
    }

    return <Experience />;
  }, [activeComponent]);

  return (
    <div className={s.resumeBox}>
      <div className={s.resumeBtnBox}>
        <button
          type="button"
          className={experienceClassName}
          onClick={experienceClickHandler}
        >
          experience
        </button>
        <button type="button" className={skillsClassName} onClick={skillsClickHandler}>
          skills
        </button>
        <button
          type="button"
          className={educationClassName}
          onClick={educationClickHandler}
        >
          education
        </button>
      </div>
      <div className={s.resumeComponentBox}>{returnRenderComponent()}</div>
    </div>
  );
};
