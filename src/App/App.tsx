import React, { FC } from 'react';
import s from './App.module.scss';
import { Menu, RoutesComponent, Avatar } from 'components';

export const App: FC = () => (
  <div className={s.wrapper}>
    <div className={s.leftBox}>
      <Avatar />
    </div>
    <div className={s.rightBox}>
      <Menu />
      <RoutesComponent />
    </div>
  </div>
);
