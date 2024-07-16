import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import styles from './ResultsHomePage.module.css';
import Slider from '../../Components/SliderSection/Slider';


const ResultsHomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState('JEE (Advanced)');
    // const navigate = useNavigate();

    const resultsData = {
        'JEE (Advanced)': [
            {
                year: 2024,
                qualified: "9045 (From CCP: 6723, DLP: 2322)",
                topRanks: "45 in Top 100 | 80 in Top 200 | 195 in Top 500"
            },
            {
                year: 2023,
                qualified: "6647 (From CCP: 4637, DLP: 2010)",
                topRanks: "37 in Top 100 | 64 in Top 200 | 158 in Top 500"
            },
            // Add more data as needed
        ],
        'JEE (Main)': [
            {
                year: 2022,
                qualified: "5571 (From CCP: 3910, DLP: 1661)",
                topRanks: "34 in Top 100 | 66 in Top 200 | 160 in Top 500"
            },
            {
                year: 2021,
                qualified: "AIR 1 | 27 in Top 50 | 49 in Top 100",
                topRanks: ""
            },
            // Add more data as needed
        ],
        'NEET (UG) / PMT': [
            {
                year: 2020,
                qualified: "15 in Top 50 | 35 in Top 100 | 66 in Top 200",
                topRanks: ""
            },
            {
                year: 2019,
                qualified: "AIR 1 | 8 in Top 20 | 20 in Top 50 | 38 in Top 100",
                topRanks: ""
            },
            // Add more data as needed
        ]
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleViewMore = (year) => {
        navigate(`/student-detail/${year}`);
    };

    return (
        <>
          
           <Slider />
            <div className={styles.resultsPage}>
                <div className={styles.section}>
                    <h2>Competitive Exams Results</h2>
                    <div className={styles.buttonsContainer}>
                        {Object.keys(resultsData).map((category, index) => (
                            <button
                                key={index}
                                className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
                                onClick={() => handleCategoryChange(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
                <div className={styles.timeline}>
                    {resultsData[selectedCategory].map((result, index) => (
                        <div key={index} className={styles.resultSection}>
                            <h3>Year {result.year}</h3>
                            <p>Qualified: {result.qualified}</p>
                            <p>{result.topRanks}</p>
                            <button 
                                className={styles.viewMoreButton} 
                                onClick={() => handleViewMore(result.year)}
                            >
                                View More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
           
        </>
    );
};

export default ResultsHomePage;
