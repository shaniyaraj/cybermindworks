import React from "react";
import banner2 from "../assets/banner2.png";
import feeds from "../assets/feeds.webp";
import listingPage from  "../assets/listingPage.webp"
import marketplace from "../assets/marketplace.webp"
import agri from "../assets/agri.webp"
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
       Farmyng Club is agri land platform that connects farmers with industries, agents and common people.Its<br />
        the first ever app in India to comeup with the concept of contract farming. Its multilingual and 
        aimed at<br /> attracting farmers all over India. Its currently only available as a mobile app in android and iOS platform.<br />
        Future plans include supporting farmers with cutting edge technology like IoT enabled sensors, farming<br /> equipments,
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
        <h1 className="font-heading">
         <span className="highlight">Localized</span> news feed
        </h1>
       <p className="description">
          Farmyng Club provides a highly personalized (& <br />
          localized) feed for every farmer. This takes into <br />
          account the preferences of the farmer,location,<br />
           language and the crops that they are growing.
        </p>
      </div>
      </div>
);
 };

const ListingPage= () => {
 return (
    <div className="localized-container">
      <div className="text-container">
        <h1 className="font-heading">
         <span className="highlight">Listing Page</span> for all
        </h1>
       <p className="description">
          Every farmer gets a free landing page listing their <br />
          crops, products & services offered. They can share <br /> 
          this page with others and generate leads for his <br />
          business.
        </p>
      </div>
      <div className="phone">
        <img src={listingPage} alt="App Screenshot" className="imag2"  />
      </div>
    </div>
  );
};

function MarketPage() {
  return (
      <div className="localized-container">
     <div className="phone-container">
       <img src={marketplace} alt="App Screenshot" className="img" />
  </div>

      <div className="text-container">
        <h1 className="font-heading">
         <span className="highlight">Marketplace </span>- Products & services
         </h1>
       <p className="description">
          Farmyng Club offers a peer to peer marketplace<br />
           where anyone can offer a product or a service.<br />
        </p>
      </div>
      </div>
  );
}

 function AgriPage() {
  return (
  
      <div className="localized-container">
      <div className="text-container">
        <h1 className="font-heading">
         <span className="highlight">Agri Product </span>, buy at 0% commission
        </h1>
       <p className="description">
          Users can purchase products, services from other <br />
          members of Farmyng Club with no brokerage fee. All <br />
          leads are passed on to the owner completely free of cost.
        </p>
      </div>
      <div className="phone">
        <img src={agri} alt="App Screenshot" className="imag2"  />
      </div>
    </div>
      
      
  );
}

  const Callbutton = () => {
    return (
      <div className="cta-wrapper">
        <h2 className="cta-title">Want a similar app?</h2>
        <button className="cta-button">Talk to us now!</button>
      </div>
    );
  };
 



export default Farmyng;
export { Overview };
export {LocalizedNewsFeed} ;
export {ListingPage};
export{MarketPage};
export {AgriPage};
export {Callbutton};

