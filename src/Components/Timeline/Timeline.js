import React from 'react';
import styles from './timeline.module.css';
const Timeline = () => {
  return (
    <div className={styles.timeline}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.work}>
            <span className={styles.heading}>
              Consultant at TechVerito Software Solutions LLP.
            </span>
            <img src="/techverito.png" alt="Avatar" className={styles.avatar}/>
            <span className={styles.date}>
              DEC,2018 - present ,Pune,Maharastra
            </span>
          </p>
          <ul className={styles.list}>
            <li>
              Designed, Architected and Developed Highly Responsive, SEO
              friendly, Web Application using Angular.
            </li>
            <li>
              Created Search Engine-friendly Internationalized Web Application
              using ngx-translate with Angular Universal which included
              server-side rendering and pre-rendering.
            </li>
            <li>
              Developed Responsive, SEO friendly, Web Application utilizing
              React.js and Vue.js for Client's Internal Usage.
            </li>
            <li>
              Revamped Application built in Ionic to use Reactive paradigm using
              RxJs Package rather than using promises.
            </li>
            <li>Developed Restful API in Golang</li>
            <li>Covered 90% unit test cases using karma and jasmine</li>
            <li>
              Used Agile practices and Test Driven Development techniques to
              provide reliable, working software early and often
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.work}>
            <span className={styles.heading}>
              Software Engineer at Mphasis Ltd.
            </span>
            <img src="/mphasis.png" alt="Avatar" className={styles.avatar}/>
            <span className={styles.date}>
              JULY, 2017- DEC,2018, Chennai, TamilNadu
            </span>
          </p>
          <ul className={styles.list}>
            <li>
              Revamped the existing Application from Angular 2 to Angular 5.
            </li>
            <li>
              Packaged an Angular-5-datatable Library so that it can be consumed
              by the Application.
            </li>
            <li>
              Built a WAR of Angular and Spring Boot application using Maven
            </li>
            <li>Worked in Deployement of integrated application on Tomcat.</li>
            <li>
              Actively involved in providing the technical support of the
              application by troubleshooting and resolving the issues.
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.work}>
            <span className={styles.heading}>
              National Institute of Technology, Puducherry.
            </span>
            <img src="/nitpy.jpeg" alt="Avatar" className={styles.avatar}/>
            <span className={styles.date}>
              Bachelor of Technology in Computer Science and Engineering, July 2013 - June,
              2017
            </span>
          </p>
          <ul className={styles.list}>
            <li>
              Worked as an event coordinator for CBUG DBUG event at Institute’s
              Annual Technical fest KNOSYS’16
            </li>
            <li>
              An active member of T&P cell at National Institute of
              Technology,Puducherry.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
