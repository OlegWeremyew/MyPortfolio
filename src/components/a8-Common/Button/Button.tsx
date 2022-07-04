import React, { FC } from 'react';
import s from './Button.module.scss';
import { SuperButtonPropsType } from './types';

export const Button: FC<SuperButtonPropsType> = ({
  activeClass,
  className,
  ...restProps
}) => {
  const finalClassName = `${activeClass ? s.activeClass : s.default} ${className}`;

  return <button type="button" className={finalClassName} {...restProps} />;
};
