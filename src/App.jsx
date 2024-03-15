import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Components/Card/Card'


const App = () => {
  return (
    <div className='App min-h-screen flex justify-center items-center'>
      <Card title={"Wagyu"}/>
    </div>
  )
}

export default App;
