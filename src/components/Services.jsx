import React, { useState } from 'react';

function Services() {
  const [isPopupVisible, setPopupVisible] = useState(false);  // State for controlling popup visibility
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the form submission (like sending data to a server)
    
    // Show the popup after form submission
    setPopupVisible(true);
    
    // Optionally reset the form after submission
    setFormData({ name: '', email: '', message: '' });
    
    // Hide the popup after 3 seconds
    setTimeout(() => setPopupVisible(false), 3000);
  };

  return (
    <div>
      <header className="header">
        <nav>
          <ul>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Us</a></li>
            <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about" className="section about">
        <h1 className="section-title">About Us</h1>
        <p>We provide high-end services/products designed for excellence. Our mission is to offer innovative solutions for businesses of all sizes.</p>
      </section>

      <section id="features" className="section features">
        <h1 className="section-title">Product/Service Features</h1>
        <div className="features-list">
          <div className="feature-item">
            <h3>High Quality</h3>
            <p>Our products are made from the finest materials, ensuring exceptional performance and longevity.</p>
          </div>
          <div className="feature-item">
            <h3>Efficient Performance</h3>
            <p>Our services and products are optimized for high performance, ensuring smooth operations for your business.</p>
          </div>
          <div className="feature-item">
            <h3>Innovative Design</h3>
            <p>We believe in innovation and continually improve our products to meet the changing demands of the market.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h1 className="section-title">Contact Us</h1>
        <form id="contact-form" onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          ></textarea>
          
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Message Received Popup */}
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>Message Received!</h2>
            <p>Thank you for reaching out. We'll get back to you soon.</p>
          </div>
        </div>
      )}

      <footer className="footer">
        <p>&copy; 2024 Product/Service Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Services;
