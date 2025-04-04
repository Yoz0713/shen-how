import React from 'react';
import { motion } from 'framer-motion';
import '../styles/News.scss';

// 定義動畫效果
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

const News: React.FC = () => {
  return (
    <motion.div 
      className="news"
      initial="hidden"
      animate="visible" // 使用 `animate` 讓動畫在頁面加載時觸發
      variants={staggerContainer}
    >
      <div className="news-header">
        <h1>公司實績</h1>
        <p>了解我們的里程碑</p>
      </div>
      <div className="news-container">
        {/* 第一個 news-item */}
        <motion.div 
          className="news-item" 
          variants={fadeInUp}
        >
          <div className="news-image">
            <img 
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=800&auto=format&fit=crop" 
              alt="公司榮獲最佳服務獎" 
            />
          </div>
          <div className="news-content">
            <h2>奈米超晶體技術提升太陽能案場發電效能實證分析</h2>
            <p className="news-date">2025年03月07日</p>
            <p className="news-summary">
              多個太陽能案場的數據證實，導電型奈米超晶體可顯著提升發電效能。
            </p>
            <motion.ul 
              className="news-list" 
              variants={staggerContainer}
            >
              <motion.li variants={fadeInUp}>A案場:最低發電率由57%提升至70%，五年後仍維持高效能。</motion.li>
              <motion.li variants={fadeInUp}>B、C案場:發電量分別提高約3.5%與3.7%。</motion.li>
              <motion.li variants={fadeInUp}>E、F案場:提升率達4.97%~7.03%。</motion.li>
              <motion.li variants={fadeInUp}>I案場:施工後發電量增長15%。</motion.li>
              <motion.li variants={fadeInUp}>J案場:在極端天氣下仍能提升10%以上，最高達33.66%。</motion.li>
            </motion.ul>
            <p className="news-summary">
              整體數據顯示，奈米超晶體能有效改善接點電性，減少發熱與氧化，並在高溫環境下展現更佳效果，平均提升發電量8.3%，確保系統穩定運行，優於傳統導電膏技術。
            </p>
          </div>
        </motion.div>

        {/* 第二個 news-item */}
        <motion.div 
          className="news-item" 
          variants={fadeInUp}
        >
          <div className="news-image">
            <img 
              src="https://images.unsplash.com/photo-1546146830-2cca9512c68e?q=80&w=800&auto=format&fit=crop" 
              alt="公司推出全新產品線" 
            />
          </div>
          <div className="news-content">
            <h2>奈米超晶體技術提升太陽能案場發電效能實證分析</h2>
            <p className="news-date">2024年2月20日</p>
            <motion.ul 
              className="news-list" 
              variants={staggerContainer}
            >
              <motion.li variants={fadeInUp}>A案場：施工後最低發電率由57%提升至70%，五年後維持高發電量。</motion.li>
              <motion.li variants={fadeInUp}>B案場：實驗組發電量維持98%~99%，較對照組約95%提升約3.5%。</motion.li>
              <motion.li variants={fadeInUp}>C案場：實驗組發電量穩定於99%，較對照組約95%提升約3.7%。</motion.li>
              <motion.li variants={fadeInUp}>E案場：施工後平均發電比值103.59%~108.96%。</motion.li>
              <motion.li variants={fadeInUp}>F案場：施工後發電量提升6.18%~7.03%。</motion.li>
            </motion.ul>
            <p className="news-summary">
              導電型奈米超晶體技術通過改善太陽能系統金屬接點的電力品質，有效降低了寄生效應，減少了熱效應和氧化。
            </p>
          </div>
        </motion.div>

        {/* 第三個 news-item */}
        <motion.div 
          className="news-item" 
          variants={fadeInUp}
        >
          <div className="news-image">
            <img 
              src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=800&auto=format&fit=crop" 
              alt="奈米超晶體安全測試報告" 
            />
          </div>
          <div className="news-content">
            <h2>奈米超晶體安全測試報告</h2>
            <p className="news-date">2020年10月20日</p>
            <p className="news-summary">
              浩盛科技委託 SGS 依據 RoHS 法規，對奈米超晶體（CE-NSC 型）進行有害物質測試，檢測鎘、鉛、汞、六價鉻、多溴聯苯、溴聯苯醚及四種鄰苯二甲酸酯。結果顯示所有項目均未檢出，確保產品符合環保與安全標準，讓客戶安心使用。
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default News;