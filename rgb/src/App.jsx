import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Workout from './components/workout/Workout'
import LiveVid from './components/livevid/LiveVid'
import Footer from './components/footer/Footer'

const App = () => {
  return (
  <>
  {/* <React /> */}
  <Header /> 
  <Nav />
  <Workout />
  <LiveVid />
  <Footer />
  </>
    
  )
}

export default App