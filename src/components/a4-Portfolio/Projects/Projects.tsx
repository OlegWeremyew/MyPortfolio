import React, { FC } from 'react';
import s from './Projects.module.scss';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { project } from './constants';

export const Projects: FC = () => {
  const projects = project.map(project => (
    <div className={s.tiles} key={project.id}>
      <h1>{project.heading}:</h1>
      <div className={s.tile}>
        <img src={project.image} className={s.projectImage} alt="project" />
        <div className={s.details}>
          <span className={s.title}>{project.heading}</span>
          <span className={s.info}>
            <FontAwesomeIcon icon={faEye} className={s.icon} />
            <a href={project.demo} className={s.link} target="_blank" rel="noreferrer">
              Demo
            </a>
          </span>
          <span className={s.info}>
            <FontAwesomeIcon icon={faGithub} className={s.icon} />
            <a href={project.github} className={s.link} target="_blank" rel="noreferrer">
              Github
            </a>
          </span>
        </div>
      </div>
      <p>{project.description}</p>
      <hr />
    </div>
  ));

  return <div className={s.projectBox}>{projects}</div>;
};
