import React from 'react';
import styles from './main.module.css';
import Skill from '../Skills/Skill';
import Achivements from '../Achivements/Achievements';
import Timeline from '../Timeline/Timeline';
import About from '../About/About';
import Publication from '../Publications/Publication';
import Seminar from '../Seminar/Seminar';
function Main(props) {
  return (
    <main className={styles.main}>
      <section className={styles.row}>
        <div>
          <h2 className={styles.heading}>ABOUT ME</h2>
           <About/>
          <section>
            <h2 className={styles.heading}>SKILLS</h2>
            <Skill/>
          </section>
        </div>
        <div>
          <h2 className={styles.heading}>ACHIEVEMENTS</h2>
          <Achivements/>
        </div>
      </section>
      <section>
        <h2 className={styles.heading}>TIMELINE</h2>
        <Timeline />
      </section>
      <section>
        <h2 className={styles.heading}>PUBLICATIONS</h2>
        <Publication/>
      </section>
      <section>
        <h2 className={styles.heading}>TALKS/SEMINAR</h2>
        <Seminar/>
      </section>
    </main>
  );
}

export default Main;
