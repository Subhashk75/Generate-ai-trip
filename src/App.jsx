import React from 'react';
import UpperNav from './Components/NavbarSection/UpperNav';
import NavBar from './Components/NavbarSection/NavBar';
import './App.css'; // Global styles
import Slider from './Components/SliderSection/Slider';
// import CourseAndFees from './Components/CourseCards/CourseAndFees';
import NewsAndNotification from './Components/NewsAndNotificationSection/NewsAndNotification';
import AboutSection from './Components/AboutAndFact/AboutSection';

import FooterSection from './Components/Footer/FooterSection';

function App() {
    return (
        <div className="App">
         
            <UpperNav />
            <NavBar /> 
            <Slider/>
            {/* <CourseAndFees/> */}
            <NewsAndNotification/>
            <AboutSection />
            <FooterSection />
        </div>
    );
}

export default App;