import React from 'react'
import Happy from "../images/happy.jpg"
import "./idealhome.css"
function idealhome() {
  return (
    <div>
      <div className='id-text'>
        <div><img src={Happy} alt='worker' className='worker-img'/></div>
        <div className='all-text'>
        <h1 className='uncover-text'>Uncover Our Real <br/> Estate Journey</h1>
        <p className='p-text'>Embark on a narrative shaped by unwavering <br/>
          commitment and innovation, where trust is the<br/>
          cornerstone. Our legacy transcends<br/>
          transactions, weaving a tale of community <br/>
          impact and enduring relationships. </p>
        </div>
        
      </div>
    </div>
  )
}

export default idealhome
