import React, { useEffect, useState } from 'react';
import axiosClient from '../../config/axios';
// Components
import Header from '../Common/Header';
import CardPlace from './CardPlace';
import Footer from '../Common/Footer';

const Places = () => {
  const [places, savePlaces] = useState([]);
  useEffect(() => {
    const getPlaces = () => {
      axiosClient.get('/api/places')
        .then(res => {
          savePlaces(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    };
    getPlaces();
  }, []);

  if (places.length === 0) {
    return null;
  }

  return (
    <>
      <Header />
      <main className='container'>
        <h1 className='text-center my-5'>Places</h1>
        <div className='row'>
          {places.map(place => (
            <CardPlace key={place.id} place={place} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Places;
