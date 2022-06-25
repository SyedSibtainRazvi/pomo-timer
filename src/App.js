import React, { Fragment } from 'react'
import Pomodoro from './components/Pomodoro';
import "./App.css";
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <div className='timer'>
        <Pomodoro />
      </div>
      <Footer />
    </>
  )
}

export default App;