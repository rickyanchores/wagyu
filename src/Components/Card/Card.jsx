import React from 'react'

const Card = ({title}) => {
  return (
    <div className='Card bg-slate-200 p-4 m-2 rounded-lg grid grid-cols-2 items-center'>
        <div className="text">
            <h1 className="title text-4xl font-extrabold">{title}</h1>
            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime nostrum assumenda porro nesciunt at?</p>
            <button className='btn bg-green-600 text-white p-4 rounded-lg'>Read More</button>
        </div>
        <img className=' rounded-lg' src="https://images.unsplash.com/photo-1588168333986-5078d3ae3976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Nzg3MDV8MHwxfHNlYXJjaHwxfHx3YWd5dXxlbnwwfHx8fDE3MTA1MzAyNzd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="cardImage" />
    </div>
  )
}

export default Card;