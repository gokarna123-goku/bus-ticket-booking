import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import HomeContainer from './pages/home_container/HomeContainer'
import Footer from './components/footer/Footer'
import Bus from './pages/bus/Bus'
import Detail from './pages/bus/Detail'

function App() {

  return (
    <>
      <Router>
        <div className="w-full min-h-screen dark:bg-neutral-950 dark:text-neutral-300 text-neutral-800 bg-neutral-50 flex flex-col overflow-hidden">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/bus" element={<Bus />} />
            <Route path="/bus/bus-details" element={<Detail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
