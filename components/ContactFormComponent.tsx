
import React, { useState } from 'react';

const ContactFormComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        alert("Please fill in all fields.");
        return;
    }
    // Here you would typically send the data to a backend
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000); // Reset message after 5s
  };

  const inputClass = "w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-brand-primary focus:border-brand-primary transition-colors duration-200 shadow-sm";
  const labelClass = "block text-sm font-medium text-brand-text-secondary mb-1";

  if (isSubmitted) {
    return (
      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md shadow-md" role="alert">
        <p className="font-bold">Thank you!</p>
        <p>Your message has been sent successfully. We will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-xl border border-stone-200">
      <div>
        <label htmlFor="name" className={labelClass}>Full Name</label>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className={inputClass} required />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>Email Address</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={inputClass} required />
      </div>
      <div>
        <label htmlFor="subject" className={labelClass}>Subject</label>
        <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} className={inputClass} required />
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} className={inputClass} required />
      </div>
      <div>
        <button type="submit" className="w-full bg-brand-primary text-white font-semibold py-3 px-6 rounded-md hover:bg-brand-primary-dark transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactFormComponent;
