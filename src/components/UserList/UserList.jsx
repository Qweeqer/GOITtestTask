import { useState, useEffect } from 'react';
import css from './UserList.module.css';
import { UserItems } from '../UserItems/UserItems';

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreUsers, setHasMoreUsers] = useState(true);
  const tweetsPerPage = 8;

  useEffect(() => {
    let isMounted = true; // Стан для перевірки, чи досі компонент встановлений

    const loadInitialUsers = async () => {
      const apiUrl = 'https://643a7f6f90cd4ba563fabc3c.mockapi.io/api/v2/users';
      try {
        const response = await fetch(
          `${apiUrl}?page=${currentPage}&limit=${tweetsPerPage}`
        );
        const loadedUsers = await response.json();
        if (isMounted) {
          // Перевірка, чи компонент все ще встановлений
          setUsers(prevUsers => [...prevUsers, ...loadedUsers]);
          setCurrentPage(prevPage => prevPage + 1);
        }
      } catch (error) {
        console.error('Помилка при отриманні даних:', error);
      }
    };

    loadInitialUsers();

    return () => {
      isMounted = false; // Очистка стану при демонтажі компонента
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMore = async () => {
    const apiUrl = 'https://643a7f6f90cd4ba563fabc3c.mockapi.io/api/v2/users';
    try {
      const response = await fetch(
        `${apiUrl}?page=${currentPage}&limit=${tweetsPerPage}`
      );
      const loadedUsers = await response.json();
      setUsers(prevUsers => [...prevUsers, ...loadedUsers]);

      // Перевірка на наявність наступної сторінки
      if (loadedUsers.length < tweetsPerPage) {
        setHasMoreUsers(false);
      } else {
        if (hasMoreUsers) {
          setCurrentPage(prevPage => prevPage + 1);
        }
      }
    } catch (error) {
      console.error('Помилка при отриманні даних:', error);
    }
  };

  return (
    <div className={css.UserList}>
      <div className={css.cardsContainer}>
        {users.map((user, index) => {
          return <UserItems key={`${user.id}-${index}`} user={user} />;
        })}
      </div>
      {hasMoreUsers && (
        <button onClick={loadMore} className={css.loadMoreButton}>
          Load More
        </button>
      )}
    </div>
  );
};
