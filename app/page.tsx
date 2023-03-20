import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import About from '../components/About'
import Services from '../components/Services'
import Cases from '../components/Cases'
import Slider from '../components/Slider'
import WorkFlow from '../components/WorkFlow'
import Testimonials from '../components/Testimonials'
import ClientNote from '../components/ClientNote'
import Clients from '../components/Clients'
import Intelpik from '../components/Intelpik'
import Values from '../components/Values'
import FAQs from '../components/FAQs'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <About/>
      <Services/>
      <Cases/>
      <Slider/>
      <WorkFlow/>
      <Testimonials/>
      <ClientNote/>
      <Clients/>
      <Intelpik/>
      <Values/>
      <FAQs/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default Home