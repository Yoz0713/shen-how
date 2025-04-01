import React from 'react';
import '../styles/Contact.scss';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>聯絡我們</h1>
        <p>如果您有任何問題或需求，請隨時與我們聯繫。</p>
      </div>
      <div className="contact-container">
        <div className="contact-image">
          <img 
            src="/images/contact-img.jpg" 
            alt="聯絡我們背景" 
          />
        </div>
        <div className="contact-form">
          <h2>聯絡表單</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">姓名</label>
              <input type="text" id="name" name="name" placeholder="請輸入您的姓名" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">電子郵件</label>
              <input type="email" id="email" name="email" placeholder="請輸入您的電子郵件" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">訊息</label>
              <textarea id="message" name="message" placeholder="請輸入您的訊息" rows={5} required></textarea>
            </div>
            <button type="submit" className="submit-button">送出</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;