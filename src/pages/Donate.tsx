import React from 'react';

const Donate: React.FC = () => {

  return (
    <div className="page donate flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="container max-w-7xl mx-auto space-y-12">
        <div className="page-header text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">Support Our Mission</h1>
          <p className="text-lg text-gray-600 sm:text-xl md:text-2xl">Your donation helps bridge the digital divide in rural Zimbabwe</p>
        </div>

        <div className="donation-content grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="donation-campaigns space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 border-b-2 pb-2">Current Campaigns</h2>
            
            <div className="campaign-card bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <div className="campaign-image">
                <img src="/image/hub.png" alt="ICT Hubs Expansion" className="w-full h-auto" />
              </div>
              <div className="campaign-info p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800">Expand ICT Hubs to 5 New Communities</h3>
                <p className="text-gray-600">Help us establish new digital centers in remote areas where youth have limited access to technology and digital education.</p>
                <div className="campaign-stats space-y-2">
                  <div className="progress-bar w-full bg-gray-200 rounded-full h-2.5">
                    <div className="progress bg-blue-600 h-2.5 rounded-full" style={{width: '65%'}}></div>
                  </div>
                  <div className="stats flex justify-between text-sm text-gray-500">
                    <span>$13,000 raised of $20,000 goal</span>
                    <span>42 donors</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="campaign-card bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <div className="campaign-image">
                <img src="/image/intel.png" alt="Digital Skills Training" className="w-full h-auto" />
              </div>
              <div className="campaign-info p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800">Digital Skills Training for 200 Youth</h3>
                <p className="text-gray-600">Sponsor comprehensive digital literacy and coding training for young people in rural communities.</p>
                <div className="campaign-stats space-y-2">
                  <div className="progress-bar w-full bg-gray-200 rounded-full h-2.5">
                    <div className="progress bg-purple-600 h-2.5 rounded-full" style={{width: '40%'}}></div>
                  </div>
                  <div className="stats flex justify-between text-sm text-gray-500">
                    <span>$8,000 raised of $20,000 goal</span>
                    <span>28 donors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bank-info-section bg-white rounded-xl shadow-lg p-8 h-fit space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 border-b-2 pb-2">Donate via Bank Transfer</h2>
            <p className="text-gray-600">
              Your generous contribution is vital to our mission. For direct and secure donations, please use the banking details provided below. This method is our most preferred as it minimizes processing fees and ensures your full donation goes toward our initiatives.
            </p>
            
            <div className="bank-details-container bg-gray-50 rounded-lg p-6 border border-gray-200">
              <table className="bank-details-table w-full text-left">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4 text-sm text-gray-500 font-medium">Account Name:</td>
                    <td className="py-2 font-bold text-gray-800">Progression Digital Ark</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4 text-sm text-gray-500 font-medium">Bank Name:</td>
                    <td className="py-2 font-bold text-gray-800">ZB Bank Limited</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4 text-sm text-gray-500 font-medium">Branch:</td>
                    <td className="py-2 font-bold text-gray-800">Mutare Main</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4 text-sm text-gray-500 font-medium">Account Number:</td>
                    <td className="py-2 font-bold text-gray-800">4507-412952-080</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-sm text-gray-500 font-medium">SWIFT Code:</td>
                    <td className="py-2 font-bold text-gray-800">ZEBXZWHX</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Please include "Donation" and your name or a reference in the payment description to help us track your contribution.
            </p>
          </div>
        </div>

        <div className="impact-statement text-center pt-8">
          <h2 className="text-3xl font-bold text-gray-800 border-b-2 pb-2">Your Donation Makes an Impact</h2>
          <div className="impact-grid mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="impact-item bg-white rounded-lg shadow-md p-6 transform transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold text-blue-600">$25</h3>
              <p className="text-gray-600 mt-2">Provides internet access for one student for a month</p>
            </div>
            <div className="impact-item bg-white rounded-lg shadow-md p-6 transform transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold text-blue-600">$50</h3>
              <p className="text-gray-600 mt-2">Sponsors digital literacy training for one youth</p>
            </div>
            <div className="impact-item bg-white rounded-lg shadow-md p-6 transform transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold text-blue-600">$100</h3>
              <p className="text-gray-600 mt-2">Provides a tablet for educational use at our hubs</p>
            </div>
            <div className="impact-item bg-white rounded-lg shadow-md p-6 transform transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold text-blue-600">$500</h3>
              <p className="text-gray-600 mt-2">Sponsors a coding workshop for 20 students</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;