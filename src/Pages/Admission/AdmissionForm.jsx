import React, { useState } from 'react';
import styles from './AdmissionForm.module.css';
import { FaCheckCircle } from 'react-icons/fa';
import { SiGoogleforms } from "react-icons/si";
import { AiOutlineForm } from "react-icons/ai";
import axios from "axios"


const AdmissionForm = () => {
    const [formData, setFormData] = useState({
        rollNumber:'',
        name: '',
        email: '',
        phone: '',
        course: '',
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsModalOpen(true);

        console.log('Form submitted:', formData);
        
        await axios.post("http://localhost:4001/api/addmission" ,formData)
.then((result)=>{
         console.log("succefully send email");
    }). catch((error)=>{
    console.log("erroe os courese" , error.message);
  })
   
     
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setFormData({
            rollNumber:'',
            name: '',
            email: '',
            phone: '',
            course: '',
        });
    };
   
    
    return (
        <>
           
           <div className="w-full bg-gray-800 h-40 mt-20 flex items-center justify-center">
            <div className="w-5/6 mx-auto">
                <h1 className="text-center text-white text-4xl"><SiGoogleforms className="inline mr-2" />Online Admission Inquiry</h1>
            </div>
        </div>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <img
                        src="https://cdni.iconscout.com/illustration/premium/thumb/hospital-receptionist-talking-with-patient-9200644-7501621.png?f=webp"
                        alt="Online Application"
                        className={styles.image}
                    />
                </div>
                <div className={styles.formContainer}>
                    <h2 className={styles.formHeading}><AiOutlineForm style={{marginRight:"10px", marginBottom:"5px"}}/>Fill This Form</h2>
                    <form onSubmit={handleSubmit} method='POST'>
                    <div className={styles.formGroup}>
                            <label htmlFor="message">Roll Number:</label>
                             <input type="Number" 
                               id="rollNumber"
                               name="rollNumber"
                               value={formData.rollNumber}
                               onChange={handleChange}
                             />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="phone">Phone:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="course"> Select Course:</label>
                            <select
                                id="course"
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a course</option>
                                <option value="UG">Under Gruate</option>
                                <option value="PG">post Graguate</option>
                                <option value="Professor">Professer</option>
                            </select>
                        </div>
                   
                        <button type="submit"  className={styles.submitButton}>Sign Up</button>
                    </form>
                </div>

                {isModalOpen && (
                    <div className={styles.modalOverlay} onClick={handleCloseModal}>
                        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                            <FaCheckCircle className={styles.successIcon} />
                            <h3>Congratulations!</h3>
                            <p>Your form has been submitted successfully.</p>
                            <button className={styles.okButton} onClick={handleCloseModal}>OK</button>
                        </div>
                    </div>
                )}
            </div>
         

           
        </>
    );
};

export default AdmissionForm;
