import React, { useEffect, useRef } from 'react';
import styles from './TestimonialsSection.module.css';
import { FaStar } from "react-icons/fa";


const testimonialsData = [
  {
    image: 'https://ravi22110219.github.io/BidsukTechnoCreation/Ravi%20Kumawat.jpg',
    name: 'Ravi Kumawat',
    description: 'IIT Gandhinagar (AIR-1400)',
    text: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."',
    rating: 5,
  },
  {
    image: 'https://ravi22110219.github.io/BidsukTechnoCreation/sanjeev.jpg',
    name: 'Sanjeev Kumawat',
    description: 'IIT Madras (AIR-1st)',
    text: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."',
    rating: 5,
  },
  {
    image: 'https://ravi22110219.github.io/BidsukTechnoCreation/subhash.jpg',
    name: 'Subhash Kumawat',
    description: 'NIT Patna  (AIR-5000)',
    text: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."',
    rating: 5,
  },
  {
    image: 'https://ravi22110219.github.io/BidsukTechnoCreation/honey.jpg',
    name: 'Hansraj Swami',
    description: 'IIT Mandi (AIR-900)',
    text: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const carouselRef = useRef(null);
  let autoPlayTimeout = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const handleNext = () => {
      if (carousel) {
        carousel.scrollLeft += carousel.offsetWidth;
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
          carousel.scrollLeft = 0;
        }
      }
    };

    autoPlayTimeout.current = setInterval(handleNext, 6000);
    return () => clearInterval(autoPlayTimeout.current);
  }, []);

  return (
    <section className={styles.testimonials} id="testimonials">
      {/* === Testimonials Section Header Starts === */}
      <header className={styles.sectionHeader}>
        <h3>Testimonials</h3>
        <h1>What Our Clients Say About Us</h1>
      </header>
      {/* === Testimonials Contents Starts === */}
      <div className={styles.carouselWrapper}>
        <button className={styles.navButton} onClick={() => (carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth)}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <div className={styles.carousel} ref={carouselRef}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className={styles.testimonialsItem}>
              <div className={styles.profile}>
                <div className={styles.profileImage}>
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className={styles.profileDesc}>
                  <span>{testimonial.name}</span>
                  <span>{testimonial.description}</span>
                </div>
              </div>
              <p>{testimonial.text}</p>
              <div className={styles.quote}>
                <i className="fa fa-quote-left"></i>
              </div>
              <div className={styles.ratings}>
                {[...Array(testimonial.rating)].map((star, i) => (
                  <i key={i} className="fa-solid fa-star"><FaStar /></i>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className={styles.navButton} onClick={() => (carouselRef.current.scrollLeft += carouselRef.current.offsetWidth)}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      {/* === Testimonials Contents Ends === */}
    </section>
  );
};

export default TestimonialsSection;
