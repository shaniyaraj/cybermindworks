import React from "react";
import banner2 from "../assets/banner2.png";
import feeds from "../assets/feeds.webp";
import "./Farmyng.css"; // Import the CSS file

const Farmyng = () => {
  return (
    <div className="app-container">
      <h1 className="title">Farmyng Club</h1>
       <div className="phone-wrapper">
        <div className="phone-frame">
          <img
            src={banner2}
            alt="Left screen"
            className="phone-image"
          />
        </div>
      </div>
    </div>
  );
};


const Overview = () => {
  return (
    <section className="overview-section">
      <h2 className="overview-title">Overview</h2>
      <p className="overview-text">
        Farmyng Club is agri land platform that connects farmers with industries, agents and common people.
        Its the first ever app in India to comeup with the concept of contract farming. Its multilingual and 
        aimed at attracting farmers all over India. Its currently only available as a mobile app in android and iOS platform.
        Future plans include supporting farmers with cutting edge technology like IoT enabled sensors, farming equipments,
        B2B marketplace and more.
      </p>
    </section>
  );
};



const LocalizedNewsFeed = () => {
  return (
    <div className="localized-container">
      <div className="phone-container">
        <img src={feeds} alt="App Screenshot" className="img" />
      </div>

      <div className="text-container">
        <h2 className="heading">
          <span className="highlight">Localized</span> news feed
        </h2>
        <p className="description">
          Farmyng Club provides a highly personalized (& localized) feed for
          every farmer. This takes into account the preferences of the farmer,
          location, language and the crops that they are growing.
        </p>
      </div>
    </div>
  );
};




 



export default Farmyng;
export { Overview };
export {LocalizedNewsFeed} ;

