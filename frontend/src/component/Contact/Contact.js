import React, { useState } from "react";
import './style.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    employees: "",
    question: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, company, phone } = formData;

    if (!name || !company || !phone) {
      alert("Please fill in all required fields: Name, Company Name, and Phone Number.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("  submitted.");
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          employees: "",
          question: "",
        });
      } else {
        alert(` Something went wrong: ${data.error || "Please try again."}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  return (
    <div className="contact-form">
      <h1 className="heading-contact">Contact US</h1>
      <p>
        Contact us about anything related to our company or services.<br />
        We'll do our best to get back to you as soon as possible.
      </p>
      <form onSubmit={handleSubmit}>
        <label>Your Name *</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Company Name *</label>
        <input type="text" name="company" value={formData.company} onChange={handleChange} required />

        <label>Phone Number *</label>
        <input type="tel" name="phone" placeholder="+91" value={formData.phone} onChange={handleChange} required />

        <label>Your Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />

        <label>No. of Employees</label>
        <input type="number" name="employees" value={formData.employees} onChange={handleChange} />

        <label>Your Question</label>
        <textarea name="question" rows="4" value={formData.question} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
