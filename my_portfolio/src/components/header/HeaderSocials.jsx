import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="http://www.linkedin.com/in/harendra-rathnayaka-868564218/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/HarendraRathnayaka" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials
