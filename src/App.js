import React, { Fragment } from 'react'
import Pomodoro from './components/Pomodoro';
import "./App.css";
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Fragment>
      <Header />
      <div className='App'>
      <Pomodoro />
      </div>
      <Footer />
    </Fragment>
  )
}

export default App