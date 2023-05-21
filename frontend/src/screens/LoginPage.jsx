import React, { useState, useEffect } from 'react';
import './LoginPage.css';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom' ;
import axios from 'axios'; 
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';


const LoginPage = ({navigate}) => {


  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ error, setError ] = useState(false);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");  // Navigate to the new page

      if(userInfo)
      {
        navigate('/homepage');
      }
    },);
  

  const loginHandler = async (e) => {
    e.preventDefault();

    try{
      const config = {
        headers: {
          "Content-type": "application/json"
        }
      };

      setLoading(true);

      const { data } = await axios.post('/api/users/login', {
        email,password
      },
      config
    );

    console.log(data);

    localStorage.setItem('userInfo', JSON.stringify(data));

      setLoading(false);
    }
    catch(error)
    {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  
  
  return (
    <>
    {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
    {loading && <Loading />}
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

            <input type='email' placeholder='Email' className='mt-2 py-2 w-100 rounded-pill text-center' value={email} onChange={(e) => setEmail(e.target.value)}></input>

            <h5 className='mt-3'>Password</h5>

            <input type='password' placeholder='Password' className='mt-3 py-2 w-100 rounded-pill text-center' value={password} onChange={(e) => setPassword(e.target.value)}></input>
          </div>
          <div className='login-btns mt-5 mb-1 text-dark'>
            <Button bg='dark' variant='dark rounded-pill' onClick = {loginHandler}>
              <Link style={{ textDecoration: "none", color: "whitesmoke"}}>Log In</Link>
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