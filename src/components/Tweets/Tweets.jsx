import React from 'react';
import { Link } from 'react-router-dom';
import { UserList } from '../UserList/UserList';
import css from './Tweets.module.css';

export const Tweets = () => {
  return (
    <div>
          <Link className={css.link } to="/">Back</Link>
      <h1 className={css.title}>Сторінка з твітами</h1>
      <UserList />
    </div>
  );
};
