import React, { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submissionMessage, setSubmissionMessage] = useState('');

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
    setSubmissionMessage('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  // Animation variants
  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="page contact"
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="container">
          <motion.header 
            className="page-header"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <h1>Get In Touch With Us</h1>
            <p>We're here to answer your questions and discuss how we can work together to empower rural youth</p>
          </motion.header>

          <motion.div 
            className="contact-main"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="contact-content">
              <motion.div className="contact-info" variants={itemVariants}>
                <div className="contact-card">
                  <h2>Let's Start a Conversation</h2>
                  <p className="intro-text">Whether you're interested in our programs, want to partner with us, or have questions about how you can contribute to our mission, we'd love to hear from you.</p>
                  
                  <div className="contact-details">
                    <motion.div 
                      className="contact-item"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="icon-wrapper">
                        <FaEnvelope className="contact-icon" />
                      </div>
                      <div className="contact-text">
                        <h3>Email Us</h3>
                        <p>info@progressiondigitalark.org</p>
                        <span>We'll respond within 24 hours</span>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="contact-item"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="icon-wrapper">
                        <FaPhone className="contact-icon" />
                      </div>
                      <div className="contact-text">
                        <h3>Call Us</h3>
                        <p>+263 123 456 789</p>
                        <span>Mon-Fri from 8am to 5pm</span>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="contact-item"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="icon-wrapper">
                        <FaMapMarkerAlt className="contact-icon" />
                      </div>
                      <div className="contact-text">
                        <h3>Visit Us</h3>
                        <p>1st Street<br />Mutare, Zimbabwe</p>
                        <span>Come by for a tour of our facilities</span>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="contact-socials">
                    <h3>Follow Our Journey</h3>
                    <p>Stay updated with our latest initiatives and success stories</p>
                    <div className="social-links">
                      <motion.a 
                        href="#" 
                        aria-label="Facebook"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaFacebookF />
                      </motion.a>
                      <motion.a 
                        href="#" 
                        aria-label="Twitter"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaTwitter />
                      </motion.a>
                      <motion.a 
                        href="#" 
                        aria-label="Instagram"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaInstagram />
                      </motion.a>
                      <motion.a 
                        href="#" 
                        aria-label="LinkedIn"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaLinkedinIn />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div className="contact-form-section" variants={itemVariants}>
                <div className="form-card">
                  <div className="form-header">
                    <h2>Send Us a Message</h2>
                    <p>Fill out the form below and we'll get back to you as soon as possible</p>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Message Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Your Message..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    
                    {submissionMessage && (
                      <div className="submission-message">
                        {submissionMessage}
                      </div>
                    )}
                    
                    <motion.button 
                      type="submit" 
                      className="btn btn-primary submit-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send Message <FaPaperPlane className="btn-icon" />
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="contact-map-section" variants={itemVariants}>
              <div className="map-card">
                <h2>Find Us Here</h2>
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.33123456789!2d31.053073!3d-17.824858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x193237e6b541d13f%3A0x6b45070f61234567!2sMutare%2C%20Zimbabwe!5e0!3m2!1sen!2szw!4v1699999999999!5m2!1sen!2szw"
                    width="100%"
                    height="400"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="team-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="section-header">
              <h2>Our Team Contacts</h2>
              <p>Get in touch directly with our team members</p>
            </div>
            
            <motion.div className="team-grid">
              <motion.div 
                className="team-card"
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="team-avatar"></div>
                <h3>Tendai Mupfumi</h3>
                <span className="team-role">Program Director</span>
                <div className="team-contact-info">
                  <p><FaEnvelope /> tendai@progressiondigitalark.org</p>
                  <p><FaPhone /> +263 987 654 321</p>
                </div>
                <button className="btn btn-outline team-contact-btn">Contact Tendai</button>
              </motion.div>
              
              <motion.div 
                className="team-card"
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="team-avatar"></div>
                <h3>Sarah Chikowore</h3>
                <span className="team-role">Partnerships Manager</span>
                <div className="team-contact-info">
                  <p><FaEnvelope /> sarah@progressiondigitalark.org</p>
                  <p><FaPhone /> +263 987 123 456</p>
                </div>
                <button className="btn btn-outline team-contact-btn">Contact Sarah</button>
              </motion.div>
              
              <motion.div 
                className="team-card"
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="team-avatar"></div>
                <h3>James Ndlovu</h3>
                <span className="team-role">Volunteer Coordinator</span>
                <div className="team-contact-info">
                  <p><FaEnvelope /> james@progressiondigitalark.org</p>
                  <p><FaPhone /> +263 987 456 789</p>
                </div>
                <button className="btn btn-outline team-contact-btn">Contact James</button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Contact;
