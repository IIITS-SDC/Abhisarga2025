// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const ProshowsComingSoon = () => {
  const [dots, setDots] = useState("...");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const mediaStyles = `
      @media (max-width: 1200px) {
        .proshows-title { font-size: 4rem !important; }
        .abhisarga-title { font-size: 5rem !important; }
        .abhisarga-year { font-size: 3rem !important; }
        .proshows-coming-soon { font-size: 2.2rem !important; }
        .proshows-stage { width: 250px !important; }
        .proshows-number { font-size: 2.2rem !important; }
      }
      @media (max-width: 768px) {
        .proshows-title { 
          font-size: 3rem !important;
          letter-spacing: 0.3rem !important;
        }
        .abhisarga-title { 
          font-size: 4rem !important;
          letter-spacing: 0.3rem !important;
        }
        .abhisarga-year { font-size: 2.5rem !important; }
        .proshows-coming-soon { 
          font-size: 1.8rem !important;
          letter-spacing: 0.2rem !important;
        }
        .proshows-stage { width: 200px !important; }
        .proshows-number { font-size: 2rem !important; }
        .proshows-content { padding: 1rem !important; }
      }
      @media (max-width: 480px) {
        .proshows-title { 
          font-size: 2.5rem !important;
          letter-spacing: 0.2rem !important;
        }
        .abhisarga-title { 
          font-size: 3rem !important;
          letter-spacing: 0.2rem !important;
        }
        .abhisarga-year { font-size: 2rem !important; }
        .proshows-coming-soon { 
          font-size: 1.5rem !important;
          letter-spacing: 0.1rem !important;
          margin: 1rem 0 !important;
        }
        .proshows-stage { 
          width: 180px !important;
          margin: 2rem auto !important;
        }
        .proshows-number { font-size: 1.8rem !important; }
        .proshows-label { font-size: 0.8rem !important; }
        .proshows-content { padding: 0.8rem !important; }
      }
      @media (max-height: 600px) {
        .proshows-stage { 
          height: 80px !important;
          margin: 1.5rem auto !important;
        }
        .proshows-content { 
          padding-top: 0.5rem !important;
          padding-bottom: 0.5rem !important;
        }
        .abhisarga-container {
          margin: 1rem auto !important;
        }
      }
      @media (orientation: landscape) and (max-height: 500px) {
        .proshows-stage { display: none !important; }
        .proshows-content { 
          padding-top: 0.3rem !important;
          padding-bottom: 0.3rem !important;
        }
        .abhisarga-container {
          margin: 0.5rem auto !important;
        }
      }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.textContent = mediaStyles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div style={styles.proshowsContainer}>
      <div style={styles.stars}></div>
      <div style={{ ...styles.content }} className="proshows-content">
        <h1 style={styles.title} className="proshows-title">
          PROSHOWS
        </h1>
        <div style={styles.abhisargaContainer} className="abhisarga-container">
          {/* <div style={styles.abhisargaLogo} src="public\favicon.png"></div> */}
          <h2 style={styles.abhisargaTitle} className="abhisarga-title">
            ABHISARGA
          </h2>
          <div style={styles.abhisargaYear} className="abhisarga-year">
            2025
          </div>
        </div>
        <div style={styles.comingSoon} className="proshows-coming-soon">
          <span>COMING SOON{dots}</span>
        </div>
        <div style={styles.stage} className="proshows-stage">
          <div style={styles.spotlightLeft}></div>
          <div style={styles.spotlightRight}></div>
          <div style={styles.stagePlatform}></div>
        </div>
      </div>
    </div>
  );
};

const keyframes = {
  glow: `
    @keyframes glow {
      0% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.5); }
      100% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.8),
                          0 0 30px rgba(255, 255, 255, 0.6),
                          0 0 40px rgba(255, 255, 255, 0.4); }
    }
  `,
  pulse: `
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
  `,
  twinkle: `
    @keyframes twinkle {
      0% { opacity: 0.3; }
      100% { opacity: 0.7; }
    }
  `,
  spotlightLeft: `
    @keyframes spotlightLeft {
      0% { transform: rotate(-30deg); }
      100% { transform: rotate(-40deg); }
    }
  `,
  spotlightRight: `
    @keyframes spotlightRight {
      0% { transform: rotate(30deg); }
      100% { transform: rotate(40deg); }
    }
  `,
  float: `
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
      100% { transform: translateY(0px); }
    }
  `,
};

const styleSheet = document.createElement("style");
styleSheet.textContent = Object.values(keyframes).join("\n");
document.head.appendChild(styleSheet);

const styles = {
  proshowsContainer: {
    minHeight: "100vh",
    width: "100%",
    background: "#000000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  stars: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage: "radial-gradient(white 1px, transparent 1px)",
    backgroundSize: "50px 50px",
    animation: "twinkle 1.5s infinite alternate",
  },
  content: {
    textAlign: "center",
    zIndex: 1,
    padding: "2rem",
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
  },
  title: {
    fontSize: "5rem",
    fontWeight: 800,
    color: "#fff",
    textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
    marginBottom: "1rem",
    letterSpacing: "0.5rem",
    animation: "glow 2s infinite alternate",
    lineHeight: "1.2",
  },
  abhisargaContainer: {
    margin: "2rem auto",
    padding: "1rem",
    animation: "float 6s ease-in-out infinite",
  },
  abhisargaLogo: {
    width: "120px",
    height: "120px",
    margin: "0 auto 1rem",
    background:
      "radial-gradient(circle at center, #fff 0%, rgba(255,255,255,0.8) 60%, transparent 100%)",
    borderRadius: "50%",
    boxShadow: "0 0 30px rgba(255,255,255,0.5)",
    animation: "glow 2s infinite alternate",
  },
  abhisargaTitle: {
    fontSize: "6rem",
    fontWeight: 900,
    color: "#fff",
    margin: "0.5rem 0",
    letterSpacing: "0.8rem",
    textShadow: "0 0 20px rgba(255,255,255,0.8)",
    animation: "glow 2s infinite alternate",
    lineHeight: "1.2",
  },
  abhisargaYear: {
    fontSize: "3.5rem",
    fontWeight: 700,
    color: "#fff",
    margin: "0.5rem 0",
    letterSpacing: "0.5rem",
    textShadow: "0 0 15px rgba(255,255,255,0.7)",
    animation: "pulse 2s infinite",
  },
  comingSoon: {
    fontSize: "2.5rem",
    color: "#f0f0f0",
    margin: "2rem 0",
    textTransform: "uppercase",
    letterSpacing: "0.3rem",
    animation: "pulse 2s infinite",
  },
  stage: {
    position: "relative",
    width: "300px",
    height: "100px",
    margin: "3rem auto",
  },
  stagePlatform: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "20px",
    background: "linear-gradient(90deg, #333, #666)",
    borderRadius: "50%",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
  },
  spotlightLeft: {
    position: "absolute",
    width: "50px",
    height: "200px",
    background:
      "linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.1))",
    transformOrigin: "top",
    left: "20%",
    transform: "rotate(-30deg)",
    animation: "spotlightLeft 4s infinite alternate",
  },
  spotlightRight: {
    position: "absolute",
    width: "50px",
    height: "200px",
    background:
      "linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.1))",
    transformOrigin: "top",
    right: "20%",
    transform: "rotate(30deg)",
    animation: "spotlightRight 4s infinite alternate",
  },
};

export default ProshowsComingSoon;