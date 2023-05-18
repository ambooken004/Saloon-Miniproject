import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Cards.css';

const Cards = ({ cards }) => {
  return (
    <div className='card-container'>
      {
        cards.map((card) => (
          <Card style={{ width: '150px', height: '20rem'}} className='card-line-item text-center mt-5 h-25 p-4  rounded-top'>
            <Card.Img variant="top" className=' w-100 h-50 rounded-circle' src={card.src}/>
            <Card.Body>
            <Card.Title>{card.service}</Card.Title>
            <Card.Text>{card.description}
              <h6 className='mt-3'>Rs: {card.rate}</h6>
            </Card.Text>
            <Button variant="outline-light rounded-pill">Book Time Slot</Button>
            </Card.Body>
        </Card>
        ))
      }

        
    </div>
  );
};

export default Cards;