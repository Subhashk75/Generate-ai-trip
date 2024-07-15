import React from 'react';
import styles from './UpperNav.module.css'; // Import the CSS file for styling
import { AiFillHome } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { MdComputer } from "react-icons/md";
const UpperNav = () => {
    return (
        <section className={styles.home} id="home">
            {/* Main Navbar Starts */}
            <div className={styles.upperNavBox}>
                <div className={styles.upperNav}>
                    <ul className={styles.upperNavList}>
                        <li>
                            <a href="index.html" style={{ color: '#ffffff' }}>
                            <AiFillHome />
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="https://maps.app.goo.gl/M6oCtoCrL3U8q9aK6" target='main'>
                            <AiFillHome />
                                Center
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.navBtn}>
                    <button className={styles.applyBtn} type="submit"><MdComputer style={{marginRight:"5px"}}/>Apply</button>
                    <button className={styles.loginBtn} type="submit"><BiLogIn style={{marginRight:"5px"}}/>Log In</button>
                </div>
            </div>
        </section>
    );
};

export default UpperNav;
