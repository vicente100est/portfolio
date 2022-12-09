import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/TECSA.png'
import AVTR5 from '../../assets/avatar5.png'

// import Swiper core and required modules
import { Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//Array testimonials
const data = [
  {
    avatar: AVTR1,
    name: 'Intelexion',
    review: 'Monterrey Nuevo León, Mx.'
  },
  {
    avatar: AVTR2,
    name: 'Organic Nails',
    review: 'Queretaro, Mx. | Zapopan Jalisco, Mx.'
  },
  {
    avatar: AVTR3,
    name: 'Map Lander',
    review: 'Ciudad de México, Mx.'
  },
  {
    avatar: AVTR4,
    name: 'Tecnica en Colectores',
    review: 'Estado de México, Mx.'
  },
  {
    avatar: AVTR5,
    name: 'Tecnología en Colectores',
    review: 'Estado de México, Mx.'
  }
]
//Fin del Array

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Companies with which I have collaborated</h5>
      <h2>I have collaborated</h2>
      
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review},index) =>{
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Foto del testimonio uno" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials