import React from 'react';
import StaffANDFacalityCard from '../../Pages/Cards/StaffANDFacalityCard';

const StaffANDFaclity = () => {
  return (
    <div style={{display:"flex" ,flexDirection:"row" ,marginTop:"100px" ,flexWrap:"wrap", justifyContent:"space-between"}}>
      {/* Head of Department */}
      <StaffANDFacalityCard 
        title={'Head of Department (HOD)'} 
        Desc={"Dr. John Doe, Ph.D. in Computer Science, leads the department with extensive experience in Artificial Intelligence and Machine Learning. With a vision to innovate, he drives academic excellence and research innovation in the CSE department."} 
      />

      {/* Associate Professor */}
      <StaffANDFacalityCard 
        title={'Associate Professor'} 
        Desc={"Dr. Jane Smith specializes in Database Systems and Software Engineering. With over 10 years of teaching and research experience, she actively contributes to curriculum development and student mentorship."} 
      />

      {/* Assistant Professor */}
      <StaffANDFacalityCard 
        title={'Assistant Professor'} 
        Desc={"Mr. Alan Brown, an expert in Data Structures and Algorithms, has a passion for teaching and guiding students in competitive programming and technical projects."} 
      />

      {/* Lab Assistant */}
      <StaffANDFacalityCard 
        title={'Lab Assistant'} 
        Desc={"Ms. Emma White ensures the smooth functioning of the department's computer labs. She manages lab resources and assists students with technical issues during lab sessions."} 
      />

      {/* Administrative Staff */}
      <StaffANDFacalityCard 
        title={'Administrative Staff'} 
        Desc={"Mr. Robert Green handles the administrative tasks of the department, including student records, faculty coordination, and scheduling meetings and events."} 
      />
    </div>
  );
};

export default StaffANDFaclity;
