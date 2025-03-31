import React from 'react';
import '../styles/History.scss';

const History: React.FC = () => {
  return (
    <div className="history">
      <div className="history-header">
        <h1>公司歷史</h1>
        <p>了解我們的成長歷程</p>
      </div>
      <div className="history-container">
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">2000</div>
            <div className="timeline-content">
              <h2>公司成立</h2>
              <p>在2000年，我們的公司正式成立。創始人帶著對行業的熱情和遠見，開始了這段創業之旅。</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2005</div>
            <div className="timeline-content">
              <h2>業務擴展</h2>
              <p>經過五年的發展，公司業務開始擴展，產品線豐富，客戶群體不斷增長。</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2010</div>
            <div className="timeline-content">
              <h2>技術創新</h2>
              <p>我們投入大量資源進行技術研發，推出了一系列創新產品，引領行業發展。</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2015</div>
            <div className="timeline-content">
              <h2>國際化發展</h2>
              <p>公司開始拓展國際市場，產品和服務遍及多個國家和地區。</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2020</div>
            <div className="timeline-content">
              <h2>數字化轉型</h2>
              <p>面對數字化時代的挑戰，公司進行了全面的數字化轉型，提高效率和客戶體驗。</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">今天</div>
            <div className="timeline-content">
              <h2>持續創新</h2>
              <p>我們始終堅持創新精神，不斷提升產品和服務品質，為客戶創造更多價值。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History; 