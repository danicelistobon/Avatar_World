import React from 'react';

const CardPlace = ({ place }) => {
  return (
    <div className='col-lg-3 col-md-4 mb-4'>
      <div className='card'>
        <img src={place.image} alt={place.name} className='img-fluid rounded-top' />
        <div className='card-body'>
          <p className='text-center m-0'>{place.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CardPlace;
