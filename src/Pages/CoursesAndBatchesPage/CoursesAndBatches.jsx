import React from 'react';

import styles from './CoursesAndBatches.module.css';
import { FaYoutube } from 'react-icons/fa';
import Slider from '../../Components/SliderSection/Slider';

const CoursesAndBatches = () => {
    const batches = [
        { courseName: 'JEE Main', batchName: 'Batch A', startDate: '1st Aug 2024' },
        { courseName: 'JEE(Main+Advance)', batchName: 'Batch B', startDate: '15th Aug 2024' },
        { courseName: 'NEET/PMT', batchName: 'Batch C', startDate: '1st Sep 2024' },
    ];

    const playlists = [
        'https://www.youtube.com/embed/videoseries?si=ACy2FMOucH0A6xwF&amp;list=PL1am-5G-TLEbk82HEXHnbCYd0CoMTIZZ7',
        "https://www.youtube.com/embed/videoseries?si=EW-Aa0MP-EfleUNq&amp;list=PL1am-5G-TLEbL1b5CoMlCLwwndRTyxWFw",
        "https://www.youtube.com/embed/videoseries?si=wlWMddM_HBCtrI7_&amp;list=PL1am-5G-TLEb_XRV9IdMaj62RnRi4MiiH" ,
    ];

    return (
        <>
          
            <Slider />
            <div className={styles.blogBanner}>
                <div className={styles.headingBanner}>
                    <h1>Courses and Batches</h1>
                </div>
            </div>
            <div className={styles.coursesContainer}>
                {batches.map((batch, index) => (
                    <div key={index} className={styles.courseBatch}>
                        <h3>{batch.courseName}</h3>
                        <p><strong>Batch:</strong> {batch.batchName}</p>
                        <p><strong>Start Date:</strong> {batch.startDate}</p>
                    </div>
                ))}
            </div>
            <header className={styles.sectionHeader}>
                <h3>Courses</h3>
                <h1>Online animation lessons at your pace</h1>
            </header>
            <div className={styles.sliderContainer}>
            
                {playlists.map((playlist, index) => (
                    <div key={index} className={styles.sliderItem}>
                        <iframe
                            className={styles.playlistVideo}
                            src={playlist}
                            title={`YouTube playlist ${index + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
                <button className={styles.moreVideosButton}>
                    <FaYoutube /> More Videos
                </button>
            </div>

            <header className={styles.sectionHeader}>
                <h3>Courses</h3>
                <h1>Online animation lessons at your pace</h1>
            </header>
            <div className={styles.sliderContainer}>
            
                {playlists.map((playlist, index) => (
                    <div key={index} className={styles.sliderItem}>
                        <iframe
                            className={styles.playlistVideo}
                            src={playlist}
                            title={`YouTube playlist ${index + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
                <button className={styles.moreVideosButton}>
                    <FaYoutube /> More Videos
                </button>
            </div>
            <header className={styles.sectionHeader}>
                <h3>Courses</h3>
                <h1>Online animation lessons at your pace</h1>
            </header>
            <div className={styles.sliderContainer}>
            
                {playlists.map((playlist, index) => (
                    <div key={index} className={styles.sliderItem}>
                        <iframe
                            className={styles.playlistVideo}
                            src={playlist}
                            title={`YouTube playlist ${index + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
                <button className={styles.moreVideosButton}>
                    <FaYoutube /> More Videos
                </button>
            </div>
            <header className={styles.sectionHeader}>
                <h3>Courses</h3>
                <h1>Online animation lessons at your pace</h1>
            </header>
            <div className={styles.sliderContainer} style={{marginBottom:"50px"}}>
            
                {playlists.map((playlist, index) => (
                    <div key={index} className={styles.sliderItem}>
                        <iframe
                            className={styles.playlistVideo}
                            src={playlist}
                            title={`YouTube playlist ${index + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
                <button className={styles.moreVideosButton}>
                    <FaYoutube /> More Videos
                </button>
            </div>
       
        </>
    );
};

export default CoursesAndBatches;
