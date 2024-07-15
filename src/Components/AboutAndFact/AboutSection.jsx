import React from 'react';
import styles from './AboutSection.module.css'; 

const AboutSection = () => {
  return (
    <section className={styles.about} id="about">
      {/* === Left Side Starts === */}
      <div className={styles.aboutImg}>
        <iframe className={styles.youtubeShort} src="https://www.youtube-nocookie.com/embed/l9sMIx9mYvc?si=pvSoy3CzaBg4Oc5t&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      {/* === Left Side Ends === */}
      {/* === Right Side Starts === */}
      <div className={styles.aboutText}>
        {/* === Section Header Starts === */}
        <header className={styles.sectionHeader}>
          <h3>About Us</h3>
          <h1>The best course in animation</h1>
        </header>
        {/* === Section Header Ends === */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <ul className={styles.aboutList}>
          <li check="&#10004;">Lorem ipsum dolor sit amet</li>
          <li check="&#10004;">consectetur adipisicing elit</li>
          <li check="&#10004;">sed do eiusmod tempor incididunt</li>
          <li check="&#10004;">ut labore et dolore magna aliqua</li>
        </ul>
        <button className={`${styles.btn} ${styles.aboutBtn}`}>Read More</button>
      </div>
      {/* === Right Side Ends === */}
    </section>
  );
};

export default AboutSection;
