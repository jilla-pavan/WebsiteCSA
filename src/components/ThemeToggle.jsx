import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a preferred theme already stored
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  const toggleContainerStyle = {
    display: 'inline-block',
    position: 'relative',
    width: '50px',
    height: '24px',
    backgroundColor: isDarkMode ? '#3366ff' : '#ccc',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const toggleCircleStyle = {
    position: 'absolute',
    left: isDarkMode ? '26px' : '2px',
    top: '2px',
    width: '20px',
    height: '20px',
    backgroundColor: '#fff',
    borderRadius: '50%',
    transition: 'left 0.3s ease',
  };

  const sunIconStyle = {
    display: isDarkMode ? 'none' : 'block',
    position: 'absolute',
    left: '4px',
    top: '4px',
    color: 'orange',
    fontSize: '12px'
  };

  const moonIconStyle = {
    display: isDarkMode ? 'block' : 'none',
    position: 'absolute',
    right: '4px',
    top: '4px',
    color: 'white',
    fontSize: '12px'
  };

  return (
    <div 
      style={toggleContainerStyle}
      onClick={toggleTheme}
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div style={toggleCircleStyle}></div>
      <span style={sunIconStyle}>☀</span>
      <span style={moonIconStyle}>☾</span>
    </div>
  );
};

export default ThemeToggle; 