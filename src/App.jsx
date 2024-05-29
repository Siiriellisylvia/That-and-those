import {Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import AboutPage from './pages/AboutPage';
import Playground from './components/Playground/Playground';
import CupsPage from './pages/CupsPage';

function App() {

  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/shop" element={<h1>Shop</h1>} />
        <Route path="/shop/cups" element={<CupsPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/playground" element={<Playground/>} />
      </Routes>
      <Footer/>
    </main>
  )
}

export default App
