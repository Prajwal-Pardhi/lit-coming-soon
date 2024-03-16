import { useState } from 'react'
import './App.css'
import videoBg from './assets/coming_soon_compressed.mp4'

function App() {

  return (
    <>
      <div className="main-container">
        <video className='bg-video' src={videoBg} autoPlay loop muted />
        <div className="logo-img">
            <img src="logo_lit.png" alt="alt" />
          </div>
        <div className="content">
          <div className="coming-soon-img-title">
            <div className="company-title">LUXURY IN TASTE</div>
            <div className="coming-soon-img"><img src="coming_soon_img.png" alt="coming soon" /></div>
          </div>
          <div>
          <div className="subscribe-content">
            <div className="subscribe-title">
              <p>SUBSCRIBE TO OUR </p>
              <p>NEWSLETTER</p>
              
            </div>
            <div className="subscribe-now-txt">SUBSCRIBE NOW</div>
            <div className="subscribe-btn-container">
              <button>SUBSCRIBE</button>
            </div>
          </div>
          </div>
        </div>
       
      </div>
    </>
  )
}

export default App
