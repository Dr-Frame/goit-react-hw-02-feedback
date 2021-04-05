import React from 'react';
import Notification from '../Notification/Notification';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total) {
    return (
      <div className={styles.Statistics__group}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Процент позитивных отзывов: {positivePercentage}%</p>
      </div>
    );
  } else {
    return <Notification message="No feedback given" />;
  }
};

export default Statistics;
