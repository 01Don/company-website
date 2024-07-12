import React from 'react'
import Happy from "../images/happy.jpg"
import "./idealhome.css"
function idealhome() {
  return (
    <div>
      <div className='id-text'>
        <img src={Happy} alt='worker' className='worker-img'/>
        <div className='text-only'>
        <h1 className='uncover-text'>Uncover Our Real  Estate Journey</h1>
        <p className='p-text'>Embark on a narrative shaped by unwavering 
          commitment and innovation, where trust is the 
          cornerstone.Our legacy transcends
          transactions, weaving a tale of community 
          impact and enduring relationships. </p>
          
          </div>
      </div>
    </div>
  )
}

export default idealhome
