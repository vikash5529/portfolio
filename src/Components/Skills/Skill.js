import React from 'react';
import SkillBar from '../SkillBar/SkillBar';
import styles from './skill.module.css';
function Skill(props) {
  const skill = [
    { name: 'Angular', rating: 5 },
    { name: 'React.js', rating: 4 },
    { name: 'Vue.js', rating: 4 },
    { name: 'Ionic', rating: 4 },
    { name: 'Redux/NGRX', rating: 4 },
    { name: 'RxJs', rating: 5 },
    { name: 'JavaScript/ES6', rating: 4 },
    { name: 'Typescript', rating: 4 },
    { name: 'Karma/Jasmine', rating: 4 },
    { name: 'Go', rating: 3 },
    { name: 'Java', rating: 3 },
    { name: 'Spring Boot', rating: 3 },
    { name: 'HTML5', rating: 5 },
    { name: 'CSS3/SCSS/SASS', rating: 5 },
    { name: 'Docker', rating: 3 },
  ];

  const skillSet = skill.map((value) => {
    return (
      <div key={value.name} className={styles.skill}>
        <div>{value.name}</div>
        <div>
          <SkillBar number={value.rating} />
        </div>
      </div>
    );
  });
  return <div className={styles.container}>{skillSet}</div>;
}

export default Skill;
