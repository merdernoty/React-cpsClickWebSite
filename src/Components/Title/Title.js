import './Title.scss';
import React from 'react';


function Title({id}) {
  return (
    <div className='title-main' id={id}>
      <div className='title-box'>
        <div className='title'>Jitter Click Test</div>
      </div>
    </div>
  );
}

export default Title;