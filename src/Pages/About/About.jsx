import React from 'react'

const About = () => {
  return (
    <div className='About text-white min-h-screen flex justify-center'>
        <div className="container grid grid-cols-1 md:grid-cols-2 justify-between items-center m-auto p-4 gap-10">
            <div className="img-box">
                <img src="https://images.unsplash.com/photo-1547637205-fde0c9011f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Nzg3MDV8MHwxfHNlYXJjaHwzfHx3YWd5dXxlbnwwfHx8fDE3MTI2Njk0Mzl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="img one" />
            </div>
            <div className="text-box text-2xl">
                <div className="title">
                    <h1 className="text-5xl font-bold pb-4">WGYU</h1>
                </div>
                <div className="text pb-4">
                    <p>At WGYU, we are dedicated to bringing you the freshest ingredients and the finest flavors, meticulously prepared to deliver an unforgettable dining experience. 
                        Whether you're here for our signature Wagyu beef dishes, sushi, or any of our other delectable offerings, we strive to ensure every meal is a culinary masterpiece.</p>
                </div>
                <button className='btn bg-red-700 text-white p-4'>Menu</button>
            </div>
        </div>      
    </div>
)}

export default About;