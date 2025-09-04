// pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="page home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Empowering Rural Youth Through Digital Innovation</h1>
            <p>Bridging the digital divide in Zimbabwe's rural communities</p>
            <div className="hero-buttons">
              <Link to="/donate" className="btn btn-primary">Support Our Mission</Link>
              <Link to="/projects" className="btn btn-secondary">Learn About Our Projects</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <div className="container">
          <h2>Our Impact</h2>
          <div className="impact-stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Youth Trained</p>
            </div>
            <div className="stat">
              <h3>10</h3>
              <p>ICT Hubs Established</p>
            </div>
            <div className="stat">
              <h3>15</h3>
              <p>Communities Reached</p>
            </div>
            <div className="stat">
              <h3>5</h3>
              <p>Innovation Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src="https://placehold.co/600x400/1e40af/ffffff?text=ICT+Hub" alt="ICT Innovation Hub" />
              </div>
              <div className="project-content">
                <h3>ICT Innovation Hubs</h3>
                <p>Establishing digital centers in rural communities to provide access to technology and training.</p>
                <Link to="/projects" className="btn btn-outline">Learn More</Link>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="https://placehold.co/600x400/7e22ce/ffffff?text=Digital+Skills" alt="Digital Skills Training" />
              </div>
              <div className="project-content">
                <h3>Digital Skills Training</h3>
                <p>Providing comprehensive training programs for youth in coding, digital literacy, and innovation.</p>
                <Link to="/projects" className="btn btn-outline">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Stories */}
      <section className="blog-stories">
        <div className="container">
          <h2>Success Stories</h2>
          <div className="stories-grid">
            <div className="story-card">
              <h3>From Rural Village to Tech Entrepreneur</h3>
              <p>Meet Tawanda, who after attending our digital skills program, started his own web development business.</p>
              <a href="#" className="read-more">Read Full Story →</a>
            </div>
            <div className="story-card">
              <h3>Girls Who Code: Breaking Barriers</h3>
              <p>How our program is encouraging more girls in rural areas to pursue careers in technology.</p>
              <a href="#" className="read-more">Read Full Story →</a>
            </div>
            <div className="story-card">
              <h3>Community Transformed by Technology</h3>
              <p>The story of how one ICT hub revolutionized learning and business in a remote community.</p>
              <a href="#" className="read-more">Read Full Story →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Join Us in Bridging the Digital Divide</h2>
            <p>Your support can help us reach more communities and empower more youth with digital skills.</p>
            <div className="cta-buttons">
              <Link to="/donate" className="btn btn-primary">Make a Donation</Link>
              <Link to="/contact" className="btn btn-secondary">Partner With Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;