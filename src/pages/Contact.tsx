// pages/Contact.tsx
import React, { useState } from 'react';

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
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="page contact">
      <div className="container">
        <div className="page-header">
          <h1>Contact Us</h1>
          <p>Get in touch with Progression Digital Ark</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>We'd love to hear from you. Whether you have questions about our programs, want to partner with us, or are interested in volunteering, reach out to us through any of the channels below.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <h3>Email</h3>
                <p>info@progressiondigitalark.org</p>
              </div>
              <div className="contact-item">
                <h3>Phone</h3>
                <p>+263 123 456 789</p>
              </div>
              <div className="contact-item">
                <h3>Address</h3>
                <p>123 Digital Street<br />Harare, Zimbabwe</p>
              </div>
              <div className="contact-item">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" aria-label="Facebook">Facebook</a>
                  <a href="#" aria-label="Twitter">Twitter</a>
                  <a href="#" aria-label="Instagram">Instagram</a>
                  <a href="#" aria-label="LinkedIn">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
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
    </div>
  );
};

export default Contact;