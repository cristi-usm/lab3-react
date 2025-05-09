import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@components/Header/Header';
import Home from '@pages/Home/Home';
import Bag from '@pages/Bag/Bag';
import Wishlist from '@pages/Wishlist/Wishlist';
import Register from '@pages/Register/Register';
import Footer from '@components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter> 
  );
}

export default App;
