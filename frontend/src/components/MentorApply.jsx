import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { sendEmail } from "../services/emailService";

// Remove hardcoded email and use environment variable
const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;

const MentorApply = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    expertise: "",
    currentCompany: "",
    designation: "",
    linkedinProfile: "",
    resumeLink: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const applicationData = {
        ...formData,
        submittedAt: new Date().toISOString(),
        applicationId: `MENTOR-${Date.now()}`,
      };

      // Log the data being sent
      console.log("Submitting application data:", applicationData);

      const docRef = await addDoc(
        collection(db, "mentorApplications"),
        applicationData
      );
      console.log("Application submitted successfully with ID:", docRef.id);

      // Send email notification to admin
      if (ADMIN_EMAIL) {
        console.log("Sending admin notification email to:", ADMIN_EMAIL);
        const adminEmailResult = await sendEmail({
          to: ADMIN_EMAIL,
          type: "MENTOR_APPLICATION",
          data: {
            ...applicationData,
            submittedAt: new Date(applicationData.submittedAt).toLocaleString(),
          },
        });

        if (!adminEmailResult.success) {
          console.error(
            "Failed to send admin notification:",
            adminEmailResult.error
          );
        } else {
          console.log("Admin notification email sent successfully.");
        }
      } else {
        console.warn(
          "Admin notification email not sent: VITE_ADMIN_EMAIL not configured"
        );
      }

      setSubmitStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        experience: "",
        expertise: "",
        currentCompany: "",
        designation: "",
        linkedinProfile: "",
        resumeLink: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting application:", error);
      // Log more detailed error information
      if (error.code) {
        console.error("Firebase error code:", error.code);
      }
      if (error.message) {
        console.error("Error message:", error.message);
      }
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Apply as a <span className="text-primary">Mentor</span>
          </h1>
          <p className="text-lg text-gray-600">
            Join our team of expert mentors and help shape the future of tech
            professionals
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="Your email"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => {
                    // Only allow numbers and limit to 10 digits
                    const value = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10);
                    setFormData((prev) => ({
                      ...prev,
                      phone: value,
                    }));
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="10-digit mobile number"
                  pattern="[0-9]{10}"
                  maxLength="10"
                />
              </div>
              <div>
                <label
                  htmlFor="experience"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Years of Experience *
                </label>
                <input
                  type="number"
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="Years in industry"
                  min="0"
                />
              </div>
            </div>

            {/* Professional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="currentCompany"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Current Company *
                </label>
                <input
                  type="text"
                  id="currentCompany"
                  name="currentCompany"
                  required
                  value={formData.currentCompany}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="Company name"
                />
              </div>
              <div>
                <label
                  htmlFor="designation"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Current Designation *
                </label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  required
                  value={formData.designation}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="Job title"
                />
              </div>
            </div>

            {/* Expertise */}
            <div>
              <label
                htmlFor="expertise"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Areas of Expertise *
              </label>
              <input
                type="text"
                id="expertise"
                name="expertise"
                required
                value={formData.expertise}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                placeholder="Your technical skills"
              />
            </div>

            {/* Professional Profiles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="linkedinProfile"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  id="linkedinProfile"
                  name="linkedinProfile"
                  value={formData.linkedinProfile}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="LinkedIn URL"
                />
              </div>
              <div>
                <label
                  htmlFor="resumeLink"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Resume Link *
                </label>
                <input
                  type="url"
                  id="resumeLink"
                  name="resumeLink"
                  required
                  value={formData.resumeLink}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="Resume URL"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Why do you want to become a mentor? *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                placeholder="Share your motivation to mentor"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 bg-primary text-white font-bold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                  isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
                Your application has been submitted successfully! We'll review
                it and get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
                There was an error submitting your application. Please try again
                later.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default MentorApply;
