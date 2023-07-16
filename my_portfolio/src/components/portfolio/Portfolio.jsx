import React from 'react'
import './portfolio.css'
import timberCompany from '../../assets/timberCompany.jpg'
import helpDesk from '../../assets/helpDesk.jpg'
import airLine from '../../assets/airLine.jpeg'
import jobSearch from '../../assets/jobSearch.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={timberCompany} alt="timberCompanyProject" />
          </div>
            <h3>Timber Company Management System</h3>
            <small>React Js, Node Js, Express Js, Mongo DB, Git, Figma, Bootstrap</small><br/><br/>
            <div className="portfolio_item-cta">
            <a href="https://github.com/HarendraRathnayaka/ITP-Project-MERN" className='btn'>Github</a>
            {/*<a href=" " className='btn btn-primary' target='_blank'>Live Demo</a>*/}
            </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={jobSearch} alt="timberCompanyProject" />
          </div>
            <h3>Job Searching mobile app</h3>
            <small>Kotlin, Firebase, Android Studio, Figma, Git, XML</small><br/><br/>
            <div className="portfolio_item-cta">
            <a href="https://github.com/HarendraRathnayaka/MadProject" className='btn'>Github</a>
            {/*<a href=" " className='btn btn-primary' target='_blank'>Live Demo</a>*/}
            </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={helpDesk} alt="timberCompanyProject" />
          </div>
            <h3>Academic Help Desk</h3>
            <small>Java, JSP, JavaScript</small><br/><br/>
            <div className="portfolio_item-cta">
            <a href="https://github.com/HarendraRathnayaka/Academic-helpdesk" className='btn'>Github</a>
            {/*<a href=" " className='btn btn-primary' target='_blank'>Live Demo</a>*/}
            </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={airLine} alt="timberCompanyProject" />
          </div>
            <h3>AirLine Ticket reservation System</h3>
            <small>HTML, CSS, JavaScript, PHP, MySQL</small><br/><br/>
            <div className="portfolio_item-cta">
            <a href="https://github.com/HarendraRathnayaka/Airline-Ticket-reservation-system" className='btn'>Github</a>
            {/*<a href=" " className='btn btn-primary' target='_blank'>Live Demo</a>*/}
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
