import React from 'react';
import './ContactUs.scss';

const ContactUs = (props) => {
  return<div style={{height:'100%'}}> <div className="contactUsContainer">
    <div className="contactHeader">CONTACT US</div>
    <div className="contactDetailsContainer">
          <div className='gmailId'>GmailId: sscacademy367@gmail.com</div>
          <div className='gmailId'>Mobile No: 9496291367</div>
          <div className='gmailId'>Instagram : <a className='socialLink' href="https://www.instagram.com/fradoacademy/"> Frado Academy</a></div>
          <div className='gmailId'>Telegram :<a className='socialLink' href="https://t.me/joinchat/SoORLBg23ymtz-9KtX2-4g"> Frado Psc Academy( For PSC Aspirants)</a></div>
    </div>
  </div>
  </div>;
};

export default ContactUs;
