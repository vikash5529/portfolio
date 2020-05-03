import React from 'react';
import styles from './sideBar.module.css';
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
  AiFillGithub,
  AiFillMail,
} from 'react-icons/ai';
import { FaStackOverflow, FaMediumM } from 'react-icons/fa';
import { IconContext } from 'react-icons';
function SideBar() {
  return (
    <aside className={styles.aside}>
      <div className={styles.imageContainer}></div>
      <div className={styles.person}>
        <h2 className={styles.title}>Vikash Singh</h2>
        <h2 className={styles.designation}>Full Stack Web Developer</h2>
      </div>
      <IconContext.Provider value={{ className: 'icon-wrapper' }}>
        <div className={styles.icon_container}>
          <p>CONNECT WITH ME</p>

          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://www.linkedin.com/in/ervikash/'
          >
            <AiFillLinkedin></AiFillLinkedin>
          </a>
          <a
            rel='noopener noreferrer'
            href='https://www.instagram.com/vikas_er1/'
            target='_blank'
          >
            <AiFillInstagram></AiFillInstagram>
          </a>
          <a
            rel='noopener noreferrer'
            href='https://www.facebook.com/VikasSingh03'
            target='_blank'
          >
            <AiFillFacebook></AiFillFacebook>
          </a>
          <a
            rel='noopener noreferrer'
            href='https://github.com/vikash5529'
            target='_blank'
          >
            <AiFillGithub></AiFillGithub>
          </a>
          <a
            rel='noopener noreferrer'
            href='https://stackoverflow.com/users/5695162/vikas'
            target='_blank'
          >
            <FaStackOverflow></FaStackOverflow>
          </a>
          <a
            rel='noopener noreferrer'
            href='https://medium.com/@erVikas1'
            target='_blank'
          >
            <FaMediumM></FaMediumM>
          </a>
          <a rel='noopener noreferrer' href='mailto:vikas.cs13b@gmail.com'>
            <AiFillMail></AiFillMail>
          </a>
        </div>
      </IconContext.Provider>
    </aside>
  );
}

export default SideBar;
