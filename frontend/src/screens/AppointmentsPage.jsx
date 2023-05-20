import React, { useEffect, useState} from 'react';
import './AppointmentsPage.css';
import {} from 'react-router-dom';
import Header from '../components/Header';
import Cards from '../components/Cards';
import { Container } from 'react-bootstrap';
import axios from 'axios';

const AppointmentsPage = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/servicesdata'); // Replace '/api/data' with your actual backend API endpoint
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className='appointments-container'>
      <Header />
      <Container>
        <h1 className='appointments-heading text-white text-center mt-2 p-1'>Our Services</h1>
        <main className='main'></main>
        <Cards carddata = {data}/>
      </Container>
    </div>
  );
};

export default AppointmentsPage;