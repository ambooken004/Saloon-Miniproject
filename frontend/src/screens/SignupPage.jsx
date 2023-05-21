import React, { useState, useEffect } from 'react';
import './SignupPage.css';
import { Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

const SignupPage = () => {

  const toLoginNavigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");  // Navigate to the new page

      if(userInfo)
      {
        toLoginNavigate('/loginpage');
      }
    },);

  const signupHandler = async (e) => {
    e.preventDefault();

    try{
      const config = {
        headers: {
          "Content-type": "application/json"
        }
      };

      setLoading(true);

      const { data } = await axios.post('/api/users', {
        email,password
      },
      config
    );
    
    setLoading(false);
    localStorage.setItem("userInfo", JSON.stringify(data));
  }
  catch(error)
    {
      setError(error.response.data.message);
      setLoading(false);
    }
  };
  
  return (
    <>
    <button className='back-btn'>
      <Link to='/loginpage' style={{ textDecoration: "none"}}>Back</Link>
    </button>
    {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
    {loading && <Loading />}
    <h1 className='signup-h1'>Register Now!!!</h1>
    <main className='main'>
    <div className='signup-container text-center'>
      <Container>
        <div className='signup-details py-2 ms-2 text-center text-dark'>
          <form>
            <h5>Email</h5>
            <input type='email' placeholder='Email' className='mt-2 py-2 w-100 rounded-pill text-center' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <h5 className='mt-3'>Password</h5>
            <input type='password' placeholder='Password' className='mt-3 py-2 w-100 rounded-pill text-center' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <div className='signup-btn mt-5 mb-1 text-dark'>
              <Button bg='dark' variant='outline-dark rounded-pill' onClick = {signupHandler}>
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