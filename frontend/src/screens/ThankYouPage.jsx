import React from 'react';
import './ThankYouPage.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ThankYouPage = () => {
  return (
    <body>
      <div className='thankyou-container'>
        <div className='thankyou-block'>
         <h3 className='thank-msg mb-3 p-2'>Thank You For Using Our Booking Service!!...</h3>
         <Button variant='primary rounded-pill mt-5 p-2'>
          <Link to='/homepage' style={{ textDecoration: "none", color: "white"}}>Go Back To Home Page</Link></Button>
       </div>
     </div>
    </body>
  );
};

export default ThankYouPage;