import React from 'react'
import Front from  "../images/preview.jpg"
import { Link } from 'react-router-dom'
import "./homecontent.css"
import "@fortawesome/react-fontawesome"

function homecontent() {
  return (
    <div className='home-content'>
      <div className='home-text'>
         <h1 className='head-text'>Unlock Your Ideal<br/> 
            Living Space</h1>
         <p className='para-text'>Browse Diverse Real Estate Options Tailored to Your <br/>
            Lifestyle.Discover a myriad of real estate <br/>
            opportunities thoughtfully curated to suit your <br/>
            unique lifestyle and preferences.</p>
            <button className='gs-btn'>Get Started</button>
            <Link className='lm'>Learn more <i class="fa-solid fa-arrow-right-long fa-beat-fade"></i></Link>
      </div>
      <div className='home-img'><img src={Front} alt='front' className='hom-img'/></div>
    </div>
  )
}

export default homecontent
