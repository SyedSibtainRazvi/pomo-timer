import React, { Fragment } from 'react'
import Pomodoro from './components/Pomodoro';
import "./App.css";
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <div className='timer'>
        <Pomodoro />
      </div>
      <Footer />
    </div>
  )
}

export default App