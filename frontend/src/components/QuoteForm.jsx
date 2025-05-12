import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { sendEmail } from '../services/emailService';

// Remove hardcoded email and use environment variable
const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
console.log('Admin email from env:', ADMIN_EMAIL);

// Validate admin email configuration
if (!ADMIN_EMAIL) {
  console.error('VITE_ADMIN_EMAIL environment variable is not set. Please check your .env file.');
}

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
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Create submission data with timestamp
        const submissionData = {
          ...formData,
          timestamp: new Date(),
          status: 'new',
          submittedAt: new Date().toISOString(),
        };
        
        // Save to Firebase and get the document reference
        const docRef = await addDoc(collection(db, 'enrollments'), submissionData);
        
        // Add document ID to the data
        const enrollmentData = {
          ...submissionData,
          enrollmentId: docRef.id
        };

        // Send confirmation email to user
        const userEmailResult = await sendEmail({
          to: formData.email,
          type: 'USER_CONFIRMATION',
          data: {
            name: formData.name,
            course: formData.course
          }
        });

        if (!userEmailResult.success) {
          throw new Error(`Failed to send confirmation email: ${userEmailResult.error}`);
        }

        // Send detailed notification to admin only if admin email is configured
        if (ADMIN_EMAIL) {
          const adminEmailResult = await sendEmail({
            to: ADMIN_EMAIL,
            type: 'ADMIN_NOTIFICATION',
            data: {
              ...enrollmentData,
              submittedAt: new Date(enrollmentData.submittedAt).toLocaleString(),
              timestamp: new Date(enrollmentData.timestamp).toLocaleString()
            }
          });

          if (!adminEmailResult.success) {
            console.error('Failed to send admin notification:', adminEmailResult.error);
            // Don't throw error here as user registration was successful
          }
        } else {
          console.warn('Admin notification email not sent: VITE_ADMIN_EMAIL not configured');
        }

        setSubmitted(true);
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your form. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-2xl p-6 text-center shadow-lg max-w-md w-full">
          <div className="bg-orange-100/50 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
            <svg className="w-6 h-6 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-black mb-2 text-gray-900 tracking-tight leading-tight">Registration Successful!</h2>
          <p className="text-gray-600 text-sm mb-4 font-medium">Thank you for enrolling. Our team will contact you soon.</p>
          <button 
            onClick={() => window.location.href = '/'} 
            className="px-6 py-2 bg-[#FF6B00] text-white rounded-lg font-medium hover:bg-orange-600 transition-all duration-300 text-sm shadow hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto px-4 py-6">
      <div className="mb-6 text-center">
        <h2 className="text-[2.5rem] font-black text-gray-900 mb-3 tracking-tight leading-tight">
          Enrollment <span className="text-[#FF6B00]">Form</span>
        </h2>
        <p className="text-gray-600 text-sm font-semibold">Fill in your details and our team will reach out to you</p>
      </div>
      <div className="space-y-3">
        <div className="group">
          <label className="block text-gray-800 text-[0.925rem] font-bold mb-1.5 uppercase tracking-wide">
            Full Name <span className="text-[#FF6B00]">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3.5 py-2 rounded-lg border ${errors.name ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-1 focus:ring-[#FF6B00] focus:border-[#FF6B00] transition-all duration-200 text-sm bg-white group-hover:border-gray-300`}
            placeholder="Enter your full name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div className="group">
          <label className="block text-gray-800 text-[0.925rem] font-bold mb-1.5 uppercase tracking-wide">
            Email <span className="text-[#FF6B00]">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3.5 py-2 rounded-lg border ${errors.email ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-1 focus:ring-[#FF6B00] focus:border-[#FF6B00] transition-all duration-200 text-sm bg-white group-hover:border-gray-300`}
            placeholder="Enter your email address"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div className="group">
          <label className="block text-gray-800 text-[0.925rem] font-bold mb-1.5 uppercase tracking-wide">
            Mobile Number <span className="text-[#FF6B00]">*</span>
          </label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className={`w-full px-3.5 py-2 rounded-lg border ${errors.mobile ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-1 focus:ring-[#FF6B00] focus:border-[#FF6B00] transition-all duration-200 text-sm bg-white group-hover:border-gray-300`}
            placeholder="Enter your 10-digit mobile number"
            maxLength={10}
          />
          {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
        </div>
        <div className="group">
          <label className="block text-gray-800 text-[0.925rem] font-bold mb-1.5 uppercase tracking-wide">
            Select Course <span className="text-[#FF6B00]">*</span>
          </label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className={`w-full px-3.5 py-2 rounded-lg border ${errors.course ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-1 focus:ring-[#FF6B00] focus:border-[#FF6B00] transition-all duration-200 text-sm bg-white group-hover:border-gray-300 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M6%208l4%204%204-4%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px_20px] bg-[right_0.5rem_center] bg-no-repeat pr-8`}
          >
            <option value="">Choose a course</option>
            {courses.map((course) => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
          {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course}</p>}
        </div>
        <div className="flex items-center bg-gray-50/70 p-2.5 rounded-lg border border-gray-100 hover:bg-gray-50/90 transition-colors duration-200">
          <input
            type="checkbox"
            name="receiveUpdates"
            checked={formData.receiveUpdates}
            onChange={handleChange}
            className="h-4 w-4 text-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] border-gray-300 rounded"
            id="receiveUpdates"
          />
          <label htmlFor="receiveUpdates" className="ml-2 text-gray-600 text-xs select-none cursor-pointer">
            I want to receive updates about courses, webinars, and placement opportunities
          </label>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3.5 mt-4 bg-gradient-to-r from-[#FF6B00] to-[#FF8533] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-[1.05rem] relative overflow-hidden group ${
            isSubmitting 
              ? 'opacity-75 cursor-not-allowed' 
              : 'hover:scale-[1.02] active:scale-[0.99] hover:from-[#FF8533] hover:to-[#FF6B00]'
          }`}
        >
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
          <span className="relative inline-flex items-center">
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : (
              <>
                Register Now
                <svg className="w-5 h-5 ml-2 -mr-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </>
            )}
          </span>
        </button>
      </div>
    </form>
  );
}

export default QuoteForm; 