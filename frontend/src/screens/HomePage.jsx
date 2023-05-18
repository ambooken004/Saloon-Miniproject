import React from 'react';
import './HomePage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
const HomePage = () => {
  return (
    <>
    <Header />
      <div className='main-body'>
        <div className='text'>
          <h3 className='quote'>"If life doesn't allow you to change anything else, get a new hairstyle"</h3>
        </div>
      </div>
    <Footer />
    </>
  );
};

export default HomePage;