import { useState } from "react";
import axios from "axios";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    service: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("api/bookings", form);
      alert("Booking sent successfully!");
      setForm({
        name: "",
        phone: "",
        date: "",
        service: ""
      });
    } catch (error) {
      console.log(error);
      alert("Error sending booking");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-5 py-16">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[5px] text-gray-500">
            Unique Tailoring Center
          </p>
          <h2 className="text-4xl font-semibold text-[rgb(95,5,5)] mt-3">
            Book Your Appointment
          </h2>
          <p className="text-gray-500 mt-3">
            Experience premium custom tailoring.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                placeholder="Enter your name"
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 outline-none transition duration-300 focus:bg-white focus:border-[rgb(95,5,5)] focus:ring-2 focus:ring-[rgb(95,5,5)]/20"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                placeholder="98XXXXXXXX"
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 outline-none transition duration-300 focus:bg-white focus:border-[rgb(95,5,5)] focus:ring-2 focus:ring-[rgb(95,5,5)]/20"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 outline-none transition duration-300 focus:bg-white focus:border-[rgb(95,5,5)] focus:ring-2 focus:ring-[rgb(95,5,5)]/20"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Required
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 outline-none transition duration-300 focus:bg-white focus:border-[rgb(95,5,5)] focus:ring-2 focus:ring-[rgb(95,5,5)]/20"
              >
                <option value="">Select Service</option>
                <option value="coat">Coat Pant</option>
                <option value="suit">Wedding Suit</option>
                <option value="shirt">Custom Shirt</option>
                <option value="uniform">Uniform</option>
              </select>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[rgb(95,5,5)] text-white font-semibold tracking-wide transition duration-300 hover:bg-[rgb(120,10,10)] hover:scale-[1.01] active:scale-95 shadow-lg mt-4"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}