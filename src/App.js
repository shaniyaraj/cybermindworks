import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <WorksSection />
      <Footer />
    </div>
  );
}

function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  
  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="logo-text">CyberMind Works</h1>
      </div>
      
      <nav className="main-nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#portfolio">Portfolio</a></li>
          
          <li className="nav-item dropdown">
            <a href="#services" onClick={(e) => {
              e.preventDefault();
              setServicesOpen(!servicesOpen);
            }}>
              Services 
              <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </a>
            {servicesOpen && (
              <ul className="dropdown-menu">
                <li><a href="#web-apps">Web Appst</a></li>
                <li><a href="#mobile-apps">Mobile Apps</a></li>
              </ul>
            )}
          </li>
          
          <li className="nav-item dropdown">
            <a href="#products" onClick={(e) => {
              e.preventDefault();
              setProductsOpen(!productsOpen);
            }}>
              Products 
              <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </a>
            {productsOpen && (
              <ul className="dropdown-menu">
                <li><a href="#profitabill">Profitabill</a></li>
                <li><a href="#farmyng club">Farmyng Club</a></li>
              </ul>
            )}
          </li>
          
          <li className="nav-item"><a href="#blog">Blog</a></li>
          <li className="nav-item"><a href="#careers">Careers</a></li>
        </ul>
      </nav>
      
      <button className="contact-button">Contact Us</button>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Get a software for your business that is 
          <span className="gradient-text"> Secure.</span>
          <span className="gradient-text"> Fast.</span>
          <span className="gradient-text"> Scalable.</span>
           <span className="gradient-text"> Reliable.</span>
        </h1>
        
        <p className="hero-subtitle">
          We specialize in creating custom software solutions from 
          the ground up for startups and mid-sized enterprises.
        </p>
        
        <div className="trusted-by">
          <p>Trusted by</p>
          <div className="trusted-logo">
            <img src="/y-combinator.svg" alt="Y Combinator" />
            <p>founders</p>
          </div>
        </div>
      </div>
    </section>
  );
}
const projectsData = {
    learning: [
      {
        title: 'Coding Judge, Audio/Video tests',
        description:'We built a platform that can host MCQs, Coding questions, Audio, Video (Listening, Reading tests), File submission.',
        image: '/EnterpriseScale.png',
      },
      {
        title: 'Student skill profilling',
        description: 'Complete skills profiling of a student, areas of strength/weakness. Suggestions to improve the same.',
        image: '/lead-dashboard.png',
      },
      {
        title: 'AI integrated- GPT 3.5',
        description: 'Automated creation of question banks, assessment of subjective questions, and crafting individualized reports for students.',
        image: '/tracking-dashboard.png',
      },
    ],
    interactive: [
      {
        title: 'Realtime multi user collaborative editor',
        description: 'Google docs like interactivity and notion like interface built into one.',
       image: '/hackathon.png',
       isSpecialLayout: true,
      },
      {
        title:'Not just Text',
        description:'Editor supports MCQs, Coding editor and many such components built according to client’s needs',
      },
      {
        title:'Version control, Auto save and more...',
        description:'WebRTC based editor, very fast. Supports large number of users. Content exportable as E-Books, PPT, Webpage.',
      },
    ],
    // You can add projects for other categories as needed
    enterprise: [
      {
        title: '5 Million + leads in CRM',
        description: 'Slick application with complex tailor made business reports rendered in seconds - all while munching huge amounts of dataicon',
        image: '/EnterpriseScale.png',
      },
      {
        title:'Near real-time Lead Prioritization',
        description:'Get an agent assigned to your hot leads in few seconds all while running complicated lead assignment and prioritization algorithms',
    },
    {
        title:'360 degree tracking across products',
        description:'Track every activity of a lead - website visits, form fills, inbound calls, emails, social media ads and more..',
    }
    ],
    data: [
      {
        title: '100,000,000 + records migrated',
        description:'Handling large amounts of data, we have migrated entire data store for a client with very minimal infra cost',
       image: '/data-analytics.png',
      },
      {
        title: 'Tera bytes of fast data movement ',
        description:'We optimised data movement,running custom scripts,fine tuning infrastructure-completing migration in less than 48 hours',
      },
],
    blazing: [
      {
        title: 'Millions of visits',
        description:'We have built websites that handle millions of visitors, while still operating at peak performance',
    },
    {
        title:'Lightning speed - 90 + score',
        description:"We have bulit websites that have consistency ranked hign in google page audits"
    },
    {
        title:'Crazy Optimization',
        description:'We implemented optimization techniques - lazy loading, dynamic image optimization, gzip compression & leveraged JAM stack',
    },
    ],
    award: [
      {
        title: 'Recognized by Google',
        description:'We were trained by Google in partnership with the Ministry of Electronics and Information Technology - Appscale academy',
        image: '/flutter-app.png',
      },
      {
        title:'National News coverage',
        description:'Our association with Google Appscale academy was conveyed in all major new-pappers ',
      },
      {
        title:'Loved by Users',
        description:'4 + star rated and downloade by more than 10,000 users in playstore',
      },
    ],
  };

function WorksSection() {
  const [activeCategory, setActiveCategory] = useState('learning');
  const [activeSlide, setActiveSlide] = useState(0);

  const categories = [
    { id: 'enterprise', name: 'Enterprise scale', tags: ['#SaaS', '#CRM'] },
    { id: 'learning', name: 'Learning platform', tags: ['#LMS'] },
    { id: 'interactive', name: 'Interactive', tags: ['#LMS'] },
    { id: 'data', name: 'Data heavy', tags: ['#ETL'] },
    { id: 'blazing', name: 'Blazing fast', tags: ['#JAMStack'] },
    { id: 'award', name: 'Award winning app', tags: ['#Flutter'] },
  ];

 
  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const projects = projectsData[activeCategory] || [];
    if (projects.length === 0) return;
    
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % projects.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeCategory]);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveSlide(0); // Reset to first slide when changing categories
  };

  const renderProjects = () => {
    const projects = projectsData[activeCategory] || [];
    if (projects.length === 0) {
      return <div className="no-projects">No projects to display for this category.</div>;
    }

    return (
      <div className="projects-showcase">
        <div className="showcase-container">
          {/* Left Column - Project Features */}
          <div className="project-features">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`project-feature ${index === activeSlide ? 'active' : ''}`}
                onClick={() => setActiveSlide(index)}
              >
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" className="lightning-icon">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="currentColor" />
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right Column - Image Showcase */}
          <div className="image-showcase">
            {projects[activeSlide]?.isSpecialLayout ? (
              <div className="hackathon-display">
                <div className="hackathon-main">
                  <img src="/interactive.png" alt="24 Hour Programming Hackathon" />
                </div>
                <div className="hackathon-details">
                  <img src="/hackathon-card.png" alt="Hackathon Details" />
                  <img src="/hackathon-schedule.png" alt="Hackathon Schedule" />
                </div>
              </div>
            ) : (
              <div className="image-container">
                <img 
                  src={projects[activeSlide]?.image} 
                  alt={projects[activeSlide]?.title}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="works-section">
      <h2 className="section-title">Some of our works</h2>
      
      {/* Category Tabs */}
      <div className="category-tabs">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category.id)}
          >
            <h3>{category.name}</h3>
            <div className="tags">
              {category.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Active Indicator */}
      <div className="active-indicator">
        <div 
          className="indicator-line" 
          style={{ 
            left: `${categories.findIndex(cat => cat.id === activeCategory) * (100 / categories.length)}%`,
            width: `${100 / categories.length}%`
          }}
        ></div>
      </div>
      
      {/* Projects Display */}
      {renderProjects()}
      
      {/* Slide Indicators */}
      <div className="slide-indicators">
        {(projectsData[activeCategory] || []).map((_, index) => (
          <button 
            key={index}
            className={`indicator ${index === activeSlide ? 'active' : ''}`}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          {/* <img src="/logo.svg" alt="CyberMind Works Logo" className="logo" /> */}
          <h2 className="logo-text">CyberMind Works</h2>
        </div>
        
        <div className="footer-links">
          <div className="link-column">
            <h3>Portfolio</h3>
            <ul>
              <li><a href="#sales crm">Sales CRM</a></li>
              <li><a href="#marketing jobverse">Marketing Jobverse</a></li>
              <li><a href="#uthsav">Uthsav</a></li>
              <li><a href="#learning platform">Learning platform</a></li>
              <li><a href="#profitabill">Profitabill</a></li>
              <li><a href="#baabee">Baabee Tv</a></li>
              <li><a href="#inesh">Inesh</a></li>
              <li><a href="#political">Political App</a></li>
              <li><a href="#farmyung club app">Farmyng Club App</a></li>
            </ul>
          </div>
          
          <div className="link-column">
            <h3>Offerings</h3>
            <ul>
              <li><a href="#Products">Products</a></li>
              <li><a href="#Services">Services</a></li>
              <li><a href="#Web App">Web App</a></li>
              <li><a href="# Development">Development</a></li> 
              <li><a href="#Mobile App">Mobile App </a></li>
              <li><a href="#Development">Development</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h3>Careers</h3>
            <ul>
              <li><a href="#">We are hiring!</a></li>
            </ul>
          </div>
          
          <div className="link-column">
            <h3>CyberMind Works LLp</h3>
            <ul>
              <li><a href="mailto:info@cybermindworks.com">CyberMind Works LLP 10/15, 
                K.M Towers - 1st Floor, Chakrapani Road,
                Guindy, Chennai, Tamil Nadu, 60004</a></li>
              <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
              <li className="social-links">
                <a href="#twitter" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a href="#linkedin" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="#github" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="copyright">
        <p>&copy; 2025 CyberMind Works. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default App;