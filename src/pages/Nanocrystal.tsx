import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Nanocrystal.scss';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const Nanocrystal: React.FC = () => {
  return (
    <div className="nanocrystal-page">
      <motion.main 
        className="content-container"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
           <motion.div className="hero-section" variants={fadeInUp}>
          <img 
            src="/images/nano-img0.jpg" 
            alt="導電型奈米超晶體背景" 
            className="hero-background"
          />
          <motion.h1>導電型奈米超晶體 - CE-NSC</motion.h1>
        </motion.div>

        <motion.section className="section" variants={fadeInUp}>
          <div className="image-text-container">
            <img 
              src="/images/nano-img1.jpg" 
              alt="主要特性" 
              className="section-image"
            />
            <div className="text-content">
              <h2>主要特性</h2>
              <p>
                CE-NSC是一種可塗佈或注射於電力傳輸金屬接點的物質
              </p>
              <ul>
                <li>減緩金屬氧化。</li>
                <li>降低電力耗損。</li>
              </ul>
              <ul>
                <li>降低接點阻抗：減少電力耗損。</li>
                <li>減少太陽能模組衰退：降低熱效應帶來的效率衰退。</li>
                <li>改善抗氧化能力：延長金屬接點使用壽命。</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section className="section" variants={fadeInUp}>
          <div className="image-text-container reverse">
            <img 
              src="/images/nano-img2.jpg" 
              alt="產品成分" 
              className="section-image"
            />
            <div className="text-content">
              <h2>產品成分</h2>
              <p>具超高導電性之高分子聚合物。</p>
              <br />
              {/* 應用範圍區塊 */}
              <div className="text-group">
                <p>應用範圍：</p>
                <ul>
                  <li>太陽能模組連接器。</li>
                  <li>AC/DC 配電盤。</li>
                </ul>
              </div>
              <br />
              {/* 物理特性區塊 */}
              <div className="text-group">
                <p>物理特性：</p>
                <ul>
                  <li>物理形態：液體</li>
                  <li>顏色：黑色</li>
                  <li>氣味：無味</li>
                  <li>比重@25°C：0.97</li>
                  <li>粘度：大於1000 cSt</li>
                  <li>沸點：356 °F / 180 °C</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

      

        <motion.section className="card-section" variants={fadeInUp}>
          <div className="card-container">
            <motion.div className="card" variants={fadeInUp}>
              <h2>導電型奈米超晶體的優勢</h2>
              <p>「增加電力品質、增加有效電力」<br />
                「提高發電能力、減少衰退率」<br />
                「逆變器送電量增加」<br />
                「長期保 持」
            </p>
            </motion.div>
            <motion.div className="card" variants={fadeInUp}>
              <h2>包裝</h2>
              <p>提供罐裝 100 毫升，每箱 20 瓶。如有特殊包裝需求，請聯繫浩盛公司。</p>
            </motion.div>
            <motion.div className="card" variants={fadeInUp}>
              <h2>操作注意事項</h2>
              <p>
                本資料不包含完整的產品安全資訊，使用前請聯繫代理商或經銷商索取相關訊息，並仔細閱讀產品包裝說明。
              </p>
            </motion.div>
            <motion.div className="card" variants={fadeInUp}>
            <h2>產品保證</h2>
          <p>
            浩盛保證產品於出貨時符合對客戶銷售時的說明，但不對產品的間接或附帶性損害負責。
          </p>
            </motion.div>
            <motion.div className="card" variants={fadeInUp}>
              <h2>保存方式及期限</h2>
              <p>
                產品在原始未開封狀態下，保存於攝氏 40 度以下，保存期限為 3 年。
              </p>
            </motion.div>
            <motion.div className="card" variants={fadeInUp}>
              <h2>健康及環境訊息</h2>
              <p>
                CE-NSC 已通過 SGS 無毒檢驗，對人體及環境無害。浩盛公司提供技術支援，滿足環境衛生及安全需求。
              </p>
            </motion.div>
          </div>
        </motion.section>

    
      </motion.main>
    </div>
  );
};

export default Nanocrystal;