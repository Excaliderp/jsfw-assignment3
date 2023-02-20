import { useState } from 'react'
import './App.css'
import Time from "./Time"
import "./fonts/khula-regular-webfont.woff"
import "./fonts/khula-regular-webfont.woff2"

function App() {


  return (
    <>
      <main>
        <section className='outer box'>

          <div className='left-content'>
            <p>Logo</p>
            <div className="nav-menu">
              <p className='nav-bar'>DASHBOARD</p>
              <p className='nav-bar'>ALERTS</p>
              <p className='nav-bar'>STUDIO</p>
              <p className='nav-bar'>REPORTS</p>
              <p className='nav-bar'>SETTINGS</p>
            </div>
          </div>

          <section className='center-content'>
            <h2>Welcome, <span className='bold'>John</span></h2>
            <div className="upper box">
              <p className='bold '>Days until my birthday.</p>
              <Time />
            </div>
            <h3>Campaigns</h3>
            <div className='lower box'></div>
          </section>

          <div className='right-content'></div>


        </section>


      </main>

    </>
  )
}

export default App
