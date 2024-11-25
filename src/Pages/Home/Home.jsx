import React from 'react'
import Slider from '../../Components/SliderSection/Slider'
// import CourseAndFees from '../../Components/CourseCards/CourseAndFees'
import NewsAndNotification from '../../Components/NewsAndNotificationSection/NewsAndNotification'
import AboutSection from '../../Components/AboutAndFact/AboutSection'


function Home() {
  return (
    <>
    <Slider />
    <AboutSection />
    <NewsAndNotification />
    </>
  )
}

export default Home;