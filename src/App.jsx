import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Gallery from './Pages/Gallery/Gallery';
import Nav from './Components/Nav/Nav';
import Contacs from './Pages/Contacts/Contacs';

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
        <Contacs />
      </Router>
    </div>
  );
};

export default App;
