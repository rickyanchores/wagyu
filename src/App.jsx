import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Gallery from './Pages/Gallery/Gallery';
import Nav from './Components/Nav/Nav';

const App = () => {
  return (
    <div className='App min-h-screen'>
      <Router>
        <Nav />
        <Routes>
          <Route Component={<Home />} />
        </Routes>
        <Home />
        <About />
        <Gallery />
      </Router>
    </div>
  );
};

export default App;
