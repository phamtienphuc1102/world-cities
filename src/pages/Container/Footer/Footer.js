import React, { useState } from 'react'
import './Footer.css'

const Footer = (props) => {


  const onClickMapGuide = () => {
    props.setIsHidden(true);
    props.setTabActive(0)
  }
  const onClickAnalysis = () => {
    props.setIsHidden(true);
    props.setTabActive(1)
  }


  return (

    <div className='footer'>
      <div className='mapGuide'>
        <button type='button' onClick={onClickMapGuide} className='btn btn-primary button-btn '>
          Map Guide
        </button>
      </div>
      <div className='analysis'>
        <button type='button' onClick={onClickAnalysis} className='btn btn-primary button-btn'>
          Analysis
        </button>
      </div>
    </div>

  )
}

export default Footer
