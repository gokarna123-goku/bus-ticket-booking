import React from 'react'
import ThemeSwitcher from './components/theme/ThemeSwitcher'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <div className="w-full min-h-screen dark:bg-neutral-950 dark:text-neutral-300 text-neutral-800 bg-neutral-50">
          This is the main section.
          <ThemeSwitcher />
        </div>
      </Router>
    </>
  )
}

export default App
