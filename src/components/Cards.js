import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out some things I've done!</h1>
        <div className="cards__container">
         <div className="cards__wrapper">
            <ul className='cards__items'>
                <CardItem 
                src={`${process.env.PUBLIC_URL}/images/img-21.jpg`}
                text="Explored The World"
                label="Adventure"
                path='/photo-gallery'
                />
                <CardItem 
                src={`${process.env.PUBLIC_URL}/images/coding2.jpg`}
                text="Built a Few Websites"
                label="Work"
                path='/services'
                />
            </ul> 
            <ul className='cards__items'>
                <CardItem 
                src={`${process.env.PUBLIC_URL}/images/dj2.jpg`}
                text="Learned to DJ"
                label="Music"
                path='/services'
                />
                <CardItem 
                src={`${process.env.PUBLIC_URL}/images/marathon.jpg`}
                text="Ran a Few Races"
                label="Running"
                path='/services'
                />
                <CardItem 
                src={`${process.env.PUBLIC_URL}/images/projects.jpg`}
                text="Upcoming Projects"
                label="Unknown"
                path='/services'
                />
            </ul> 
         </div>
        </div>
    </div>
  );
}

export default Cards;
