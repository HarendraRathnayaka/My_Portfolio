import React from 'react'
import Harendra_CV from '../../assets/Harendra_CV.pdf'

function CTA() {
  return (
    <div className="cta">
      <a href={Harendra_CV} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA;
