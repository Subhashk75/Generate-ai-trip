import React, { Component } from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaYoutube, FaTelegram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { ImMobile } from "react-icons/im";
import { IoMailOpenOutline } from "react-icons/io5";

class FooterSection extends Component {
  render() {
    return (
      <section className={styles.footer} id="footer">
        <div className={styles.footerContents}>
          <div className={`${styles.footerCol} ${styles.footerCol1}`}>
            <div className={styles.colTitle}>
              <h3 >About Us</h3>
            </div>
            <hr className={styles.hrLine} />
            <div className={styles.colContents}>
              <ul>
                <li><a href="#">About CSE Office</a></li>
                <li><a href="#">Mission & Vision</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">System Overview</a></li>
              </ul>
            </div>
          </div>
          <div className={`${styles.footerCol} ${styles.footerCol2}`}>
            <div className={styles.colTitle}>
              <h4>Office Services</h4>
            </div>
            <hr className={styles.hrLine} />
            <div className={styles.colContents}>
              <ul>
                <li><a href="#">Attendance Management</a></li>
                <li><a href="#">Faculty Resources</a></li>
                <li><a href="#">Student Records</a></li>
                <li><a href="#">Event Planning</a></li>
              </ul>
            </div>
          </div>
          {/* <div className={`${styles.footerCol} ${styles.footerCol3}`}>
            <div className={styles.colTitle}>
              <h4>Resources</h4>
            </div>
            <hr className={styles.hrLine} />
            <div className={styles.colContents}>
              <ul>
                <li><a href="#">Department Handbook</a></li>
                <li><a href="#">Research Publications</a></li>
                <li><a href="#">Important Notices</a></li>
                <li><a href="#">Contact Faculty</a></li>
              </ul>
            </div>
          </div> */}
          <div className={`${styles.footerCol} ${styles.footerCol4}`}>
            <div className={styles.colTitle}>
              <h4>Quick Links</h4>
            </div>
            <hr className={styles.hrLine} />
            <div className={styles.colContents}>
              <ul>
                <li><a href="#">Office Hours</a></li>
                <li><a href="#">Examination Schedule</a></li>
                <li><a href="#">Library Access</a></li>
                <li><a href="#">Career Opportunities</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerPart2}>
          <div className={styles.footerLogo}>
            <div className={styles.socialMediaAccounts}>
              <ul className={styles.socialUl}>
                <li>
                  <a href="#" target="main" className={styles.telegram}>
                    <FaTelegram className="fab fa-telegram" />
                  </a>
                </li>
                <li>
                  <a href="#" target="main" className={styles.facebook}>
                    <FaFacebook className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" target="main" className={styles.instagram}>
                    <RiInstagramFill className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#" target="main" className={styles.twitter}>
                    <FaSquareXTwitter className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" target="main" className={styles.youtube}>
                    <FaYoutube className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footerPart2Col}>
            <div className={styles.footerPart2Col1}>
              <div className={styles.imgIcon}>
                <PiBuildingApartmentFill className={styles.addressIcon} />
              </div>
              <div className={styles.footerPart2ColContent}>
                <div className={styles.footerPart2Heading}>
                  <h3>Office Address</h3>
                </div>
                <p>Computer Science Department, ABC University, Building 5<br />Pincode: 123456</p>
              </div>
            </div>
            <div className={styles.footerPart2Col2}>
              <div className={styles.imgIcon}>
                <ImMobile className={styles.addressIcon} />
              </div>
              <div className={styles.footerPart2ColContent}>
                <div className={styles.footerPart2Heading}>
                  <h3>Contact Us</h3>
                </div>
                <p>+91 123-456-7890<br /><span>(09:00 AM to 05:00 PM)</span></p>
              </div>
            </div>
            <div className={styles.footerPart2Col3}>
              <div className={styles.imgIcon}>
                <IoMailOpenOutline className={styles.addressIcon} />
              </div>
              <div className={styles.footerPart2ColContent}>
                <div className={styles.footerPart2Heading}>
                  <h3>Email Us</h3>
                </div>
                <p>cseoffice@abcuniversity.edu</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyRights}>
          <p>
            <a href="#">
              Terms of Use | Privacy Policy | Payment Terms | Refund & Cancellation | Disclaimer | Public Notice
            </a>
          </p>
          <p>
            Created By <a href="#" className={styles.bidsukCompany}><b>ABC Tech Solutions</b></a> © 2024 All rights reserved.
          </p>
        </div>
      </section>
    );
  }
}

export default FooterSection;
