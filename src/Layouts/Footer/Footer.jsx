import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="company-info">
          <h2>Happy Feet</h2>
          <p>
            Happy Feet is a leading shoe store that offers a wide selection of high-quality shoes
            for both men and women. We are dedicated to providing our customers with comfortable and
            stylish footwear for every occasion.
          </p>
        </div>

        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>
            <strong>Address:</strong> 123 Shoe Street, Happy City, ABC 12345
          </p>
          <p>
            <strong>Email:</strong> info@happyfeet.com
          </p>
          <p>
            <strong>Phone:</strong> (123) 456-7890
          </p>
        </div>

        <div className="opening-hours">
          <h3>Opening Hours</h3>
          <p>
            <strong>Monday to Friday:</strong> 9:00 AM - 6:00 PM
          </p>
          <p>
            <strong>Saturday:</strong> 9:00 AM - 4:00 PM
          </p>
          <p>
            <strong>Sunday:</strong> Closed
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 Happy Feet. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
