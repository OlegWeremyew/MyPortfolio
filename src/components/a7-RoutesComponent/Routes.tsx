import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH } from './constants';
import { AboutMe, Portfolio, Contacts } from 'components';

export const RoutesComponent: FC = () => (
  <div>
    <Routes>
      <Route path={PATH.ABOUT} element={<AboutMe />} />
      <Route path={PATH.PORTFOLIO} element={<Portfolio />} />
      <Route path={PATH.CONTACTS} element={<Contacts />} />
    </Routes>
  </div>
);
