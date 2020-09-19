import React, { useEffect, useState } from 'react';
import axiosClient from '../../config/axios';
// Components
import Header from '../Common/Header';
import CardChar from './CardChar';
import Footer from '../Common/Footer';

const Characters = () => {
  const [characters, saveCharacters] = useState([]);
  useEffect(() => {
    const getCharacters = () => {
      axiosClient.get('/api/characters')
        .then(res => {
          saveCharacters(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    };
    getCharacters();
  }, []);

  if (characters.length === 0) {
    return null;
  }

  return (
    <>
      <Header />
      <main className='container'>
        <h1 className='text-center my-5'>Characters</h1>
        <div className='row'>
          {characters.map(character => (
            <CardChar key={character.id} character={character} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Characters;
