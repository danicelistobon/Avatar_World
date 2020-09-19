import React from 'react';

const CardBending = ({ bending }) => {
  return (
    <div className='col-lg-3 col-md-4 mb-4'>
      <div className='card'>
        <img src={bending.image} alt={bending.name} className='img-fluid rounded-top' />
        <div className='card-body'>
          <p className='text-center m-0'>{bending.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CardBending;
