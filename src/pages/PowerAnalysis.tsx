import React from 'react';
import { motion } from 'framer-motion';
import '../styles/PowerAnalysis.scss';
import { useNavigate } from 'react-router-dom';

const PowerAnalysis: React.FC = () => {
  const navigate = useNavigate();
 
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="power-analysis-page">
      <motion.section 
        className="hero-section"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="container">
          <motion.div className="section-content" variants={staggerContainer}>
            <motion.h1 variants={fadeInUp}>電力品質分析服務</motion.h1>
            <motion.p className="subtitle" variants={fadeInUp}>
              專業的電力品質分析與優化方案
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="content-section"
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
              <h2>範圍的重要性</h2>
              <p>在電力品質分析中，分析範圍的選擇至關重要：</p>
              <ul>
                <li>過小的評估範圍會導致分析結果不準確且代表性低</li>
                <li>擴大評估範圍，涵蓋更多設備和更大的總電流，使結果更接近實際情況</li>
                <li>包含更多線路接點，提高分析的代表性</li>
                <li>考慮設備間交互作用的影響</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="content-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px", amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.div className="section-content" variants={staggerContainer}>
            <motion.div className="text-content" variants={fadeInUp}>
              <h2>專業分析方法</h2>
              <p>我們採用先進的分析方法：</p>
              <ul>
                <li>波型分解方式，排除多種設備不同時間啟動及交互作用的干擾</li>
                <li>利用電學原理，計算分析非線性負載之各項功率</li>
                <li>運用疊加定理及諧波分析，了解改善前後設備間交互作用的變化</li>
                <li>透過相位角差分析，評估系統效率改善情況</li>
              </ul>
            </motion.div>
            <motion.div className="image-content" variants={fadeInUp}>
              <img 
                src="/images/wave.jpg" 
                alt="專業分析" 
                loading="eager"
                style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%'}}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="content-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px", amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.div className="section-content" variants={staggerContainer} style={{display: 'block'}}>
            <motion.div className="text-content" variants={fadeInUp}>
              <h2 style={{textAlign: 'center'}}>實際案例分享</h2>
              <div className="case-studies">
                <div className="case-study">
                  <div className="case-image">
                    <img 
                      src="/images/machine1.jpg" 
                      alt="日X光公司案例" 
                      loading="eager"
                    />
                  </div>
                  <h3>日X光公司案例</h3>
                  <ul>
                    <li>三相線電流短期上下變動減少89%</li>
                    <li>線電流值降低，設備運作更趨正常</li>
                    <li>三相電流更加穩定</li>
                  </ul>
                </div>
                <div className="case-study">
                  <div className="case-image">
                    <img 
                      src="/images/machine2.jpg" 
                      alt="台X仁武廠案例" 
                      loading="eager"
                    />
                  </div>
                  <h3>台X仁武廠案例</h3>
                  <ul>
                    <li>兩台電解槽輸入電流差異大幅減少</li>
                    <li>化學反應與產能更穩定</li>
                    <li>電解槽匯流排表面溫度下降</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="contact-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px", amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.div className="section-content" variants={staggerContainer}>
            <motion.div className="text-content" variants={fadeInUp}>
              <h2>立即諮詢</h2>
              <p>我們的專業團隊隨時為您提供電力品質分析服務</p>
              <button className="contact-btn" onClick={() => navigate('/contact')}>聯絡我們</button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default PowerAnalysis; 