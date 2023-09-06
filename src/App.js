import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Team from './Components/Team';
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer';

function App() {
  return (

    <>
      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contactUs' element={<ContactUs />} />

      </Routes>

      <Footer />


    </>
  );
}

export default App;
