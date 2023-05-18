import React from 'react';
import './LandingPage.css';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const LandingPage = () => {
  return (
    <>
      <div className='landing-main'>
      <img src='https://img.freepik.com/free-vector/hairdressing-salon-barber-shop-tools-realistic-round-composition-with-scissors-hairdryer-trimmer-monochrome-vector-illustration_1284-30221.jpg?w=2000' alt='Barber Shop Tools' className='barber-tools'></img>
        <Container>
          <div className='landing-page-block'>
          <div className='intro-text'>
            <h2 className='title'>Being Handsome</h2>
            <p className='subtitle'>Getting Handsome With Being Handsome</p>
          </div>
          <div className='landingpage-btns'>
            <Button bg='dark' variant='outline-dark rounded-pill'>
              <Link to='/loginpage' style={{ textDecoration: "none"}}>Book Service</Link>
            </Button>
          </div>
          </div>
        </Container>
      </div>
    </>
    
  );
};

export default LandingPage;