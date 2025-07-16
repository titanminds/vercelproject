"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const StatsSection = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div 
      ref={sectionRef}
      style={{
        backgroundColor: "#471b1b",
        color: "white",
        padding: "4rem 1rem",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden"
      }}
    >
      {/* First Section - Proven Results */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        style={{
          maxWidth: "1200px",
          margin: "0 auto 3rem auto",
          textAlign: "center"
        }}
      >
        <motion.h2 
          variants={itemVariants}
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            color: "white",
            display: "inline-block"
          }}
        >
          Our Results Are Proven in Numbers
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          style={{
            fontSize: "1.1rem",
            marginBottom: "3rem",
            lineHeight: "1.6",
            maxWidth: "800px",
            marginLeft: "auto",
            marginRight: "auto",
            color: "white"
          }}
        >
          Nobody does more to provide you with what you need to maximise your trading potential.
        </motion.p>
        
        <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "3rem"
        }}>
          {[
            { value: "10.3 Billion", description: "trades have been executed on XM Platforms." },
            { value: "Zero", description: "rejections or requests on trades." },
            { value: "92.9%", description: "of our withdrawals are automatically approved." }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              variants={statVariants}
              style={{ 
                minWidth: "200px",
                padding: "1.5rem",
                backgroundColor: "#5d2a2a",
                borderRadius: "12px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "white"
              }}
              whileHover={{ 
                y: -5,
                backgroundColor: "#6b3333",
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <div style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
                color: "white"
              }}>
                {item.value}
              </div>
              <div style={{ fontSize: "1rem", color: "white" }}>
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Second Section - Features */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          padding: "4rem 0",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          color: "white"
        }}
      >
        <motion.h2 
          variants={itemVariants}
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "2rem",
            color: "white",
            display: "inline-block"
          }}
        >
          Why Trade With Us
        </motion.h2>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          marginBottom: "3rem"
        }}>
          {[
            { title: "Tight Spreads", text: "Trade with spreads as low as 0.8 pips." },
            { title: "No hidden costs", text: "Pay no swap fees and zero commission." },
            { title: "Superior Execution", text: "Enjoy fair prices with no requests or rejections." },
            { title: "Instant Withdrawals", text: "Get your funds easily and pay no fees." }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              style={{ 
                padding: "2rem",
                backgroundColor: "#5d2a2a",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "white"
              }}
              whileHover={{
                backgroundColor: "#6b3333",
                transform: "translateY(-5px)",
                transition: { duration: 0.3 }
              }}
            >
              <div style={{
                fontSize: "2rem",
                marginBottom: "1rem",
                color: "white"
              }}>
                {index === 0 && "📉"}
                {index === 1 && "💰"}
                {index === 2 && "⚡"}
                {index === 3 && "💸"}
              </div>
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "white"
              }}>
                {feature.title}
              </h3>
              <p style={{ lineHeight: "1.6", color: "white" }}>
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.button
          variants={itemVariants}
          style={{
            backgroundColor: "#ff6b00",
            color: "white",
            border: "none",
            padding: "18px 45px",
            fontSize: "1.1rem",
            fontWeight: "bold",
            borderRadius: "8px",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(255, 107, 0, 0.4)",
            position: "relative",
            overflow: "hidden"
          }}
          whileHover={{
            backgroundColor: "#ff8a00",
            transform: "translateY(-3px)",
            boxShadow: "0 6px 20px rgba(255, 107, 0, 0.6)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span style={{ position: "relative", zIndex: 2, color: "white" }}>
            Start Trading Today
          </span>
          <motion.span
            style={{
              position: "absolute",
              top: "-50%",
              left: "-50%",
              width: "200%",
              height: "200%",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
              transform: "rotate(45deg)"
            }}
            initial={{ left: "-100%" }}
            whileHover={{ left: "100%", transition: { duration: 0.6 } }}
          />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default StatsSection;