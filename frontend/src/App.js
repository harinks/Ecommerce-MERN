import './App.css';
import Header from './components/layouts/Header/Header.js';
import { BrowserRouter as Router } from "react-router-dom";
import Footer from './components/layouts/Footer/Footer';
import WebFont from "webfontloader";
import { useEffect } from 'react';

function App() {
  
  useEffect(()=>{
    WebFont.load({
      google:{
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })
  },[]);

  return (
      <Router>
        <Header />
        <Footer />
      </Router>
  );
}

export default App;
