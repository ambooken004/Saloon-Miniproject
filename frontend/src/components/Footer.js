import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
  <>
    <h3 className='msg bg-dark text-white m-0'>Follow Us On:</h3>
    <div className='footer-container p-3 text-start'>
      <div className='social-media py-3 px-5 m-2'>
        <img src='https://static.wixstatic.com/media/d2252d_6ca1fbabe96349f5a428f31c785a95af~mv2.png' alt='Instagram'></img>
        <label>Instagram</label>
        <img src='https://play-lh.googleusercontent.com/KxeSAjPTKliCErbivNiXrd6cTwfbqUJcbSRPe_IBVK_YmwckfMRS1VIHz-5cgT09yMo' alt='Snapchat'></img>
        <label>Snapchat</label>
        <img src='https://cdn-icons-png.flaticon.com/512/124/124021.png' alt='Twitter'></img>
        <label>Twitter</label>
        <img src='https://www.citypng.com/public/uploads/preview/facebook-meta-logo-icon-hd-png-21635448459rwf3wreopa.png' alt='Meta'></img>
        <label>Meta</label>
        <img src='https://cdn-icons-png.flaticon.com/512/3938/3938041.png' alt='WhatsApp'></img>
        <label>WhatsApp</label>
      </div>
      {/* <div className='further-contacts'></div> */}
    </div>
    </>
  );
};

export default Footer;