import React from 'react'
import './testimonials.css'
import leader from '../../assets/leader.jpg'

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients or ProjectMates</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      //install Swipper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true}}>
        <SwiperSlide className='testimonial'>
          <div className="client_avatar">
            <img src={leader} alt="timberCompanyProject group leader"></img></div>
            <h5 className='client_name'>Binod Gayasri</h5>
            <small className='client_review'>
              I'm the group leader of the timber company management system project (MERN technology). I warmly like to say that Harendra help me with
              his best effort to build this successful group project. I recommend him for this type of fullstack web development projects.
            </small>
          
        </SwiperSlide>
        
        {/*<SwiperSlide className='testimonial'>
          <div className="client_avatar">
            <img src={leader} alt="timberCompanyProject group leader"></img></div>
            <h5 className='client_name'>Binod Gayasri</h5>
            <small className='client_review'>
              I'm the group leader of the timber company management system project (MERN technology). I warmly like to say that Harendra help me with
              his best effort to build this successful group project. I recommend him for this type of fullstack web development projects.
            </small>         
        </SwiperSlide>*/}
      </Swiper>
    </section>
  )
}

export default Testimonials
