// src/components/Footer.jsx
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for actual email sending logic (e.g., using email API or backend).
    alert("Email sent successfully!");
    setEmail("");
    setMessage("");
  };

  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg">Email: example@example.com</p>
            <p className="text-lg">Phone: (123) 456-7890</p>
            <p className="text-lg">Address: 123, Blog Street, City</p>
          </div>

          {/* Send Email Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-lg">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-md border border-gray-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={handleMessageChange}
                  required
                  placeholder="Enter your message"
                  rows="4"
                  className="w-full p-3 rounded-md border border-gray-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
