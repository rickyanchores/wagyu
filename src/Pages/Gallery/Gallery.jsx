import React from 'react';
import Card from '../../Components/Card/Card';

const Gallery = () => {
  const cards = [
    {
      title: "Title 1",
      image: "https://images.unsplash.com/photo-1613454320437-0c228c8b1723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Nzg3MDV8MHwxfHNlYXJjaHw1fHx3YWd5dXxlbnwwfHx8fDE3MTY5Nzc3NjB8MA&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      title: "Title 2",
      image: "https://images.unsplash.com/photo-1625300105749-77d295c0f278?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Nzg3MDV8MHwxfHNlYXJjaHw0fHx3YWd5dXxlbnwwfHx8fDE3MTY5Nzc3NjB8MA&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      title: "Title 3",
      image: "https://images.unsplash.com/photo-1606677661991-446cea8ee182?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Nzg3MDV8MHwxfHNlYXJjaHw3fHx3YWd5dSUyMGJlZWZ8ZW58MHx8fHwxNzE2OTc3ODY0fDA&ixlib=rb-4.0.3&q=80&w=1080"
    }
  ];

  return (
    <div className='Gallery bg-red-800 text-white flex justify-center items-center min-h-screen'>
      <div className="container w-3/4 m-auto">
        <h1 className='text-2xl font-bold hover:underline'>Gallery</h1>
        <div className="gallery-box grid grid-cols-1 md:grid-cols-3 p-4 gap-4">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} image={card.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
