import './App.css';
import Header from './components/layouts/Header/Header.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/layouts/Footer/Footer';
import WebFont from "webfontloader";
import { useEffect } from 'react';
import Home from './components/Home/Home';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
