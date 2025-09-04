// pages/Donate.tsx
import React, { useState } from 'react';

const Donate: React.FC = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle donation submission
    alert(`Thank you for your ${donationType} donation of $${donationAmount}!`);
    setDonationAmount('');
  };

  return (
    <div className="page donate">
      <div className="container">
        <div className="page-header">
          <h1>Support Our Mission</h1>
          <p>Your donation helps bridge the digital divide in rural Zimbabwe</p>
        </div>

        <div className="donation-content">
          <div className="donation-campaigns">
            <h2>Current Campaigns</h2>
            
            <div className="campaign-card">
              <div className="campaign-image">
                <img src="https://placehold.co/800x400/1e40af/ffffff?text=ICT+Hubs+Expansion" alt="ICT Hubs Expansion" />
              </div>
              <div className="campaign-info">
                <h3>Expand ICT Hubs to 5 New Communities</h3>
                <p>Help us establish new digital centers in remote areas where youth have limited access to technology and digital education.</p>
                <div className="campaign-stats">
                  <div className="progress-bar">
                    <div className="progress" style={{width: '65%'}}></div>
                  </div>
                  <div className="stats">
                    <span>$13,000 raised of $20,000 goal</span>
                    <span>42 donors</span>
                  </div>
                </div>
                <button className="btn btn-primary" onClick={() => setDonationType('one-time')}>Support This Project</button>
              </div>
            </div>

            <div className="campaign-card">
              <div className="campaign-image">
                <img src="https://placehold.co/800x400/7e22ce/ffffff?text=Digital+Skills+Training" alt="Digital Skills Training" />
              </div>
              <div className="campaign-info">
                <h3>Digital Skills Training for 200 Youth</h3>
                <p>Sponsor comprehensive digital literacy and coding training for young people in rural communities.</p>
                <div className="campaign-stats">
                  <div className="progress-bar">
                    <div className="progress" style={{width: '40%'}}></div>
                  </div>
                  <div className="stats">
                    <span>$8,000 raised of $20,000 goal</span>
                    <span>28 donors</span>
                  </div>
                </div>
                <button className="btn btn-primary" onClick={() => setDonationType('one-time')}>Support This Project</button>
              </div>
            </div>

            <div className="campaign-card">
              <div className="campaign-image">
                <img src="https://placehold.co/800x400/0d9488/ffffff?text=Youth+Innovation+Grants" alt="Youth Innovation Grants" />
              </div>
              <div className="campaign-info">
                <h3>Youth Innovation Grant Fund</h3>
                <p>Provide seed funding for young innovators to develop tech solutions to community challenges.</p>
                <div className="campaign-stats">
                  <div className="progress-bar">
                    <div className="progress" style={{width: '25%'}}></div>
                  </div>
                  <div className="stats">
                    <span>$2,500 raised of $10,000 goal</span>
                    <span>15 donors</span>
                  </div>
                </div>
                <button className="btn btn-primary" onClick={() => setDonationType('one-time')}>Support This Project</button>
              </div>
            </div>
          </div>

          <div className="donation-form-section">
            <h2>Make a Donation</h2>
            <div className="donation-options">
              <div className="donation-type">
                <button 
                  className={donationType === 'one-time' ? 'active' : ''}
                  onClick={() => setDonationType('one-time')}
                >
                  One-Time Donation
                </button>
                <button 
                  className={donationType === 'monthly' ? 'active' : ''}
                  onClick={() => setDonationType('monthly')}
                >
                  Monthly Donation
                </button>
              </div>

              <form onSubmit={handleDonationSubmit} className="donation-form">
                <div className="amount-options">
                  <h3>Select Amount (USD)</h3>
                  <div className="amount-buttons">
                    <button type="button" onClick={() => setDonationAmount('25')}>$25</button>
                    <button type="button" onClick={() => setDonationAmount('50')}>$50</button>
                    <button type="button" onClick={() => setDonationAmount('100')}>$100</button>
                    <button type="button" onClick={() => setDonationAmount('250')}>$250</button>
                    <button type="button" onClick={() => setDonationAmount('500')}>$500</button>
                  </div>
                  <div className="custom-amount">
                    <label htmlFor="custom-amount">Or enter custom amount:</label>
                    <input
                      type="number"
                      id="custom-amount"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(e.target.value)}
                      placeholder="Enter amount"
                    />
                  </div>
                </div>

                <div className="donor-info">
                  <h3>Your Information</h3>
                  <div className="form-group">
                    <label htmlFor="donor-name">Full Name</label>
                    <input type="text" id="donor-name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="donor-email">Email Address</label>
                    <input type="email" id="donor-email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="donor-phone">Phone Number</label>
                    <input type="tel" id="donor-phone" />
                  </div>
                </div>

                <div className="payment-method">
                  <h3>Payment Method</h3>
                  <div className="payment-options">
                    <label>
                      <input type="radio" name="payment-method" value="card" defaultChecked />
                      Credit/Debit Card
                    </label>
                    <label>
                      <input type="radio" name="payment-method" value="paypal" />
                      PayPal
                    </label>
                    <label>
                      <input type="radio" name="payment-method" value="bank" />
                      Bank Transfer
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-donate">
                  {donationType === 'one-time' ? 'Donate Now' : 'Start Monthly Donation'}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="impact-statement">
          <h2>Your Donation Makes an Impact</h2>
          <div className="impact-grid">
            <div className="impact-item">
              <h3>$25</h3>
              <p>Provides internet access for one student for a month</p>
            </div>
            <div className="impact-item">
              <h3>$50</h3>
              <p>Sponsors digital literacy training for one youth</p>
            </div>
            <div className="impact-item">
              <h3>$100</h3>
              <p>Provides a tablet for educational use at our hubs</p>
            </div>
            <div className="impact-item">
              <h3>$500</h3>
              <p>Sponsors a coding workshop for 20 students</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;