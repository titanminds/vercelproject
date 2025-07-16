"use client";

import React, { useState } from "react";
import Image from "next/image";

const AwardsSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleContactClick = () => {
    console.log("Contact button clicked");
    // Add your contact logic here
  };

  return (
    <div style={{
      textAlign: "center",
      padding: "3rem 1rem",
      backgroundColor: "#ffffff", // Changed to pure white
      maxWidth: "1200px",
      margin: "0 auto",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      position: "relative",
      overflow: "hidden",
      minHeight: "400px"
    }}>
      <h1 style={{
        fontSize: "2.5rem",
        color: "#2c3e50",
        marginBottom: "1.5rem",
        fontWeight: "600"
      }}>
        Rely on Award-Winning Support
      </h1>
      
      <p style={{
        fontSize: "1.2rem",
        color: "#7f8c8d",
        marginBottom: "2rem",
        lineHeight: "1.6",
        maxWidth: "800px",
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        Whenever you need us we're just a few seconds away, 24/7, in extensive language options.
      </p>
      
      <button 
        onClick={handleContactClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundColor: isHovered ? "#2980b9" : "#3498db",
          color: "white",
          border: "none",
          padding: "12px 30px",
          fontSize: "1.1rem",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          fontWeight: "500",
          letterSpacing: "0.5px",
          position: "relative",
          zIndex: 1
        }}
      >
        Contact Us
      </button>

      {/* Larger awards image positioned at bottom right */}
      <div style={{
        position: "absolute",
        bottom: "20px",
        right: "20px",
        width: "250px",
        height: "250px",
        zIndex: 0
      }}>
        <Image 
          src="/assets/images/awards.png" 
          alt="Awards" 
          width={250} 
          height={250}
          style={{
            objectFit: "contain"
          }}
        />
      </div>
    </div>
  );
};

export default AwardsSection;