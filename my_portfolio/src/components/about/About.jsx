import React from 'react'
import './about.css'
import me2 from '../../assets/me2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        
        <div className="about_me">
          <div className="about_me_image">
            <img src={me2} alt="About_me_Image" />
          </div>
        </div>
        
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>2 years Working</small>
            </article>
            <article className="about_card">
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>None</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>4 Completed</small>
            </article>            
          </div>
          <p>
          I am an ambitious and dedicated person who pursuing a BSc(Hons) in Information Technology specializing in Information Technology degree from <a href='https://www.sliit.lk/'><b>SLIIT</b></a> Faculty of Computing. With a passion for technology and a curiosity for innovation, I strive to 
          excel in this ever-evolving field. With a strong commitment to continuous learning, I am eager to contribute to the IT industry's advancements and make a positive impact 
          through creative problem-solving and cutting-edge solutions.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>          
        </div>
        
      </div>
    </section>
  )
}

export default About
