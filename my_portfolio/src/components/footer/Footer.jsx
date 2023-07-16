import React from 'react'
import './footer.css'
import { FaInstagram, FaFacebookF, FaGithub } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Harendra</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://web.facebook.com/harendranayanamudu.rathnayaka/'><FaFacebookF/></a>
        <a href='https://www.instagram.com/harendra_ra_/'><FaInstagram/></a>
        <a href='http://www.linkedin.com/in/harendra-rathnayaka-868564218/'><BsLinkedin/></a>
        <a href='https://github.com/HarendraRathnayaka'><FaGithub/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Harendra Rathnayaka. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
