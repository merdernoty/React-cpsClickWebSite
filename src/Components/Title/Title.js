import './Title.scss';
import React from 'react';


function Title({id}) {
  return (
    <div className='title-main' id={id}>
      <div className='title-box'>
        <div className='title'>test your arm</div>
      </div>
    </div>
  );
}

export default Title;