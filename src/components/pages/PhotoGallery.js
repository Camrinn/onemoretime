// src/components/PhotoGallery.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PhotoGallery.css';

const photos = [
  {
    src: process.env.PUBLIC_URL + '/images/dj2.jpg',
    caption: 'The sqaud in Prague',
  },
  {
    src: process.env.PUBLIC_URL + '/images/France.jpg',
    caption: 'Traveling through Cannes & Nice',
  },
  {
    src: process.env.PUBLIC_URL + '/images/Germany.jpg',
    caption: 'Oktoberfest in 2022',
  },
  {
    src: process.env.PUBLIC_URL + '/images/Tulum.jpg',
    caption: 'Tulum with my guys',
  },
  {
    src: process.env.PUBLIC_URL + '/images/Tulum2.jpg',
    caption: 'More Tulum',
  },
  {
    src: process.env.PUBLIC_URL + '/images/Prague.jpg',
    caption: 'More Prague',
  },
  {
    src: process.env.PUBLIC_URL + '/images/dj2.jpg',
    caption: 'This is the third photo description',
  },
  {
    src: process.env.PUBLIC_URL + '/images/dj2.jpg',
    caption: 'This is the third photo description',
  },
  // Add more photos as needed
];

const PhotoGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="photo-gallery">
      <Slider {...settings}>
        {photos.map ((photo, index) => (
          <div key={index} className="slide">
            <img src={photo.src} alt={`Slide ${index}`} className="slide-image" />
            <p className="slide-caption">{photo.caption}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoGallery;