import React, { useState } from 'react';

const courses = [
  'Web Development',
  'Data Science',
  'Mobile App Development',
  'Cloud Computing',
];

function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    course: '',
    receiveUpdates: true,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newErrors.email = 'Enter a valid email.';
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required.';
    else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Enter a valid 10-digit mobile number.';
    if (!formData.course) newErrors.course = 'Please select a course.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      // Here you would send the form data to your backend
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center shadow-md max-w-md w-full">
          <svg className="mx-auto mb-4 w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <h2 className="text-2xl font-bold mb-2 text-green-700">Registration Successful!</h2>
          <p className="text-green-700 mb-4">Thank you for enrolling. Our team will contact you soon.</p>
          <button className="mt-2 px-6 py-2 bg-[#FF6B00] text-white rounded-lg font-semibold hover:bg-orange-600 transition">Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Enrollment Form</h2>
        <p className="text-gray-500">Fill in your details and our team will reach out to you for the next steps.</p>
      </div>
      <div className="space-y-5">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Full Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-orange-200 transition`}
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email <span className="text-red-500">*</span></label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-orange-200 transition`}
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Mobile Number <span className="text-red-500">*</span></label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${errors.mobile ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-orange-200 transition`}
            placeholder="10-digit mobile number"
            maxLength={10}
          />
          {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Select Course <span className="text-red-500">*</span></label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${errors.course ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-orange-200 transition`}
          >
            <option value="">Choose a course</option>
            {courses.map((course) => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
          {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="receiveUpdates"
            checked={formData.receiveUpdates}
            onChange={handleChange}
            className="h-4 w-4 text-orange-500 focus:ring-orange-400 border-gray-300 rounded"
            id="receiveUpdates"
          />
          <label htmlFor="receiveUpdates" className="ml-2 text-gray-600 text-sm">I want to receive updates about courses, webinars, and placement opportunities</label>
        </div>
        <button
          type="submit"
          className="w-full py-3 mt-2 bg-[#FF6B00] text-white font-bold rounded-lg shadow-lg hover:bg-orange-600 transition text-lg"
        >
          Register Now
        </button>
      </div>
    </form>
  );
}

export default QuoteForm; 