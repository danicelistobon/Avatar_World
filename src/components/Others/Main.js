import React, { useEffect, useState } from 'react';
import axiosClient from '../../config/axios';
// Components
import Header from '../Common/Header';
import CardBending from './CardBending';
import CardPet from './CardPet';
import CardSpirit from './CardSpirit';
import Footer from '../Common/Footer';

const Others = () => {
  const [bendings, saveBendings] = useState([]);
  useEffect(() => {
    const getBendings = () => {
      axiosClient.get('/api/bendings')
        .then(res => {
          saveBendings(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    };
    getBendings();
  }, []);

  const [pets, savePets] = useState([]);
  useEffect(() => {
    const getPets = () => {
      axiosClient.get('/api/pets')
        .then(res => {
          savePets(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    };
    getPets();
  }, []);

  const [spirits, saveSpirits] = useState([]);
  useEffect(() => {
    const getSpirits = () => {
      axiosClient.get('/api/spirits')
        .then(res => {
          saveSpirits(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    };
    getSpirits();
  }, []);

  if (bendings.length === 0) {
    return null;
  }

  if (pets.length === 0) {
    return null;
  }

  if (spirits.length === 0) {
    return null;
  }

  return (
    <>
      <Header />
      <main className='container'>
        <div>
          <h1 className='text-center my-5'>Bendings</h1>
          <div className='row'>
            {bendings.map(bending => (
              <CardBending key={bending.id} bending={bending} />
            ))}
          </div>
        </div>
        <hr />

        <div>
          <h1 className='text-center mt-4 mb-5'>Pets</h1>
          <div className='row'>
            {pets.map(pet => (
              <CardPet key={pet.id} pet={pet} />
            ))}
          </div>
        </div>
        <hr />

        <div>
          <h1 className='text-center mt-4 mb-5'>Spirits</h1>
          <div className='row'>
            {spirits.map(spirit => (
              <CardSpirit key={spirit.id} spirit={spirit} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Others;
