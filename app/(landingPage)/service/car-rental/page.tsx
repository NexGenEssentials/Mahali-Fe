import React from 'react'
import LandingPage from '../../landingPageTamplates'
import ServicePageHero from '../../components/service/serviceHeroSection'
import car from '@/public/images/car2.jpg'

const CarRental = () => {
  return (
    <LandingPage>
    <div className=''>
    <ServicePageHero image={car} service='car-rental' title='Fast & Easy Way To Rent A Car' desc='Experience the fastest and easiest way to rent a car. Reliable, affordable, and tailored to your journey—book your ride in just a few clicks!'/>
    <div className='h-screen'></div>
    </div>
    </LandingPage>
  )
}

export default CarRental