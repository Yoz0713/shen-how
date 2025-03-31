import React, { useState, useEffect, useCallback } from 'react';
import { easeInOut, motion } from 'framer-motion';
import '../styles/Home.scss';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    {
      url: "/images/home-img1.jpg",
      title: "太陽能發電系統"
    },
    {
      url: "/images/home-img2.jpg",
      title: "綠色能源解決方案"
    },
    {
      url: "/images/home-img3.jpg",
      title: "智能電力管理"
    }
  ];

  const startTimer = useCallback(() => {
    return setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
  }, [images.length]);

  useEffect(() => {
    const timer = startTimer();
    return () => clearInterval(timer);
  }, [startTimer]);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-slider">
          {images.map((image, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentImageIndex ? 'active' : ''}`}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="hero-image"
              />
              <div className="hero-content">
                <h1>浩盛科技</h1>
                <p>專精於介面化學與電機跨領域研究</p>
                <p>致力於提供無毒、綠能、環保、永續的解決方案</p>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`切換到第 ${index + 1} 張圖片`}
            />
          ))}
        </div>
      </div>

      <motion.section 
        className="about-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px", amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 variants={fadeInUp}>關於我們</motion.h2>
          <motion.div className="about-content" variants={staggerContainer}>
            <motion.div className="about-icon" variants={fadeInUp}>
              <img src="/images/man.png" alt="關於我們" />
            </motion.div>
            <motion.p variants={fadeInUp}>浩盛科技成立於民國108年初，專精於介面化學與電機跨領域研究。我們的核心技術是自行研發、製造「導電型奈米超晶體」塗料，並進一步開發客製化材料，致力於解決電力接點產生的寄生、諧波、雜訊、振盪等問題。</motion.p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="features-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px", amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 variants={fadeInUp}>核心技術</motion.h2>
          <motion.div className="features-grid" variants={staggerContainer}>
            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon">
                <img src="/images/nanotechnology.png" alt="導電型奈米超晶體" />
              </div>
              <h3>導電型奈米超晶體</h3>
              <p>經過八年以上反覆測試驗證，能有效改善電力品質並達到節能效果。已成功應用於台灣、大陸、越南等地，並與中鼎、台塑等企業合作。</p>
            </motion.div>
            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon">
                <img src="/images/data-research.png" alt="電力品質分析" />
              </div>
              <h3>電力品質分析</h3>
              <p>獨特的電力品質分析技術，為太陽能案場和高用電工廠提供精確分析服務，快速診斷電力系統狀態，協助改善電力品質。</p>
            </motion.div>
            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon">
                <img src="/images/cetificated.png" alt="環保認證" />
              </div>
              <h3>環保認證</h3>
              <p>所有產品均通過SGS嚴格檢測，確保對人體無害且不會污染環境，符合無毒、綠能、環保、永續的企業理念。</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="applications-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px", amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 variants={fadeInUp}>應用領域</motion.h2>
          <motion.div className="applications-grid" variants={staggerContainer}>
            <motion.div className="application-card" variants={fadeInUp}>
              <div className="application-icon">
                <img src="/images/solar-energy.png" alt="太陽能光電產業" />
              </div>
              <h3>太陽能光電產業</h3>
              <p>應用於太陽能案場連接器、AC及DC盤體電力接點，有效提升發電量，降低新建案場衰退率。</p>
            </motion.div>
            <motion.div className="application-card" variants={fadeInUp}>
              <div className="application-icon">
                <img src="/images/energy.png" alt="高用電" />
              </div>
              <h3>高用電工廠</h3>
              <p>協助改善電力品質、達到節能並確保用電安全，減少不良電力對設備造成的影響。</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home; 