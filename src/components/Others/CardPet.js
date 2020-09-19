import React from 'react';

const CardPet = ({ pet }) => {
  return (
    <div className='col-lg-3 col-md-4 mb-4'>
      <div className='card'>
        <img src={pet.image} alt={pet.name} className='img-fluid rounded-top' />
        <div className='card-body'>
          <p className='text-center m-0'>{pet.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CardPet;
