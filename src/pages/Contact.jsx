import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, role, message } = formData;
    if (!name || !email || !role || !message) {
      toast.error("Please fill in all fields!");
      return;
    }

    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", role: "", message: "" });
  };

  return (
    <section className="py-20 px-6 bg-gray-50">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
        <p className="text-gray-600 mt-4">
          Have questions or want to pitch your idea? We'd love to hear from you.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-md">
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select your role</option>
              <option value="Startup Founder">Startup Founder</option>
              <option value="Investor">Investor</option>
              
            </select>
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Type your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition font-semibold w-full"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center text-gray-700 space-y-6">
          <div className="flex items-start gap-4">
            <MapPin className="text-indigo-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Our Office</h3>
              <p>Bangalore, India</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="text-indigo-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p>hello@investnest.in</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="text-indigo-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Contact;
      