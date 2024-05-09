import React, { FC } from 'react';
import { faUser, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import s from './PersonalInfo.module.scss';
import { personalInfo } from './constants';
import MyPDF from './cv/cv.pdf';
import { PersonalInfoItemType } from 'components/a3-AboutMe/PersonalInfo/types';

export const PersonalInfo: FC = () => {
  const info = personalInfo.map((el: PersonalInfoItemType, index: number) => (
    <li className={s.personalInfoItem} key={index}>
      <span className={s.title}>{el.title}</span>
      <span className={s.content}>{el.content}</span>
    </li>
  ));

  return (
    <div className={s.personalBox}>
      <div className={s.personalInfo}>
        <div className={s.personalInfoTitle}>
          <span className={s.personalIcon}>
            <FontAwesomeIcon icon={faUser} />
          </span>
          <h4 className={s.personalInfoHeading}>Personal Info</h4>
        </div>
        <div className={s.personalDesc}>
          I have 3 years of commercial development experience. My main focus is front-end,
          but I have commercial experience in mobile development and back-end development.
          I have experience developing applications both in a team and individually. Now I
          am strengthening my knowledge in backend development by studying NodeJS, PHP and
          SQL more deeply. I have experience in teaching and mentoring, and am currently a
          practicing teacher at "STEP IT Academy" for a "front-end development" course.
        </div>
        <div className={s.personalInfoInner}>
          <ul className={s.personalInfoList}>{info}</ul>
        </div>
      </div>
      <div className={s.resume}>
        <a
          className={s.resumeLink}
          href={MyPDF}
          download="CV_OlegVeremyev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Download CV</span> <FontAwesomeIcon icon={faFileArrowDown} />
        </a>
      </div>
    </div>
  );
};
