import React from 'react';
import styles from './Feedback.module.css';
import shortid from 'shortid';

const Feedback = ({ options, onFeedback }) => {
  const handleClickFeedback = e => {
    const name = e.currentTarget.textContent;
    onFeedback(name);
  };

  return (
    <div>
      <ul className={styles.Feedback__list}>
        {options.map(option => {
          return (
            <li key={shortid.generate()} className={styles.Feedback__item}>
              <button type="button" onClick={handleClickFeedback}>
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Feedback;
