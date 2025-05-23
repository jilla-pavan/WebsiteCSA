import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const EnrollmentModalForm = ({ isOpen, onClose, onSuccess, source, courseTitle }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFormError("");
  };

  // Validate and submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      setFormError("Please fill in all fields.");
      return;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    // Basic phone number validation (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(form.phone)) {
        setFormError("Please enter a valid 10-digit phone number.");
        return;
    }

    setIsSubmitting(true);
    try {
      // Add to Firestore 'enrollments' collection
      const submissionData = {
        name: form.name,
        email: form.email,
        mobile: form.phone,
        timestamp: new Date(),
        status: "new",
        source: source || "modal_form", // Use provided source or default
      };

      // Add course title if provided
      if (courseTitle) {
        submissionData.course = courseTitle;
      }

      await addDoc(collection(db, "enrollments"), submissionData);

      // Reset form and call success callback
      setForm({ name: "", email: "", phone: "" });
      setFormError("");
      onClose(); // Close modal on success
      if (onSuccess) {
        onSuccess();
      }

    } catch (error) {
      console.error("Error submitting modal form:", error);
      setFormError(
        "There was an error submitting your registration. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h3 className="text-xl font-bold mb-4 text-center text-primary">
          {source === "TopPlacementsBrochure" ? "Enroll to Download Brochure" : courseTitle ? `Enroll for ${courseTitle} Syllabus` : "Enroll Now"}
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={isSubmitting}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={isSubmitting}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={isSubmitting}
          />
          {formError && (
            <div className="text-red-500 text-sm text-center">{formError}</div>
          )}
          <button
            type="submit"
            className="bg-primary text-white font-bold py-2 rounded-lg hover:bg-primary/90 transition-all disabled:opacity-60"
            disabled={isSubmitting}
          >
             {isSubmitting ? "Registering..." : source === "TopPlacementsBrochure" ? "Register & Download" : "Enroll & Download"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentModalForm; 