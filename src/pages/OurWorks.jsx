
import React from 'react';
import './OurWorks.css';

// Import images
import demoPortalImg from '../assets/baabee2.webp';
import freelancePlatformImg from '../assets/freelance2.png';
import hyperlaunchImg from '../assets/hyperlaunch.png';
import marketingJobverseImg from '../assets/marketing2.webp';

function OurWorks() {
  // Portfolio data array
  const portfolioData = [
    {
      id: 1,
      title: 'Demo Portal',
      image: demoPortalImg,
      gradient: 'purple-gradient',
      features: ['Realtime Matching', 'Calendar sync', 'Notifications', 'Reports'],
    },
    {
      id: 2,
      title: 'Freelance platform',
      image: freelancePlatformImg,
      gradient: 'orange-gradient',
      features: ['Freelance Directory', 'Custom Quotation', 'Track Progress', 'Rating & Reviews'],
    },
    {
      id: 3,
      title: 'Hyperlaunch Learning platform',
      image: hyperlaunchImg,
      gradient: 'purple-gradient',
      features: ['LMS', 'Job Search'],
    },
    {
      id: 4,
      title: 'Marketing Jobverse',
      image: marketingJobverseImg,
      gradient: 'orange-gradient',
      features: ['Subscription', 'Freelance Directory', 'Job Search', 'JobAlerts'],
    },
    {
      id: 5,
      title: 'Uthsav',
      image: hyperlaunchImg,
      gradient: 'purple-gradient',
      features: ['LMS', 'Job Search'],
    },
    {
      id: 6,
      title: 'Farmyng',
      image: marketingJobverseImg,
      gradient: 'orange-gradient',
      features: ['Subscription', 'Freelance Directory', 'Job Search', 'JobAlerts'],
    },
    {
      id: 7,
      title: 'Sales CRM',
      image: hyperlaunchImg,
      gradient: 'purple-gradient',
      features: ['LMS', 'Job Search'],
    },
    {
      id: 8,
      title: 'Learning Platform',
      image: marketingJobverseImg,
      gradient: 'orange-gradient',
      features: ['Subscription', 'Freelance Directory', 'Job Search', 'JobAlerts'],
    },
    {
      id: 9,
      title: 'Profitabill',
      image: hyperlaunchImg,
      gradient: 'purple-gradient',
      features: ['LMS', 'Job Search'],
    },
    {
      id: 10,
      title: 'BabeeTv',
      image: marketingJobverseImg,
      gradient: 'orange-gradient',
      features: ['Subscription', 'Freelance Directory', 'Job Search', 'JobAlerts'],
    },
    {
      id: 11,
      title: 'inesh',
      image: hyperlaunchImg,
      gradient: 'purple-gradient',
      features: ['LMS', 'Job Search'],
    },
    {
      id: 12,
      title: 'Sakkarapani',
      image: marketingJobverseImg,
      gradient: 'orange-gradient',
      features: ['Subscription', 'Freelance Directory', 'Job Search', 'JobAlerts'],
    },
  ];

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Our Works</h1>
      
      <div className="portfolio-grid">
        {portfolioData.map((project) => (
          <div key={project.id} className={`portfolio-card `}>
            <div className="card-label">{project.title}</div>
            <div className={`image-container ${project.gradient}`}>
              <img src={project.image} alt={`${project.title} Screenshot`} />
            </div>
            <h2 className="card-title">{project.title}</h2>
            <div className="feature-buttons">
              {project.features.map((feature, index) => (
                <button key={index} className="feature-btn">{feature}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurWorks;