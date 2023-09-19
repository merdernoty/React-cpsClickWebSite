import React from 'react'
import './Theme.scss'
import sunImage from '../../assets/img/png-clipart-emojis-yellow-sun-with-face-thumbnail-transformed 1.png'
function Theme() {
  return (
    <div className='theme-main'>
        <div className='theme-box'>
            <img src={sunImage}></img>
            
        </div>
    </div>
  )
}
export default Theme