import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ResultMainPage.module.css';
import UpperNav from '../../Components/NavbarSection/UpperNav';
import NavBar from '../../Components/NavbarSection/NavBar';
import FooterSection from '../../Components/Footer/FooterSection';
import Slider from '../../Components/SliderSection/Slider';

const ResultMainPage = () => {
    const { year } = useParams();
    const [gridSize, setGridSize] = useState('3x4');

    const handleGridSizeChange = (event) => {
        setGridSize(event.target.value);
    };

    // Sample data, replace with actual data as needed
    const studentData = [
        {
            name: "Ravi Kumawat S/O Kabool Chand Kumawat",
            address: "Jaipur",
            college: "IIT Gandhinagar",
            img: "https://ravi22110219.github.io/BidsukTechnoCreation/Ravi%20Kumawat.jpg"
        },
        {
          name: "Ravi Kumawat S/O Kabool Chand Kumawat",
          address: "Jaipur",
          college: "IIT Gandhinagar",
          img: "https://ravi22110219.github.io/BidsukTechnoCreation/Ravi%20Kumawat.jpg"
      },
      {
        name: "Ravi Kumawat S/O Kabool Chand Kumawat",
        address: "Jaipur",
        college: "IIT Gandhinagar",
        img: "https://ravi22110219.github.io/BidsukTechnoCreation/Ravi%20Kumawat.jpg"
    },
    {
      name: "Ravi Kumawat S/O Kabool Chand Kumawat",
      address: "Jaipur",
      college: "IIT Gandhinagar",
      img: "https://ravi22110219.github.io/BidsukTechnoCreation/Ravi%20Kumawat.jpg"
  },
  {
    name: "Ravi Kumawat S/O Kabool Chand Kumawat",
    address: "Jaipur",
    college: "IIT Gandhinagar",
    img: "https://ravi22110219.github.io/BidsukTechnoCreation/Ravi%20Kumawat.jpg"
},
{
  name: "Ravi Kumawat S/O Kabool Chand Kumawat",
  address: "Jaipur",
  college: "IIT Gandhinagar",
  img: "https://ravi22110219.github.io/BidsukTechnoCreation/Ravi%20Kumawat.jpg"
},
        // Add more student data here
    ];

    const getGridTemplate = () => {
        switch (gridSize) {
            case '3x4':
                return 'repeat(3, 1fr) / repeat(4, 1fr)';
            case '5x7':
                return 'repeat(5, 1fr) / repeat(7, 1fr)';
            case '2x3':
                return 'repeat(2, 1fr) / repeat(3, 1fr)';
            default:
                return 'repeat(3, 1fr) / repeat(4, 1fr)';
        }
    };

    return (
        <>
            <UpperNav />
            <NavBar />
            <Slider />
            <div className={styles.studentDetailPage}>
                <h1>Students of {year}</h1>
                <div className={styles.gridOptions}>
                    <label htmlFor="gridSize">Grid Size:</label>
                    <select id="gridSize" name="gridSize" value={gridSize} onChange={handleGridSizeChange}>
                        <option value="3x4">3 x 4</option>
                        <option value="5x7">5 x 7</option>
                        <option value="2x3">2 x 3</option>
                    </select>
                </div>
                <div className={styles.studentGrid} style={{ gridTemplate: getGridTemplate() }}>
                    {studentData.map((student, index) => (
                        <div key={index} className={styles.studentCard}>
                            <img src={student.img} alt={student.name} />
                            <div className={styles.studentInfo}>
                                <p><strong>{student.name}</strong></p>
                                <p>{student.address}</p>
                                <p>{student.college}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <FooterSection />
        </>
    );
};

export default ResultMainPage;
