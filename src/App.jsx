import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Components/Card/Card'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Gallery from './Pages/Gallery/Gallery'


const App = () => {
  return (
    <div className='App min-h-screen'>
      <Home />
      <About />
      <Gallery />
    </div>
  )
}

export default App;
