import React from 'react'

const Card = ({image,title}) => {
  return (
    <div className='Card text-white p-4 m-2 rounded-lg items-center'>
        <img className='image' src={image} alt="cardImage" />
        <div className="text">
            <h1 className="title text-4xl font-extrabold">{title}</h1>
            <button className='btn mt-2 bg-black text-white p-4'>Read More</button>
        </div>
    </div>
  )
}

export default Card;