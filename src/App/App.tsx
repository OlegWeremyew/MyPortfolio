import React from 'react';
import s from './App.module.scss';
import { Menu, RoutesComponent, Avatar } from 'components';
import { ReturnComponentType } from 'types';

export const App = (): ReturnComponentType => (
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
