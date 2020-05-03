import React from 'react';
import styles from './achivements.module.css';
function Achievements() {
  const achivementSource = [
    { src: '/angular.png', alt: 'Angular' },
    { src: '/react.png', alt: 'React.js' },
    { src: '/vue.png', alt: 'Vue.js' },
    { src: '/Go.png', alt: 'Go' },
  ];
  const achievements = achivementSource.map((value) => {
    return (
      <div key={value.alt}>
        <img height='150px' width='260px' src={value.src} alt={value.alt} />
      </div>
    );
  });
  return <div className={styles.container}>{achievements}</div>;
}

export default Achievements;
