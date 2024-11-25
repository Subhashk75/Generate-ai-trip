import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/photoes/logo.png";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [homeActive, setHomeActive] = useState(false);

    const handleMenuToggle = () => {
        setMenuActive(!menuActive);
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
                    <img src={logo} alt="CSE Office Logo" className={styles.logo} />
                    <div className={styles.navText}>
                        <h1>CSE Department Office</h1>
                        <h3>Office Management System</h3>
                    </div>
                </div>
                <ul className={`${styles.navList} ${menuActive ? styles.active : ""}`}>
                    <li>
                        <NavLink
                            to={"/"}
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${
                                    isActive ? "text-orange-600" : "text-gray-950"
                                } border-b font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/Facality&Staff"}
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${
                                    isActive ? "text-orange-600" : "text-gray-950"
                                } border-b font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                            }
                        >
                            Faculty/Staff
                        </NavLink>
                    </li>
                    <li>
                        <NavDropdown title="Activity" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/club">Club</NavDropdown.Item>
                            <NavDropdown.Item href="/Event">Event</NavDropdown.Item>
                            <NavDropdown.Item href="/scholarship">Scholarship</NavDropdown.Item>
                        </NavDropdown>
                    </li>
                
                    <li>
                        <NavLink
                            to={"/Course"}
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${
                                    isActive ? "text-orange-600" : "text-gray-950"
                                } border-b font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                            }
                        >
                            Course 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/reports"}
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${
                                    isActive ? "text-orange-600" : "text-gray-950"
                                } border-b font-medium text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                            }
                        >
                            Reports
                        </NavLink>
                    </li>
                </ul>
                <div className={styles.menuBtn} onClick={handleMenuToggle}>
                    {menuActive ? (
                        <AiOutlineMenuUnfold style={{ height: "50px", width: "100px" }} />
                    ) : (
                        <AiOutlineMenuFold style={{ height: "50px", width: "100px" }} />
                    )}
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
