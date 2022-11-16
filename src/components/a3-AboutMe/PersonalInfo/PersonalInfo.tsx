import s from './PersonalInfo.module.scss';
import React, { FC } from 'react';
import { faUser, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MyPDF from './cv/cv.pdf';
import { personalInfo } from './constants';

export const PersonalInfo: FC = () => {
  const info = personalInfo.map((el, index) => (
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
          I'm a results driven front end developer building SPAs using React and Angular
          (JS/TS). Also I have commercial experience with React Native and Gatsby. I have
          experience with CSS frameworks, CSS libraries and CSS preprocessors. In the
          course of work, I came across databases and docker. I have experience in
          videoconferencing with clients.I have experience of working both in a team and
          individually.
          <p className={s.subPersonalDesc}>
            Ready to consider project work and full-time employment.{' '}
          </p>
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
