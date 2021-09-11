import React , { Component } from 'react';
import Home from './../Home';
import Work from './../Work';
import Portfolio from './../Portfolio';
import Profile from './../Profile';
import About from './../About';
import SoicalMedia from './../Soical Media';
import Footer from '../Footer';
class Index extends Component {
  render() { 
  return (
    <div className="Index">
      <Home />
      <Work />
      <Portfolio />
      <Profile />
      <About />
      <SoicalMedia />
      <Footer />
    </div>
  );
}
}

export default Index;
