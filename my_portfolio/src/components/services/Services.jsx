import React from 'react'
import './services.css'
import { MdDesignServices, MdDeveloperMode } from 'react-icons/md'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <MdDesignServices className='service_list-icon'/>
              <p>UI/UX design is the art of creating digital experiences that are visually appealing, intuitive, and user-friendly. It involves understanding user needs, designing seamless interfaces, and optimizing interactions. By employing research, wireframing, prototyping, and testing, I strive to deliver delightful experiences that leave a lasting impression and drive user engagement.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>FullStack Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <MdDeveloperMode className='service_list-icon'/>
              <p>FullStack Web Development is the skill of crafting dynamic and robust web applications. It encompasses both frontend and backend development, involving technologies like HTML, CSS, JavaScript, and frameworks like React or Angular on the frontend, and Node.js, Express, or Django on the backend. With expertise in both areas, I create end-to-end solutions that deliver seamless user experiences and efficient functionality.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
