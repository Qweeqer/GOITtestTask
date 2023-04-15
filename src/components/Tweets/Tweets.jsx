// import React from 'react';
// import { Link } from 'react-router-dom';
// import { UserList } from '../UserList/UserList';
// import css from './Tweets.module.css';

// export const Tweets = () => {
//   return (
//     <div>
//           <Link className={css.link } to="/">Back</Link>
//       <h1 className={css.title}>Сторінка з твітами</h1>
//       <UserList />
//     </div>
//   );
// };

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserList } from '../UserList/UserList';
import css from './Tweets.module.css';

export const Tweets = () => {
  const [filter, setFilter] = useState('all'); // стан фільтрації

  const handleFilterChange = event => {
    setFilter(event.target.value); // оновлення стану фільтрації при виборі нової опції
  };

  return (
    <div className={css.container}>
      <div className={css.header}>
        <Link className={css.link} to="/home" replace>
          Back
        </Link>
        <div className={css.mainContent}>
          <h1 className={css.title}>Сторінка з твітами</h1>
          {/* Компонент Dropdown з опціями для фільтрації */}
          <div className={css.dropdown}>
            <label htmlFor="filter">Sort by:</label>
            <select
              className={css.filter}
              id="filter"
              value={filter}
              onChange={handleFilterChange}
            >
              <option value="all">Show all</option>
              <option value="follow">Show Follow</option>
              <option value="following">Show Following</option>
            </select>
          </div>
        </div>
      </div>

      {/* Компонент UserList з фільтрацією */}
      <div className={css.content}>
        <UserList filter={filter} />
      </div>
    </div>
  );
};
