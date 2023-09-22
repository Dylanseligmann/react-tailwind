import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Products from './Components/Products';
import Team from './Components/Team';
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer';
import {ProductDetail} from './Components/ProductDetail';

function App() {
  return (

    <>
      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/productDetail/:productId' element={<ProductDetail />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contactUs' element={<ContactUs />} />

      </Routes>

      <Footer />


    </>
  );
}

export default App;
