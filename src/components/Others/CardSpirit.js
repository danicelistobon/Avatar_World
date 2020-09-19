import React from 'react';

const CardSpirit = ({ spirit }) => {
  return (
    <div className='col-lg-3 col-md-4 mb-4'>
      <div className='card'>
        <img src={spirit.image} alt={spirit.name} className='img-fluid rounded-top' />
        <div className='card-body'>
          <p className='text-center m-0'>{spirit.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CardSpirit;
