import React from 'react'
import Card from '../../Components/Card/Card'

const Gallery = () => {
  return (
    <div className='Gallery bg-red-700 text-white min-h-screen flex justify-center items-center'>
        <div className="container">
            <h1>Gallery</h1>
            <div className="gallery-box grid grid-cols-1 md:grid-cols-3 p-4">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </div>
  )
}

export default Gallery;