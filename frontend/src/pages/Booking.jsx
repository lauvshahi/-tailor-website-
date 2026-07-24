
import { useState } from "react";
export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    service: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Booking submitted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8">
        
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Book Your Tailor Service
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Date */}
          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Service */}
          <select
            name="service"
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Service</option>
            <option value="shirt">Shirt Stitching</option>
            <option value="pant">Pant Stitching</option>
            <option value="suit">Suit Making</option>
            <option value="alteration">Alteration</option>
          </select>

          {/* Button */}
          <button
            type="submit disabled={loading}"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Confirm Booking
          </button>
          
        </form>
      </div>
    </div>
  );
}