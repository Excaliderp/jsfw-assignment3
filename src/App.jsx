import { useState } from 'react'
import './App.css'
import Time from "./Time"

function App() {


  return (
    <>
      <main>
        <section className='outer box'>

          <div className='left-content'>
            <h2>Logo</h2>
            <div className="nav-menu">
              <p className='nav-bar'>Dashboard</p>
              <p className='nav-bar'>Alerts</p>
              <p className='nav-bar'>Studio</p>
              <p className='nav-bar'>Reports</p>
              <p className='nav-bar'>Settings</p>
            </div>
          </div>

          <section className='center-content'>
            <h1>Welcome John</h1>
            <div className="upper box">
              <p>Days until my birthday.</p>
              <Time />
            </div>
            <h2>Campaigns</h2>
            <div className='lower box'></div>
          </section>

          <div className='right-content'></div>


        </section>


      </main>

    </>
  )
}

export default App
