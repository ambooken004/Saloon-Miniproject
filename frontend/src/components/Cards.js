import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Cards.css';
import { Link } from 'react-router-dom';

const Cards = ({ carddata }) => {
  
  return (
    <div className='card-container'>
      {
        carddata.map((card) => (
          <Card style={{ width: '150px', height: '20rem'}} className='card-line-item text-center mt-5 h-25 p-4  rounded-top'>
            <Card.Img variant="top" className=' w-100 h-50 rounded-circle' src={card.image}/>
            <Card.Body>
            <Card.Title>{card.service}</Card.Title>
            <Card.Text>{card.description}
              <h6 className='mt-3'>Rs: {card.rate}</h6>
            </Card.Text>
             <Button variant="outline-light rounded-pill">
              <Link to={`/timeslotpage`} style={{ textDecoration: "none"}}>Book Time-Slot</Link>
            </Button>
            </Card.Body>
        </Card>
        ))
      }

        
    </div>
  );
};

export default Cards;