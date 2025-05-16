import React from "react";
import "./Profitabill.css"; 
import screen1 from "../assets/screen1.png"; 
import screen4 from "../assets/screen4.png";
import screen2 from "../assets/screen2.png";
import screen3 from "../assets/screen3.png";
import advancedBilling from "../assets/advancedBilling.png";
import intelligentReports from "../assets/intelligentReports.png";
import marketingEngine from "../assets/marketingEngine.png";
import appointments from "../assets/appointments.png";

const Profitabill = () => {
  return (
    <div className="profitabill-hero">
      <div className="profitabill-text">
        <h1><strong>Profitabill</strong></h1>
        <p>POS</p>
      </div>
      <div className="profitabill-images">
        <img src={screen1} alt="Screen 1" className="box1" />
        <img src={screen4} alt="Screen 2" className="box1" />
        <img src={screen2} alt="Screen 3" className="box1" />
        <img src={screen3} alt="Screen 4" className="box1"/>
    </div>
    </div>
  );
};

const Review = () => {
   return (
     <section className="overview-section">
      <h2 className="overview-title">Overview</h2>
     <p className="overview-text">
       Profitabill is a SaaS with advanced billing, customer management and marketing engine for the beauty & <br />
       wellness industry. It runs completely on cloud and supports multiple branches for each vendor. Its built in <br />
        marketing engine and appointment system makes it easy for the business to manage their spas & salons <br />
        online. It is one of the first software to support role based login to restrict access to staffs using the <br />
        software
     </p>
     </section>
   );
 };

const Features = () => {
  return (
    <div className="features-wrapper">

      <section className="feature-section">
        <div className="feature-image">
          <img src={advancedBilling} alt="Advanced Billing" />
        </div>
        <div className="feature-text">
          <h2 style={{paddingLeft:'100px'}}>Advanced billing</h2>
          <p style={{paddingLeft:'100px'}}>
            Simple yet powerful billing interface. We allow <br /> searching customers, creating customers,
            bill<br /> products, bill services, bill memberships, give <br />custom discount, redeem reward points –
            all in one<br /> single page. The customers get their invoice via SMS<br /> with built-in feedback form.
            Now the owners get to <br /> know immediately if the customers are not satisfied.
          </p>
        </div>
      </section>
 <section className="feature-section reverse">
    <div className="feature-image">
          <img src={intelligentReports} alt="Intelligent Reports" />
        </div>
        <div className="feature-text">
          <h2>Intelligent Reports</h2>
          <p>
            We know that businesses need reports & analytics<br /> to take data driven decisions for their business.
            We <br />hence built a comprehensive dashboard that gives <br/>useful insights for the business owners.
            Reports <br />include best selling services by gender, heat map of <br />customers visit time,
            month on month revenue <br />growth and so on.
          </p>
        </div>
      </section>

        <section className="feature-section reverse">
        <div className="feature-text">
          <h2 style={{paddingLeft:'100px'}}>Marketing Engine</h2>
          <p style={{paddingLeft:'100px'}}>
            We noticed that businesses often rely on external<br /> marketing softwares even for the simple needs.<br />
             Hence we went ahead and built a marketing engine <br />
            that is contextual. Here we allow business to 
            target<br /> their customer segments like ActiveCustomers,
            <br /> InActive Customers etc. This targeting 
            greatly <br />improves the success of their marketing campaigns 
            <br />and all this happens in just 3 Steps.
          </p>
        </div>
         <div className="feature-image">
          <img src={marketingEngine} alt="Intelligent Reports" />
        </div> 
      </section> 

    <section className="feature-section reverse">
        <div className="feature-image">
          <img src={appointments} alt="Intelligent Reports" />
        </div>
        <div className="feature-text">
          <h2>Take Appointments</h2>
          <p>
            Profitabill comes with built in appointment system<br />
            that tracks appoinments across branches and also<br />
            blocks the time of the staff - thereby preventing<br />
            clash. The customer gets an SMS alert when they<br />
            book an appointment and also few minutes before<br />
            the appointment commences. This significantly<br />
            reduces no show of customers.
          </p>
        </div>
      </section>
    </div>
  );
}; 



const CallToAction = () => {
  return (
    <div className="cta-wrapper">
      <h2 className="cta-title">Want a similar app?</h2>
      <button className="cta-button">Talk to us now!</button>
    </div>
  );
};

export  {CallToAction};


export {Features};

export {Review}

export default Profitabill;