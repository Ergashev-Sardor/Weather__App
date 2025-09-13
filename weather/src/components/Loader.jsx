import React from 'react'
import { images } from '../assets/image'

const Loader = () => {
  return (
    <div className='loader'>
        <img src={images.loading} alt="" />
    </div>
  )
}

export default Loader