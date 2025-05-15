import React, { useEffect, useRef } from "react";

const FloatingWhatsAppButton = () => {
  const btnRef = useRef(null);

  useEffect(() => {
    // Add entrance animation on mount
    if (btnRef.current) {
      btnRef.current.classList.add("animate-fade-in-up");
      setTimeout(() => {
        btnRef.current.classList.remove("animate-fade-in-up");
      }, 700);
    }
  }, []);

  return (
    <>
      {/* Custom animation keyframes */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px) scale(0.8); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }
        @keyframes pulse-shadow {
          0%, 100% { box-shadow: 0 4px 24px 0 rgba(37, 211, 102, 0.25); }
          50% { box-shadow: 0 8px 32px 0 rgba(37, 211, 102, 0.45); }
        }
        .hover\:animate-pulse-shadow:hover {
          animation: pulse-shadow 1.2s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          20% { transform: translateY(-6px); }
          40% { transform: translateY(0); }
          60% { transform: translateY(-3px); }
          80% { transform: translateY(0); }
        }
        .animate-bounce-smooth {
          animation: bounce 2s infinite;
        }
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.7; }
          80%, 100% { transform: scale(1.7); opacity: 0; }
        }
        .ping-effect {
          position: absolute;
          width: 64px;
          height: 64px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 9999px;
          background: #25D366;
          opacity: 0.5;
          z-index: 0;
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .whatsapp-label {
          opacity: 0;
          pointer-events: none;
          position: absolute;
          bottom: 110%;
          left: 50%;
          transform: translateX(-50%) scale(0.95);
          background: #25D366;
          color: #fff;
          padding: 0.3rem 0.8rem;
          border-radius: 0.5rem;
          font-size: 0.95rem;
          font-weight: 500;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(37, 211, 102, 0.15);
          transition: opacity 0.2s, transform 0.2s;
        }
        .whatsapp-btn-group:hover .whatsapp-label {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(-50%) scale(1);
        }
      `}</style>
      <div className="whatsapp-btn-group fixed bottom-6 right-6 z-50 flex flex-col items-center">
        <span className="whatsapp-label">Chat with us!</span>
        <a
          ref={btnRef}
          href="https://wa.me/916301046346"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366]/40 hover:scale-105 hover:animate-pulse-shadow animate-bounce-smooth"
          aria-label="Chat with us on WhatsApp"
        >
          <span className="ping-effect" aria-hidden="true"></span>
          <img
            src="/assets/whatsApp-Icon.png"
            alt="WhatsApp"
            className="w-7 h-7 object-contain relative z-10"
            draggable="false"
          />
        </a>
      </div>
    </>
  );
};

export default FloatingWhatsAppButton;
