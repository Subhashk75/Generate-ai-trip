import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/photoes/logo.png";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

const NavBar = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [homeActive, setHomeActive] = useState(false);
    const [showFeeDropdown, setShowFeeDropdown] = useState(false);
    const [showResultsDropdown, setShowResultsDropdown] = useState(false);

    const handleMenuToggle = () => {
        setMenuActive(!menuActive);
    };

    const handleMenuItemClick = () => {
        setMenuActive(false);
    };

    const handleScroll = () => {
        if (window.scrollY > 120) {
            setHomeActive(true);
        } else {
            setHomeActive(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`${styles.home} ${homeActive ? styles.active : ""}`}>
            <nav className={styles.mainNavbar}>
                <div className={styles.navLogo}>
                    <img src={logo} alt="Infinite Eduverse Logo" className={styles.logo} />
                    <div className={styles.navText}>
                        <h1>Infinite Eduverse</h1>
                        <h3>Sikar, Rajasthan</h3>
                    </div>
                </div>
                <ul className={`${styles.navList} ${menuActive ? styles.active : ""}`}>
                    <li><a href="#" onClick={handleMenuItemClick}>Courses & Batch</a></li>
                    <li><a href="#" onClick={handleMenuItemClick}>Admission</a></li>
                    <li 
                        onMouseEnter={() => setShowFeeDropdown(true)}
                        onMouseLeave={() => setShowFeeDropdown(false)}
                    >
                        <a href="#">Fee & Scholarship</a>
                        {showFeeDropdown && (
                            <div className={styles.dropdown}>
                                <a href="#" onClick={handleMenuItemClick}>Fee Structure</a>
                                <a href="#" onClick={handleMenuItemClick}>Scholarship</a>
                                <a href="#" onClick={handleMenuItemClick}>Refund Rules</a>
                            </div>
                        )}
                    </li>
                    <li><a href="#" onClick={handleMenuItemClick}>Gallery</a></li>
                    <li 
                        onMouseEnter={() => setShowResultsDropdown(true)}
                        onMouseLeave={() => setShowResultsDropdown(false)}
                    >
                        <a href="#">Results</a>
                        {showResultsDropdown && (
                            <div className={styles.dropdown}>
                                <a href="#" onClick={handleMenuItemClick}>JEE Main</a>
                                <a href="#" onClick={handleMenuItemClick}>JEE Advanced</a>
                                <a href="#" onClick={handleMenuItemClick}>NEET UG</a>
                            </div>
                        )}
                    </li>
                    <li><a href="#" onClick={handleMenuItemClick}>Facilities</a></li>
                    <li><a href="#" onClick={handleMenuItemClick}>Contact Us</a></li>
                </ul>
                <div className={styles.menuBtn} onClick={handleMenuToggle}>
                    {menuActive ? (
                        <AiOutlineMenuUnfold style={{ height: "50px", width: "100px", marginTop: "15px" }} />
                    ) : (
                        <AiOutlineMenuFold style={{ height: "50px", width: "100px", marginTop: "15px" }} />
                    )}
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
