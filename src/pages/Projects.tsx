// pages/Projects.tsx
import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="page projects">
      <div className="container">
        <div className="page-header">
          <h1>Our Projects & Programs</h1>
          <p>Discover how we're making a difference in rural communities</p>
        </div>

        {/* Main Projects */}
        <section className="projects-section">
          <h2>Current Initiatives</h2>
          <div className="projects-grid">
            <div className="project-detail">
              <div className="project-image">
                <img src="https://placehold.co/800x500/1e40af/ffffff?text=ICT+Innovation+Hubs" alt="ICT Innovation Hubs" />
              </div>
              <div className="project-info">
                <h3>ICT Innovation Hubs</h3>
                <p>We establish fully-equipped digital centers in rural communities that provide:</p>
                <ul>
                  <li>Computer and internet access</li>
                  <li>Digital literacy training</li>
                  <li>Coding and programming classes</li>
                  <li>Innovation and entrepreneurship workshops</li>
                  <li>Research resources for students</li>
                </ul>
                <p>These hubs serve as community resources where youth can access technology, learn new skills, and develop innovative solutions to local challenges.</p>
              </div>
            </div>

            <div className="project-detail alt">
              <div className="project-info">
                <h3>Digital Skills Training Program</h3>
                <p>Our comprehensive training curriculum includes:</p>
                <ul>
                  <li>Basic computer literacy</li>
                  <li>Office software proficiency</li>
                  <li>Web development fundamentals</li>
                  <li>Digital marketing skills</li>
                  <li>Graphic design basics</li>
                  <li>Data analysis introduction</li>
                </ul>
                <p>We offer both beginner and advanced tracks, with certifications recognized by local employers and educational institutions.</p>
              </div>
              <div className="project-image">
                <img src="https://placehold.co/800x500/7e22ce/ffffff?text=Digital+Skills+Training" alt="Digital Skills Training" />
              </div>
            </div>

            <div className="project-detail">
              <div className="project-image">
                <img src="https://placehold.co/800x500/0d9488/ffffff?text=Youth+Innovation+Challenge" alt="Youth Innovation Challenge" />
              </div>
              <div className="project-info">
                <h3>Youth Innovation Challenge</h3>
                <p>An annual competition that encourages young people to:</p>
                <ul>
                  <li>Develop tech solutions to community problems</li>
                  <li>Work in teams to create prototypes</li>
                  <li>Receive mentorship from industry professionals</li>
                  <li>Compete for seed funding to implement their ideas</li>
                </ul>
                <p>Past winners have developed apps for agricultural market access, educational platforms, and healthcare information systems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Youth Participation */}
        <section className="participation-section">
          <h2>Opportunities for Youth Participation</h2>
          <div className="opportunities-grid">
            <div className="opportunity-card">
              <h3>Volunteer Programs</h3>
              <p>Youth can volunteer at our ICT hubs as teaching assistants, tech support, or community ambassadors. Gain valuable experience while giving back to your community.</p>
              <a href="#" className="btn btn-outline">Learn More</a>
            </div>
            <div className="opportunity-card">
              <h3>Internship Opportunities</h3>
              <p>We offer internships in program coordination, digital content creation, and community outreach. Perfect for students and recent graduates.</p>
              <a href="#" className="btn btn-outline">Learn More</a>
            </div>
            <div className="opportunity-card">
              <h3>Youth Advisory Board</h3>
              <p>Join our youth advisory board to help shape our programs and ensure they meet the needs of young people in rural communities.</p>
              <a href="#" className="btn btn-outline">Apply Now</a>
            </div>
            <div className="opportunity-card">
              <h3>Digital Champions</h3>
              <p>Become a digital champion in your community by helping others learn digital skills and promoting the use of technology for development.</p>
              <a href="#" className="btn btn-outline">Join Now</a>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="events-section">
          <h2>Upcoming Events & Programs</h2>
          <div className="events-list">
            <div className="event-item">
              <div className="event-date">
                <span className="day">15</span>
                <span className="month">Sept</span>
              </div>
              <div className="event-details">
                <h3>Digital Literacy Workshop</h3>
                <p>Basic computer skills training for beginners in Mutoko community.</p>
                <a href="#" className="event-link">Register →</a>
              </div>
            </div>
            <div className="event-item">
              <div className="event-date">
                <span className="day">22</span>
                <span className="month">Sept</span>
              </div>
              <div className="event-details">
                <h3>CodeHubs Launch</h3>
                <p>Grand opening of our new coding center in Masvingo province.</p>
                <a href="#" className="event-link">Learn More →</a>
              </div>
            </div>
            <div className="event-item">
              <div className="event-date">
                <span className="day">05</span>
                <span className="month">Oct</span>
              </div>
              <div className="event-details">
                <h3>Innovation Challenge Kickoff</h3>
                <p>Information session for the annual youth innovation competition.</p>
                <a href="#" className="event-link">Apply Now →</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;