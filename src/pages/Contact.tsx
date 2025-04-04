import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import '../styles/Contact.scss';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptchaChange = (value: string | null) => {
    if (value) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaVerified) {
      setStatus('請完成機器人驗證。');
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xovekpbe', { // 替換為您的 Formspree 表單 ID
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('感謝您的聯絡！我們已收到您的訊息，並會盡快回覆您。');
        setFormData({ name: '', email: '', message: '' }); // 清空表單
        setCaptchaVerified(false); // 重置 reCAPTCHA
      } else {
        setStatus('提交失敗，請稍後再試。');
      }
    } catch (error) {
      console.error('提交表單時發生錯誤：', error);
      setStatus('提交失敗，請稍後再試。');
    }
  };

  return (
    <div className="contact-page">
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>聯絡我們</h1>
        <p>如果您有任何問題或需求，請隨時與我們聯繫。</p>
      </motion.div>
      <div className="contact-container">
        <motion.div
          className="contact-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/contact-img.jpg"
            alt="科技背景"
          />
        </motion.div>
        <motion.div
          className="contact-form"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>聯絡表單</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">姓名</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="請輸入您的姓名"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">電子郵件</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="請輸入您的電子郵件"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">訊息</label>
              <textarea
                id="message"
                name="message"
                placeholder="請輸入您的訊息"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-group recaptcha">
              <ReCAPTCHA
                sitekey="6Lc0IgorAAAAAF_3_zxLoio3BOJ29FwTO_r8NUle" // 替換為您的 reCAPTCHA 網站金鑰
                onChange={handleCaptchaChange}
              />
            </div>
            <button type="submit" className="submit-button" disabled={!captchaVerified}>
              送出
            </button>
          </form>
          {status && <p className="status-message">{status}</p>}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;