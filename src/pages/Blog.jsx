import React from 'react';
import './Blog.css';
import authorimage from '../assets/blogauthor.png'
// Import the new assets
import awsLogo from '../assets/amazon1.avif';
import awsTrust from '../assets/awstrust.avif';
import geminiImg from '../assets/gemini.avif';
import jsImg from '../assets/js.avif';
import kuberImg from '../assets/kuber.avif';
import unityImg from '../assets/unity.avif';
import startupImg from '../assets/startup.avif';
import typeerImg from '../assets/typeer.avif';


function Blog() {
 const blogPosts = [
    {
      id: 1,
      title: "Fixed: Amazon S3 403 Access Denied",
      author: "Dhanushkkar",
      date: "March 16, 2025",
      image: awsLogo,
      tags: ["AWS", "S3", "Troubleshooting"]
    },
    {
      id: 2,
      title: "Fixed: \"Connection refused\" or \"Connection timed out\" while connecting to EC2 Instance",
      author: "Dhanushkkar",
      date: "March 16, 2025",
      image: awsLogo,
      tags: ["AWS", "EC2", "Troubleshooting"]
    },
    {
      id: 3,
      title: "2025 Fixed: \"Write Not Enabled\" Error in AWS Trusted Advisor for S3 Bucket Access Logs",
      author: "Dhanushkkar",
      date: "March 16, 2025",
      image: awsTrust,
      tags: ["AWS", "Trusted Advisor", "S3"]
    },
    {
      id: 4,
      title: "2025 Fixed: GKE Pod Randomly Restarts Without Error",
      author: "Dhanushkkar",
      date: "March 16, 2025",
      image: kuberImg,
      tags: ["Kubernetes", "GKE", "Troubleshooting"]
    },
    {
      id: 5,
      title: "Fixed: Gemini Pro cURL Query Error: \"Please use a valid role: user, model.\"",
      author: "Dhanushkkar",
      date: "March 16, 2025",
      image: geminiImg,
      tags: ["Gemini", "API", "Troubleshooting"]
    },
    {
      id: 6,
      title: "[2025 Updated] Fixed: TypeError: Class extends value undefined is not a function or null",
      author: "Dhanushkkar",
      date: "March 16, 2025",
      image: jsImg,
      tags: ["JavaScript", "TypeScript", "Debugging"]
    },
    {
      id: 7,
      title: "How We Integrated Multiple Unity Games into a Mobile App and Launched a Skill-Based Real Money Gaming App",
      author: "Dhanushkkar",
      date: "March 16, 2025",
      image: unityImg,
      tags: ["Unity", "Mobile Development", "Case Study"]
    },
    {
      id: 8,
      title: "How to find a tech partner for your startup in Chennai",
      author: "Dhanushkkar",
      date: "March 16, 2025",
      image: startupImg,
      tags: ["Startup", "Partnership", "Chennai"]
    },
    {
      id: 9,
      title: "Why We Switched from Typesense to Postgres Full-Text Search",
      author: "Dhanushkkar",
      date: "March 16, 2025",
      image: typeerImg,
      tags: ["Database", "Search", "PostgreSQL"]
    },
    {
      id: 10,
      title: "How We Optimized Our AWS Infrastructure to Reduce Monthly Costs by 45%",
      author: "Dhanushkkar",
      date: "March 16, 2025",
      image: awsLogo,
      tags: ["AWS", "Cost Optimization", "Cloud"]
    },
  ];

  return (
    <div className="blog-container">
      <header>
        <h1>Our Blog</h1>
      </header>
      <main>
        {blogPosts.map(post => (
          <div className="blog-post" key={post.id}>
            <div className="blog-image">
              <img src={post.image} alt={`Illustration for ${post.title}`} />
            </div>
            <div className="blog-content">
              <h2>{post.title}</h2>
              <div className="blog-meta">
                <div className="author-info">
                  <img src={authorimage} alt="Author" className="author-avatar" />
                  <span className="author-name">{post.author}</span>
                </div>
                <span className="post-date">{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Blog;