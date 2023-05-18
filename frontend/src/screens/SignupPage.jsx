import React from 'react';
import './SignupPage.css';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  
  return (
    <>
    <button className='back-btn'>
      <Link to='/loginpage' style={{ textDecoration: "none"}}>Back</Link>
      </button>
    <h1 className='signup-h1'>Register Now!!!</h1>
    <main className='main'>
    <div className='signup-container text-center'>
      <Container>
        <div className='signup-details py-2 ms-2 text-center text-dark'>
          <form>
            <h5>Email</h5>
            <input type='email' placeholder='Email' className='mt-2 py-2 w-100 rounded-pill text-center'></input>
            <h5 className='mt-3'>Password</h5>
            <input type='password' placeholder='Password' className='mt-3 py-2 w-100 rounded-pill text-center'></input>
            <div className='signup-btn mt-5 mb-1 text-dark'>
              <Button bg='dark' variant='outline-dark rounded-pill'>
                <Link to='/loginpage' style={{ textDecoration: "none"}}>Register</Link>
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
    </main>
    </>
  
  );
};

export default SignupPage;