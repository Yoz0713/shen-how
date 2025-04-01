import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/Products.scss';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 0.6],
      opacity: { 
        duration: 0.6,
        ease: [0.4, 0, 0.2, 0.6]
      }
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
      when: "beforeChildren",
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const features = [
  {
    icon: "/images/renewable-energy.png",
    title: "顯著節能",
    description: "可降低5-15%的能源消耗，為企業帶來實質效益"
  },
  {
    icon: "/images/quality.png",
    title: "品質保證",
    description: "通過SGS嚴格檢測，確保產品安全可靠"
  },
  {
    icon: "/images/professionals.png",
    title: "專業服務",
    description: "提供完整的技術支援與售後服務"
  }
];

const Products: React.FC = () => {
  const navigate = useNavigate();
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);

    return () => clearInterval(timer);
  }, [page]);

  return (
    <div className="products-page">
      <motion.div 
        className="hero-section"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="container">
          <h1>產品服務</h1>
          <p>專業的電力品質分析與奈米材料解決方案</p>
        </div>
      </motion.div>

      <motion.section 
        className="nano-crystal-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px", amount: 0.35 }}
        variants={staggerContainer}
        style={{ willChange: "transform, opacity" }}
      >
        <div className="container">
          <motion.div className="section-content" variants={staggerContainer}>
            <motion.div className="text-content" variants={fadeInUp}>
              <h2>導電型奈米超晶體</h2>
              <p>我們的專利技術產品具有以下特點：</p>
              <ul>
                <li>改善電力接點導電性能</li>
                <li>降低接觸電阻</li>
                <li>減少熱能損耗</li>
                <li>延長設備使用壽命</li>
                <li>環保無毒，符合國際標準</li>
              </ul>
              <button className="contact-btn" onClick={() => navigate('/nanocrystal')}>了解更多</button>
            </motion.div>
            <motion.div className="image-content" variants={fadeInUp}>
              <img 
                src="/images/product1.jpg" 
                alt="導電型奈米超晶體" 
                loading="eager"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="power-analysis-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px", amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.div className="section-content" variants={staggerContainer}>
            <motion.div className="image-content" variants={fadeInUp}>
              <img 
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="電力品質分析" 
                loading="eager"
              />
            </motion.div>
            <motion.div className="text-content" variants={fadeInUp}>
              <h2>電力品質分析服務</h2>
              <p>我們提供專業的電力品質分析服務，幫助企業：</p>
              <ul>
                <li>精確診斷電力系統狀態</li>
                <li>識別潛在的電力問題</li>
                <li>提供優化建議與解決方案</li>
                <li>降低能源消耗成本</li>
                <li>提升設備使用壽命</li>
              </ul>
              <button className="contact-btn" onClick={() => navigate('/power-analysis')}>了解更多</button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="features-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px", amount: 0.35 }}
        variants={staggerContainer}
        style={{ willChange: "transform, opacity" }}
      >
        <div className="container">
          <motion.h2 variants={fadeInUp}>產品優勢</motion.h2>
          <div className="carousel-container">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="carousel-item"
              >
                <div className="feature-card">
                  <div className="feature-icon">
                    <img src={features[page % features.length].icon} alt={features[page % features.length].title} />
                  </div>
                  <h3>{features[page % features.length].title}</h3>
                  <p>{features[page % features.length].description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Products; 