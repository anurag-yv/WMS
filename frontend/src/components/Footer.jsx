import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>EcoWaste</h3>
          <p>Transforming waste management through technology and community engagement for a sustainable future.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/tracker">Waste Tracker</a></li>
            <li><a href="/tips">Recycling Tips</a></li>
            <li><a href="/education">Educational Resources</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>📧 info@ecowaste.com</p>
          <p>📞 +1 (555) 123-ECOW</p>
          <p>📍 123 Green Street, Eco City</p>
        </div>
        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 EcoWaste. All rights reserved. | Building a Cleaner Tomorrow</p>
      </div>
    </footer>
  );
};

export default Footer;