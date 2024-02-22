import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [emailError, setEmailError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    // Validate email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(formData.email.trim())) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Validate form before submission
    if (validateForm()) {
      alert('Form submitted:', formData);
    }
  };

  return (
    <section className="contact">
      <h2>Contact Me:</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleInputChange} 
            required 
          />
          {emailError && <div className="error">{emailError}</div>}
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p className="contact-line">If you prefer to not use the Contact Form- feel free to email me directly at sara.hizar@outlook.com</p>
    </section>
  );
}