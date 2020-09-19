import React from 'react';

const CardChar = ({ character }) => {
  return (
    <div className='col-lg-3 col-md-4 mb-4'>
      <div className='card'>
        <img src={character.image} alt={character.name} className='img-fluid rounded-top' />
        <div className='card-body'>
          <p className='text-center m-0'>{character.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CardChar;
