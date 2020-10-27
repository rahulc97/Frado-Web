import React from 'react';
import './AboutUs.scss';

const AboutUs = (props) => {
  return (
    <div style={{ height: '100%' }}>
      {' '}
      <div className="aboutUsContainer">
        <div className="aboutHeader">ABOUT US</div>
        <div className="aboutDetailsContainer">
          <div className="aboutContent">
            Frado Academy started with the sole purpose of preparing the
            candidates to succeed and qualify various competitive exams. The
            Academy began its journey in the first half of 2020 by conducting
            numerous mock test of various competitive exams for the aspirants.
            Our motto is to conduct extensive range of high quality mock test
            with thousands of questions as per latest exam pattern of Kerala
            PSC, SSC, Railway etc. Comprehensive study material and syllabus
            based study routine of Frado helps excell in all area of
            competition. Apart from daily study routine, the academy also
            conducts weekly and monthly revision which help students to remain
            intact with various concepts. The academy also offers special
            mentoring programs in small group which help candidate to compete
            and collaborate with each other in a fun and engaging environment.
            These group activities help them in better understanding the
            problems and their solutions and also clearing their doubts. Frado
            helps you as guide and trusted friend in achieving your dreams.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
