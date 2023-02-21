import { useState } from 'react'
import './App.css'
import Time from "./Time"
import Homebutton from "./images/Homebutton.png"
import Settingsbutton from "./images/settingsbutton.png"
import jag from "./images/jag.jpg"
import "./fonts/khula-regular-webfont.woff"
import "./fonts/khula-regular-webfont.woff2"

function App() {


  return (
    <>
      <main>
        <section className='outer-box'>

          <div className='left-content'>
            <p>Logo</p>
            <div className="nav-menu">
              <div className='nav-bar'><img src={Homebutton} alt="homebutton" /><p>DASHBOARD</p></div>
              <div className='nav-bar'><img src={Settingsbutton} alt="homebutton" /><p>SETTINGS</p></div>
            </div>
          </div>

          <section className='center-content'>
            <h2>Welcome, <span>Stranger</span></h2>
            <div className="upper box">
              <p className='bold'>Days until my birthday.</p>
              <p className="numbers"><Time /></p>
              <p className='watch-button'>WATCH NOW</p>
            </div>
            <h3>Room for more dates</h3>
            <div className='lower box'></div>
          </section>

          <div className='right-content'>
            <section className='activity'>
              <p className='activity-heading'>Activity</p>
              <div className='activity-content box'>
                <img src={jag} />
                <p>Timothy Karlsson<span> - 34m ago</span></p>
                <div className='chat-bubble'>
                  <p>Hey, how's it going?</p>
                </div>
              </div>

            </section>
          </div>
        </section>


      </main>

    </>
  )
}

export default App
