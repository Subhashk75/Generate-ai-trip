import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import styles from './CoursePage.module.css'; // Create this CSS file

const CoursePage = () => {
  return (
    <div className={styles.coursePage}>
      <div className={styles.buttonGroup}>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">UG</Button>
          <Button variant="secondary">PhD</Button>
          <Button variant="secondary">M.Tech</Button>
        </ButtonGroup>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.courseTable}>
          <thead>
            <tr>
              <th>No.</th>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Syllabus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>CS1412</td>
              <td>Operating System</td>
              <td>
                <a href="https://web.uettaxila.edu.pk/CMS/AUT2011/seAOSbs/notes/Text%20-%20Silberschatz.Galvin%20-%20Operating.System.Concepts.7th.pdf">
                  File Attach
                </a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>CS1420</td>
              <td>Database Systems</td>
              <td>
                <a href="https://example.com/database-syllabus.pdf">File Attach</a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>CS1435</td>
              <td>Data Structures</td>
              <td>
                <a href="https://example.com/data-structures-syllabus.pdf">File Attach</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoursePage;
