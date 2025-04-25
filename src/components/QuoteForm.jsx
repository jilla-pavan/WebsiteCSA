import React, { useState } from 'react';

function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    course: '',
    receiveUpdates: true
  });

  const [focusedInput, setFocusedInput] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData, 'Selected course:', selectedCourse);
    // Update form data with the selected course
    setFormData({
      ...formData,
      course: selectedCourse
    });
    setFormSubmitted(true);
    // Add form submission logic here
  };

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  // Updated styles for an educational academy
  const sectionStyle = { 
    padding: '2rem 0',
    maxWidth: '1200px',
    margin: '0 auto'
  };
  
  const titleStyle = { 
    fontSize: '1.5rem', 
    fontWeight: '600', 
    marginBottom: '1.5rem',
    paddingLeft: '1rem',
    color: '#3366ff'
  };
  
  const containerStyle = { 
    display: 'flex', 
    flexDirection: 'row', 
    gap: '5rem',
    padding: '0 1rem'
  };
  
  const gridStyle = { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(2, 1fr)', 
    gap: '1rem',
    width: '45%'
  };
  
  const courseLogoStyle = { 
    fontSize: '1.25rem', 
    fontWeight: '500',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem'
  };
  
  const formContainerStyle = {
    width: '55%'
  };
  
  const formHeaderStyle = { marginBottom: '1.5rem' };
  
  const formHeaderTitleStyle = { 
    fontSize: '1.3rem', 
    marginBottom: '0.5rem',
    fontWeight: '500',
    color: '#333'
  };
  
  const formGroupStyle = { marginBottom: '1.25rem' };
  
  const labelStyle = { 
    display: 'block', 
    marginBottom: '0.5rem', 
    fontSize: '0.9rem',
    transition: 'color 0.3s ease'
  };
  
  const checkboxContainerStyle = { 
    display: 'flex', 
    alignItems: 'flex-start', 
    gap: '0.5rem',
    marginBottom: '1.5rem'
  };
  
  const buttonStyle = {
    width: '100%',
    padding: '0.85rem',
    backgroundColor: '#3366ff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    height: '50px',
    transition: 'background-color 0.3s ease, transform 0.1s ease'
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#2952cc',
  };

  const courseCardStyle = (course) => ({
    border: selectedCourse === course ? '2px solid #3366ff' : '1px solid #ccc',
    borderRadius: '0.5rem',
    minHeight: '8rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    transform: selectedCourse === course ? 'scale(1.03)' : 'scale(1)',
    boxShadow: selectedCourse === course ? '0 4px 8px rgba(0,0,0,0.1)' : 'none',
    padding: '1rem'
  });

  const inputStyle = (inputName) => ({
    width: '100%',
    padding: '0.75rem',
    border: focusedInput === inputName ? '2px solid #3366ff' : '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
    height: '50px',
    transition: 'all 0.3s ease',
    outline: 'none',
    boxShadow: focusedInput === inputName ? '0 0 5px rgba(51,102,255,0.3)' : 'none'
  });

  const successMessageStyle = {
    padding: '1rem',
    backgroundColor: '#e6f0ff',
    border: '1px solid #b3d1ff',
    borderRadius: '4px',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center'
  };

  const checkIconStyle = {
    fontSize: '1.5rem',
    color: '#3366ff',
    marginRight: '0.5rem'
  };

  const courseIconStyle = {
    fontSize: '2rem',
    marginBottom: '0.5rem'
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Course Registration</h2>
      
      <div style={containerStyle}>
        <div style={gridStyle}>
          <div 
            style={courseCardStyle('Web Development')} 
            className="company-card"
            onClick={() => handleCourseSelect('Web Development')}
          >
            <div style={courseLogoStyle}>
              <span style={courseIconStyle}>💻</span>
              <div>Web Development</div>
            </div>
          </div>
          <div 
            style={courseCardStyle('Data Science')} 
            className="company-card"
            onClick={() => handleCourseSelect('Data Science')}
          >
            <div style={courseLogoStyle}>
              <span style={courseIconStyle}>📊</span>
              <div>Data Science</div>
            </div>
          </div>
          <div 
            style={courseCardStyle('Mobile App Dev')} 
            className="company-card"
            onClick={() => handleCourseSelect('Mobile App Dev')}
          >
            <div style={courseLogoStyle}>
              <span style={courseIconStyle}>📱</span>
              <div>Mobile App Dev</div>
            </div>
          </div>
          <div 
            style={courseCardStyle('Cloud Computing')} 
            className="company-card"
            onClick={() => handleCourseSelect('Cloud Computing')}
          >
            <div style={courseLogoStyle}>
              <span style={courseIconStyle}>☁️</span>
              <div>Cloud Computing</div>
            </div>
          </div>
        </div>
        
        <div style={formContainerStyle}>
          {formSubmitted ? (
            <div style={successMessageStyle}>
              <span style={checkIconStyle}>✓</span>
              <span>Thank you for your interest in our {selectedCourse} course! Our team will contact you soon with more details.</span>
            </div>
          ) : (
            <>
              <div style={formHeaderStyle}>
                <h3 style={formHeaderTitleStyle}>Start your tech career journey today!</h3>
                <p style={{color: '#666', margin: 0}}>Select a course and register for a free counseling session</p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div style={formGroupStyle}>
                  <label 
                    style={{
                      ...labelStyle, 
                      color: focusedInput === 'name' ? '#3366ff' : '#333'
                    }} 
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    style={inputStyle('name')}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div style={formGroupStyle}>
                  <label 
                    style={{
                      ...labelStyle, 
                      color: focusedInput === 'email' ? '#3366ff' : '#333'
                    }} 
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    style={inputStyle('email')}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div style={formGroupStyle}>
                  <label 
                    style={{
                      ...labelStyle, 
                      color: focusedInput === 'mobile' ? '#3366ff' : '#333'
                    }} 
                    htmlFor="mobile"
                  >
                    Mobile Number
                  </label>
                  <input
                    style={inputStyle('mobile')}
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('mobile')}
                    onBlur={handleBlur}
                    required
                    placeholder="Enter your mobile number"
                  />
                </div>
                
                <div style={checkboxContainerStyle}>
                  <input
                    type="checkbox"
                    id="receiveUpdates"
                    name="receiveUpdates"
                    checked={formData.receiveUpdates}
                    onChange={handleInputChange}
                  />
                  <label 
                    htmlFor="receiveUpdates" 
                    style={{fontSize: '0.85rem', lineHeight: '1.3'}}
                  >
                    I want to receive updates about courses, webinars and placement opportunities
                  </label>
                </div>
                
                <button 
                  style={buttonStyle}
                  type="submit" 
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                  onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
                  onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  disabled={!selectedCourse}
                >
                  Register Now
                </button>
                
                {!selectedCourse && (
                  <p style={{color: '#ff4d4d', fontSize: '0.9rem', marginTop: '0.5rem', textAlign: 'center'}}>
                    Please select a course to continue
                  </p>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default QuoteForm; 