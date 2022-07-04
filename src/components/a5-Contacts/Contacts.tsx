import React, { FC } from 'react';
import s from './Contacts.module.scss';
import { NavLink } from 'react-router-dom';
import app from 'App/App.module.scss';
import close from 'assets/image/close-button.png';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { ContactBlock } from './ContactBlock';
import { Title } from 'components';

export const Contacts: FC = () => (
  <div className={`${s.contacts} ${s.animation}`}>
    <div className={s.contactsWrapper}>
      <div className={`${s.contactsInner} ${app.container}`}>
        <Title title="my" accentTitle="contacts" icon={faPhoneAlt} />
      </div>
      <div>
        <ContactBlock />
      </div>
    </div>
    <NavLink to="/" className={app.linkBack}>
      <img className={s.imageClose} src={close} alt="link back" />
    </NavLink>
  </div>
);
