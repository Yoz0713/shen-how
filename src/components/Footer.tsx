import React from 'react';
import '../styles/Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>聯絡資訊</h3>
            <p>電話：0935328498</p>
            <p>地址：桃園市八德區永福街126號</p>
            <p>Email：samprasfong@gmail.com</p>
          </div>
          <div className="footer-section">
            <h3>營業時間</h3>
            <p>週一至週五：9:00 - 18:00</p>
            <p>週六日：休息</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 浩盛. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
