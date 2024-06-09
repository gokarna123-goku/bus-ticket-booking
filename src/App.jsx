import React from 'react'
import ThemeSwitcher from './components/theme/ThemeSwitcher'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import HomeContainer from './pages/home_container/HomeContainer'

function App() {

  return (
    <>
      <Router>
        <div className="w-full min-h-screen dark:bg-neutral-950 dark:text-neutral-300 text-neutral-800 bg-neutral-50 flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeContainer />} />
          </Routes>
          {/* <div className="mt-[8ch]">
            <ThemeSwitcher />
          </div> */}
        </div>
      </Router>
    </>
  )
}

export default App
