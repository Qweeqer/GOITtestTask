import React from 'react';
import { Link } from 'react-router-dom';
import ParticlesLines from '../ParticlesLines/ParticlesLines';
import css from './Home.module.css';
import screenTweet from '../../images/screenTweet.png';
import { HomeTitle, WrapperHomePage } from './HomePage.styled';

export const Home = () => {
  return (
    <WrapperHomePage>
      <ParticlesLines />
      <div className={css.mainContainer}>
        <HomeTitle className={css.title}>Домашня сторінка</HomeTitle>
        <Link className={css.link} to="/tweets">
          Tweets
        </Link>
        <h2 className={css.subTitle}>
          Мета: створити картки твітів та додати інтерактивності при клікові на
          кнопку.
        </h2>
        <img src={screenTweet} alt="Картинка з твітом" />
      </div>
    </WrapperHomePage>
  );
};
