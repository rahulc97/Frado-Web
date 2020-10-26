import React from 'react';
import MainCoverImage from '../../assets/girlWrite.jpeg';
import ComputerImage from '../../assets/computer.jpeg';
import BookImage from '../../assets/book.jpeg';
import NewImage from '../../assets/new.png';
import LapBook from '../../assets/lapBook.jpeg';
import ComingSoon from '../../assets/comingSoon.png';
import './MainPage.scss';

const MainPage = (props) => {
  return (
    <div>
      {/* <SideDrawer /> */}
      {/* <div className='desktopOnly'>
        <NavigationBar />
      </div> */}

      <div className="mainCard">
        <div className="mainContainer">
          <img className="imageCover" src={MainCoverImage} alt="img" />
          <div className="cardDescription">
            <h1 className="fradoTitle">FRADO ACADEMY</h1>
            Frado Academy is an initiative with the sole purpose of introducing
            the aspirants to the world of competitive exams and help them
            explore opportunities available. Frado study system help candidates
            to climb the path to success by the latest and effective learning
            methods, with the use of technology and cyberspace.Our well
            disciplined learning system and activities like model exams and
            quizzes help the candidates to face the competition with abundance
            of confidence.
            <br />
            &nbsp; &nbsp; &nbsp;Our personal mentoring program help students
            excel in those subjects in which they need extra care.
          </div>
        </div>
      </div>
      <div className="marqueeDiv">
        <a href="/register" style={{ color: 'inherit' }}>
          <marquee>
            <img style={{ width: '40px' }} src={NewImage} alt="new" />
            &nbsp;&nbsp;&nbsp;Course Registration Started....Register Now To
            Join Our Course....!&nbsp;&nbsp;&nbsp;
            <img style={{ width: '40px' }} src={NewImage} alt="new" />
          </marquee>
        </a>
      </div>
      <div className="motoDiv">
        '&nbsp;Your Success is our necessity too&nbsp;'
      </div>
      <div className="cardContainer">
        <div className="cardView">
          <img className="imageCard" src={ComputerImage} alt="img" />
          <div className="cardHeader">NTPC MENTOR</div>
          <div className="cardDescription">
            • Quantitative Aptitude and Reasoning Classes
            <br /> • Online class with 20 students in each batch
            <br />• Personal Mentoring and Doubt clearing sessions
            <br />• Short cuts and Maths Tricks
            <br />• Discussion through PYQs
            <br /> • Other results improving activities
            <br />
            <br />
            <h3 style={{ color: 'red' }}>Class starts on 3-11-2020</h3>
            <p>
              <strong>
                Fee : <del> &nbsp;3000 Rs&nbsp; </del> &nbsp;2000/- Rs Only
              </strong>
            </p>
          </div>
        </div>

        <div className="cardView">
          <img className="imageCard" src={BookImage} alt="img" />
          <div className="cardHeader">PSC EXAM BATCH</div>
          <img src={ComingSoon} alt="comingSoon" className="comingSoon" />
          {/* uncomment and add description below */}
          {/* <div className="cardDescription">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </div> */}
        </div>

        <div className="cardView">
          <img className="imageCard" src={LapBook} alt="img" />
          <div className="cardHeader">SSC </div>
          <img src={ComingSoon} alt="comingSoon"  className="comingSoon"/>
          {/* uncomment and add description below */}
          {/* <div className="cardDescription">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
