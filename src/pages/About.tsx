// pages/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="page about">
      <div className="container">
        <div className="page-header">
          <h1>About Progression Digital Ark</h1>
          <p>Learn about our mission, vision, and values</p>
        </div>

        {/* Mission Section */}
        <section className="about-section">
          <div className="section-content">
            <div className="text-content">
              <h2>Our Mission</h2>
              <p>Our mission is to bridge the digital divide by establishing ICT Innovation Hubs in rural communities and enhancing the use of ICTs in evaluation, measurement, and education. We aim to equip the next generation with the necessary skills and knowledge to thrive in a digital world, thereby fostering inclusive growth and development.</p>
            </div>
            <div className="image-content">
              <img src="https://placehold.co/600x400/1e40af/ffffff?text=Mission" alt="Our Mission" />
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="about-section alt">
          <div className="section-content">
            <div className="image-content">
              <img src="https://placehold.co/600x400/7e22ce/ffffff?text=Vision" alt="Our Vision" />
            </div>
            <div className="text-content">
              <h2>Our Vision</h2>
              <p>Our vision is to create a world where all children and young people in Zimbabwe, regardless of their geographic location, have access to the digital tools and knowledge needed to succeed in the 21st century.</p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Empowerment</h3>
              <p>We believe in empowering children and young people to reach their full potential by providing them with the tools and knowledge needed to succeed.</p>
            </div>
            <div className="value-card">
              <h3>Inclusivity</h3>
              <p>We are committed to fostering inclusivity and equal opportunity in all our operations and activities.</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We believe in the power of innovation to drive progress and improve lives, and we strive to be at the forefront of digital innovation.</p>
            </div>
            <div className="value-card">
              <h3>Collaboration</h3>
              <p>We recognize that collaboration and partnership are essential for achieving our mission.</p>
            </div>
            <div className="value-card">
              <h3>Sustainability</h3>
              <p>We are committed to promoting sustainable development and ensuring that our operations are environmentally responsible.</p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="history-section">
          <h2>Our History</h2>
          <div className="history-content">
            <p>Progression Digital Ark was founded in 2020 with the goal of addressing the growing digital divide in Zimbabwe's rural communities. Recognizing that access to technology and digital skills was increasingly becoming a determinant of success in the modern world, our founders set out to create an organization that would empower youth regardless of their geographic location.</p>
            <p>Since our inception, we have established multiple ICT Innovation Hubs across rural Zimbabwe, trained hundreds of young people in digital skills, and partnered with local communities, government agencies, and international organizations to expand our impact.</p>
            <p>Today, we continue to innovate and expand our programs to reach more communities and create more opportunities for Zimbabwe's youth.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;