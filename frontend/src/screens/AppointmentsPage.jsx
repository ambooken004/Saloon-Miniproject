import React from 'react';
import './AppointmentsPage.css';
import {} from 'react-router-dom';
import Header from '../components/Header';
import Cards from '../components/Cards';
import { Container } from 'react-bootstrap';

const AppointmentsPage = () => {

  const cardsDetails = [
    { service: "Haircut", id: 1, src: "https://img.freepik.com/premium-photo/side-view-man-getting-new-hairstyle_23-2148242799.jpg",  description: "Get a Good Haircut", rate: 120 },
    { service: "Shaving", id: 2, src: "https://img.freepik.com/premium-photo/young-man-shaving-with-straight-edge-razor-by-hairdresser-barbershop_359687-547.jpg",  description: "Shave Your Beard", rate: 160 },
    { service: "Dyeing", id: 3, src: "https://thumbs.dreamstime.com/b/close-up-view-hairdresser-colouring-hair-man-salon-men-mask-lying-chair-229969181.jpg",  description: "Dye Your Hair", rate: 140 }
  ];


  return (
    <div className='appointments-container'>
      <Header />
      <Container>
        <main className='main'></main>
        <Cards cards = {cardsDetails}/>
      </Container>
    </div>
  );
};

export default AppointmentsPage;