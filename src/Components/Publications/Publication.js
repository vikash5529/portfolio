import React from 'react';
import styles from './publication.module.css';
const Publication = () => {
  return (
    <div className={styles.timeline}>
      <div className={styles.container}>
        <div className={styles.content}>
          <ul className={styles.list}>
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://medium.com/@erVikas1/how-to-design-a-typescript-model-for-response-returned-by-httpclient-library-in-angular-a5e7f6c6b110'
            >
              <li>
                How to design a Typescript Model for Response Returned By
                HttpClient library in Angular.
              </li>
            </a>
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://medium.com/@erVikas1/how-to-keep-an-observable-returned-by-httpclient-alive-after-error-da6c5e601e9c'
            >
              <li>How to keep an Observable alive after Error in Angular?</li>
            </a>
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://medium.com/@erVikas1/angular-and-typescript-public-properties-a5a3c363b790'
            >
              <li>Angular and TypeScript Private Properties.</li>
            </a>
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://medium.com/@erVikas1/angular-passing-callback-function-to-child-component-3d482ad376ee'
            >
              <li>Angular passing callback function to child component</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Publication;
