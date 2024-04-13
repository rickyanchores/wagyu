import React from 'react'

const About = () => {
  return (
    <div className='About text-white min-h-screen flex justify-center'>
        <div className="container grid grid-cols-1 md:grid-cols-2 justify-between items-center m-auto p-4 gap-10">
            <div className="img-box">
                <img src="https://images.unsplash.com/photo-1547637205-fde0c9011f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Nzg3MDV8MHwxfHNlYXJjaHwzfHx3YWd5dXxlbnwwfHx8fDE3MTI2Njk0Mzl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="img one" />
            </div>
            <div className="text-box text-2xl">
                <h3>WGYU</h3>
                <h1>About us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto totam suscipit cupiditate sed saepe vitae!</p>
                <button className='btn bg-red-700 text-white p-4'>Menu</button>
            </div>
        </div>      
    </div>
)}

export default About;