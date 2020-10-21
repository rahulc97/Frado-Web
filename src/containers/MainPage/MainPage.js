import React from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import MainCoverImage from '../../assets/girlWrite.jpeg';
import ComputerImage from '../../assets/computer.jpeg';
import BookImage from '../../assets/book.jpeg';
import NewImage from '../../assets/new.png';
import './MainPage.scss';

const MainPage = (props) => {
  return (
    <div>
      <NavigationBar />
      <div className="mainCard">
        <div className='mainContainer' >
          <img className="imageCover" src={MainCoverImage} alt="img" />
          <div className="cardDescription">
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
          </div>
        </div>
      </div>
      <div className="marqueeDiv">
        <a href="/register" style={{ color: 'inherit' }}>
          <marquee>
            <img style={{ width: '40px' }} src={NewImage} />
            &nbsp;&nbsp;&nbsp;Course Registration Started....Register Now To
            Join Our Course....!&nbsp;&nbsp;&nbsp;
            <img style={{ width: '40px' }} src={NewImage} />
          </marquee>
        </a>
      </div>
      <div className="motoDiv">
        '&nbsp;Your Success is our necessity too&nbsp;'
      </div>
      <div className="cardContainer">
        <div className="cardView">
          <img className="imageCard" src={BookImage} alt="img" />
          <div className="cardHeader">PSC EXAM BATCH</div>
          <div className="cardDescription">
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
          </div>
        </div>
        <div className="cardView">
          <img className="imageCard" src={ComputerImage} alt="img" />
          <div className="cardHeader">NTPC MENTOR</div>
          <div className="cardDescription">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
