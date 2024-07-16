import React from 'react'
import Slider from '../../Components/SliderSection/Slider'
import CourseAndFees from '../../Components/CourseCards/CourseAndFees'
import NewsAndNotification from '../../Components/NewsAndNotificationSection/NewsAndNotification'
import AboutSection from '../../Components/AboutAndFact/AboutSection'
import FactsAndEnrollSections from '../../Components/AboutAndFact/FactsAndEnroll'
import BlogSection from '../../Components/BlogSection/BlogSection'
import TestimonialsSection from '../../Components/TestimonialsSection/TestimonialsSection'
import LocationSection from '../../Components/LocationSection/LocationSection'
import AppSection from '../../Components/AppSection/AppSection'

function Home() {
  return (
    <>
    <Slider />
    <CourseAndFees />
    <NewsAndNotification />
    <AboutSection />
    <FactsAndEnrollSections />
    <BlogSection />
    <TestimonialsSection />
    <LocationSection />
    <AppSection />


    </>
  )
}

export default Home;