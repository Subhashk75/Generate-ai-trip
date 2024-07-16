import React from 'react';
import UpperNav from '../../Components/NavbarSection/UpperNav';
import NavBar from '../../Components/NavbarSection/NavBar';
import FooterSection from '../../Components/Footer/FooterSection';
import styles from './FeeRefundRules.module.css';

const FeeRefundRules = () => {
  return (
    <>
      <UpperNav />
      <NavBar />
      <div className="w-full bg-gray-800 h-40 mt-20 flex items-center justify-center">
            <div className="w-5/6 mx-auto">
                <h1 className="text-center text-white text-4xl">Fee Refound Rules</h1>
            </div>
        </div>
      <div className={styles.container}>
        
        <section>
          <h2>How to Apply for Refund</h2>
          <ol>
            <li>Last Date to Apply for First Refund and Last Refund is mentioned on relevant Course Page of the Course Booklet and in your Fee Challan/ Fee Receipt. Amount Deductable in First Refund Case and Last Refund Case (towards Administrative & Academic Expenses) are also mentioned in the relevant Course Page of the Course Booklet Fee Challan/ Fee Receipt.</li>
            <li>Prescribed Refund Application Form can be obtained from our Office.</li>
            <li>Refund request made verbally or through phone/email/fax shall not be entertained in any case.</li>
            <li>Refund Application in the prescribed format will be accepted along with Original Fee Receipt, INFINITE EduVerse Identity Card & Attendance Card. No refund will be made after the Last Refund Date, except special cases as below.</li>
            <li>Refund will be credited in Father / Mother / Student Bank Account through NEFT / RTGS mode only. For this you have to submit Cancelled Cheque or Bank Passbook first page copy along with Refund Form.</li>
            <li>Refund rules are SAME even
              <ul>
                <li>If a student joins class after commencement date or</li>
                <li>If a student doesn't join or attend even a single class at all or</li>
                <li>If a student apply for refund before commencement of the class.</li>
              </ul>
            </li>
          </ol>
        </section>
        <section>
          <h2>Refund in Special Case After Last Refund Date</h2>
          <ol>
            <li>If <b>an enrolled </b>Student gets Admission in any Medical / Engineering College <b>(for which he has taken Admission)</b> located in India for MBBS / BDS / B.Tech. / B.E. / B.Arch. only through any Competitive Examination, refund will be made after deducting <b>amount equivalent to Last Refund amount out of Fee Paid. Refund shall not be payable if amount paid is less than amount equivalent to Last Refund amount.</b></li>
            <li>Refund of fee will be applicable only for the aforesaid courses. Refund will not be made for B.Pharma / B.YNS / B. Physiotherapy / B.VSc, B.Sc. and other Courses.</li>
            <li>Last date for such special case refund is <b style={{color:"red"}}>30/09/2024.</b></li>
            <li>For this following documents must be submitted along with prescribed Refund Application Form.
              <ul>
                <li>Original Fee Receipt of INFINITE EduVerse.</li>
                <li>Identity Card of INFINITE EduVerse.</li>
                <li>Attendance Card of INFINITE EduVerse.</li>
                <li>Photo Copy of College Call Letter / Counseling Letter.</li>
                <li>Fee Receipt of College Admission.</li>
              </ul>
            </li>
            <li>Refund application on the ground of severe disease may be considered by the management committee, after passing Last Refund date on submission of Medical Prescription / Report.</li>
          </ol>
        </section>
        <section>
          <h2>Refund Dates</h2>
          <table>
            <thead>
              <tr>
                <th>Last date of 1st Refund</th>
                <th>Last date of 2nd Refund</th>
                <th>Last date of 3rd Refund</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Within 15 days of Admission</td>
                <td>23-sep-2024</td>
                <td>No REFUND</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h6>1. After deposition of the fee, following charges are applicable for :</h6>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Duplicate ID Card</td>
                <td>200/-</td>
              </tr>
              <tr>
                <td>Duplicate Attendance Card</td>
                <td>200/-</td>
              </tr>
              <tr>
                <td>Duplicate Fee Receipt</td>
                <td>200/-</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h6>2. Late Fee Charges</h6>
          <p>If a student fails to deposit 2nd Installment on or before the Last Date mentioned in course booklet, late fee @ 50/- per day will be charged (in addition to Fee) upto 30 days. After this the admission shall be treated cancelled without any prior information & refund of fee.</p>
          <b>*Days will be counted from class commencement date.</b>
        </section>
        <section>
          <h2>Non-Refundable Items</h2>
          <p style={{fontSize:"15px",fontWeight:"700",color:"red"}}>1. Any Test Packages once purchased will not be cancelled or refunded.</p>
          <p style={{fontSize:"15px",fontWeight:"700",color:"red"}}>2. Admission fee once paid will not be cancelled or refunded.</p>
        </section>
        <section>
          <h2>Refund Guidelines</h2>
          <p>According to the Guidelines of the <b>District Collector, Sikar on 12 May, 2016,</b> students who want to discontinue study at this institute may get refund strictly in accordance with the following rules:</p>
          <ol>
            <li>Refund of any amount if payable shall be refunded by cheque only after deducting the following amount + GST:
              <ul>
                <li>0 to 10 days of admission Deduction = Rs. 5,000+GST</li>
                <li>11 to 20 days of admission Deduction = Rs. 10,000+GST</li>
                <li>21 to 30 days of admission Deduction = Rs. 15,000+GST</li>
              </ul>
            </li>
            <li>After 30 days of admission, 30% of whole amount of the course fee will be considered as a part of Institute element and it is not refundable in any case.</li>
            <li>Remaining 70% of whole amount of the course fee will be divided in terms of study period and balance if any refundable after deducting proportionate fee for the period studied.</li>
            <li>If the Course fee is refunded in that case only parents of ward will be eligible to take the amount and the amount will be refunded through Cheque only.</li>
            <li>To receive refundable amount, the parents of ward should apply in written.</li>
            <li>Refund request through Email/Fax/Telephone/Mobile/SMS will not be entertained.</li>
            <li>Refund request through WhatsApp 7240403535. (Only WhatsApp)</li>
            <li>In special case where any student gets admission in Govt. Medical/ Govt. Engineering college may get a refund of 50% of the amount deposited deducting GST on it even after 30 days on producing the following document:
              <ul>
                <li>Copy of college seat allotment letter.</li>
                <li>Copy of fee receipt of college where admission taken.</li>
                <li><b>Original fee receipt of INFINITE EduVerse.</b></li>
                <li>Student I-Card.</li>
              </ul>
            </li>
            <li>Refund request will be processed for those students only, who will submit the refund request form available on our website.</li>
            <li>Original fee deposit receipt and all student cards must be attached with the refund request.</li>
            <li>For any legal dispute jurisdiction will be Sikar (Rajasthan) only.</li>
          </ol>
          <p>Note: No refund shall be provided to any student in case the student is rusticated from the Institute on disciplinary grounds.</p>
        </section>
      </div>
      <FooterSection />
    </>
  );
};

export default FeeRefundRules;
