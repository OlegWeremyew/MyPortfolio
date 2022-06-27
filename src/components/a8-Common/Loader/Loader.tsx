import React, {FC} from 'react';
import s from './Loader.module.scss';

export const Loader: FC = () => {
    return (
        <div className={s.ldsRipple}>
            <div></div>
            <div></div>
        </div>
    )
}