import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Info from './components/Info';
import Footer from './components/Footer';

const App = ()=> {
  return (
    <React.Fragment>
    <Header/>
    <Main/>
    <Info/>
    <Footer/>
    </React.Fragment>
  )
}

export default App;
