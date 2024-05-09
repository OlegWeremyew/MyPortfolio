import React, { FC, ReactElement } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import s from './Projects.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { project } from './constants';
import { ProjectItemType } from 'components/a4-Portfolio/Projects/types';
import petProject from './projectStatus/pet-project.png';
import jobProject from './projectStatus/job-project.png';

export const Projects: FC = () => {
  const projects = project.map(
    (project: ProjectItemType): ReactElement => (
      <div className={s.tiles} key={project.id}>
        <h1>{project.heading}:</h1>
        <div className={s.tile}>
          <div className={s.projectStatus}>
            <img
              src={project.github ? petProject : jobProject}
              alt={project.github ? 'Pet project' : 'Job project'}
            />
            <span>{project.github ? 'Pet project' : 'Job project'}</span>
          </div>
          <img src={project.image} className={s.projectImage} alt="project" />
          <div className={s.details}>
            <span className={s.title}>{project.heading}</span>
            <span className={s.info}>
              {project.heading !== 'My guide' && (
                <FontAwesomeIcon icon={faEye} className={s.icon} />
              )}
              <>
                {project.heading === 'My guide' ? (
                  <span className={s.notLink}>Was not released</span>
                ) : (
                  <a
                    href={project.demo}
                    className={s.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                )}
              </>
            </span>
            <span className={s.info}>
              {project.github && <FontAwesomeIcon icon={faGithub} className={s.icon} />}
              <>
                {!project.github ? (
                  <span className={s.notLink}>Sorry, privet repository</span>
                ) : (
                  <a
                    href={project.github}
                    className={s.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Go to GitHub repository
                  </a>
                )}
              </>
            </span>
          </div>
        </div>
        <p>{project.description}</p>
        <hr />
      </div>
    ),
  );

  return <div className={s.projectBox}>{projects}</div>;
};
