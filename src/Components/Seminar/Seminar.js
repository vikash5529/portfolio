import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Seminar = () => {
	return (
    <Carousel>
      <div>
        <img src='./ngdev-seminar.jpg' alt="Organised Angular dev to prod Meetup" />
        <p className='legend'>Organised Angular dev to prod Meetup</p>
      </div>
      <div>
        <img src='./rxjs-seminar.jpeg' alt="Introduction to Reactive Programming and RxJs" />
        <p className='legend'>Introduction to Reactive Programming and RxJs</p>
      </div>
      <div>
        <img src='./ionic-seminar.jpeg' alt="Introduction to Ionic Appflow's Live Deploy feature." />
        <p className='legend'> Introduction to Ionic Appflow's Live Deploy feature.</p>
      </div>
      <div>
        <img src='./angular-seminar.jpeg' alt="Introduction to SPA with Angular"  />
        <p className='legend'>Introduction to SPA with Angular</p>
      </div>
    </Carousel>
  );
};

export default Seminar;
