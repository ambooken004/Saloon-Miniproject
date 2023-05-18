import React from 'react';
import './LoginPage.css';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom' ; 

const LoginPage = () => {
  return (
    <>
    <button className='back-btn'>
      <Link to='/' style={{ textDecoration: "none"}}>Back</Link>
      </button>
      <h1 className='login-h1'>Log In Here</h1>
    <main className='main'>
    <div className='login-container text-center'>
      <Container>
        <form>
          <div className='user-details py-2 ms-2 text-center text-dark'>
            <h5>Email</h5>
            <input type='email' placeholder='Email' className='mt-2 py-2 w-100 rounded-pill text-center'></input>
            <h5 className='mt-3'>Password</h5>
            <input type='password' placeholder='Password' className='mt-3 py-2 w-100 rounded-pill text-center'></input>
          </div>
          <div className='login-btns mt-5 mb-1 text-dark'>
            <Button bg='dark' variant='dark rounded-pill'>
              <Link to='/homepage' style={{ textDecoration: "none", color: "whitesmoke"}}>Log In</Link>
              </Button>
            <p> -- OR -- </p>
            <Button bg='dark' variant='outline-dark rounded-pill'>
              <Link to='/signuppage' style={{ textDecoration: "none"}}>Sign Up</Link>
              </Button>
          </div>
      </form>
      </Container>
    </div>
    </main>
    </>
  );
};

export default LoginPage;