import React from 'react'
import heroImg from '../../../public/images/hotel-reservation.jpg'
import Hero from '../../Components/Hero/Hero'
import FormService from '../../Components/FormService/FormService'

function ServicePage() {
  return (
    <div>
              <Hero background={heroImg} title="Reservation" classTitle="title-white"></Hero>
              <FormService/>
 
    </div>
  )
}

export default ServicePage