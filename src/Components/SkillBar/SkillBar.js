import React from 'react';
import styles from './skillBar.module.css';
function SkillBar(props) {
  const skill = +props.number;

  const number = [1, 2, 3, 4, 5];
  const skillBar = number.map((val) => {
    if (val < skill) {
      return <span key={val} className={styles.active}></span>;
    } else {
      return <span key={val} className={styles.inactive}></span>;
    }
  });
  return <React.Fragment>{skillBar}</React.Fragment>;
}

export default SkillBar;
