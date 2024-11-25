import React from 'react';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section className={styles.about} id="about">
      {/* === Left Side Starts === */}
      <div className={styles.aboutTextOnly}>
        <header className={styles.sectionHeader}>
          <h3>About Us</h3>
          <h1>Welcome to the CSE Office</h1>
        </header>
        <div style={{width:"90vw", objectFit:"cover" }}>
        <p>
          The CSE Office is the administrative backbone of the Computer Science and Engineering Department. Our mission is to provide seamless operational support to faculty, staff, and students, enabling them to focus on achieving academic excellence and research innovation.
        </p>
        <p>
          Our office is dedicated to streamlining department operations, managing resources effectively, and ensuring a conducive environment for academic and professional growth. With a commitment to transparency and efficiency, we strive to uphold the highest standards in department management.
        </p>
        <ul className={styles.aboutList}>
          <li check="&#10004;">Efficient management of academic records</li>
          <li check="&#10004;">Support for faculty and staff development</li>
          <li check="&#10004;">Coordination of research and development projects</li>
          <li check="&#10004;">Organization of department events and outreach programs</li>
        </ul>
        </div>
      
        <button className={`${styles.btn} ${styles.aboutBtn}`}>Learn More</button>
      </div>
      {/* === Left Side Ends === */}
    </section>
  );
};

export default AboutSection;
