// pages/Contact.tsx
import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a backend)
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <motion.div
      className="page contact"
      initial={{ x: '100vw' }} // Starts off-screen to the right
      animate={{ x: 0 }}       // Slides into view
      exit={{ x: '-100vw' }}   // Slides off-screen to the left when exiting
      transition={{ duration: 0.5 }} // Sets the duration of the animation
    >
      <div className="container">
        <div className="page-header">
          <h1>Contact Us</h1>
          <p>Get in touch with Progression Digital Ark</p>
        </div>

        <div className="contact-main">
          <div className="contact-details-section">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>We'd love to hear from you. Whether you have questions about our programs, want to partner with us, or are interested in volunteering, reach out to us through any of the channels below.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <div>
                    <h3>Email</h3>
                    <p>info@progressiondigitalark.org</p>
                  </div>
                </div>
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <div>
                    <h3>Phone</h3>
                    <p>+263 123 456 789</p>
                  </div>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div>
                    <h3>Address</h3>
                    <p>123 Digital Street<br />Harare, Zimbabwe</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-socials">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                  <a href="#" aria-label="Twitter"><FaTwitter /></a>
                  <a href="#" aria-label="Instagram"><FaInstagram /></a>
                  <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                </div>
              </div>
            </div>
            
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.33123456789!2d31.053073!3d-17.824858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x193237e6b541d13f%3A0x6b45070f61234567!2sHarare%2C%20Zimbabwe!5e0!3m2!1sen!2szw!4v1699999999999!5m2!1sen!2szw"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>

        <div className="team-section">
          <h2>Our Team Contacts</h2>
          <div className="team-grid">
            <div className="team-member">
              <h3>Program Director</h3>
              <p>Name: Tendai Mupfumi</p>
              <p>Email: tendai@progressiondigitalark.org</p>
              <p>Phone: +263 987 654 321</p>
            </div>
            <div className="team-member">
              <h3>Partnerships Manager</h3>
              <p>Name: Sarah Chikowore</p>
              <p>Email: sarah@progressiondigitalark.org</p>
              <p>Phone: +263 987 123 456</p>
            </div>
            <div className="team-member">
              <h3>Volunteer Coordinator</h3>
              <p>Name: James Ndlovu</p>
              <p>Email: james@progressiondigitalark.org</p>
              <p>Phone: +263 987 456 789</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;