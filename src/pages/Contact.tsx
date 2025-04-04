import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.scss';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/send-email', { // 替換為您的後端 API URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // 將表單資料轉換為 JSON 格式
      });

      if (response.ok) {
        setStatus('訊息已成功發送！');
        setFormData({ name: '', email: '', message: '' }); // 清空表單
      } else {
        setStatus('發送失敗，請稍後再試。');
      }
    } catch (error) {
      console.error(error);
      setStatus('發送失敗，請稍後再試。');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="contact-page"
    >
      <img
        src="/images/contact-img.jpg"
        alt="背景圖片"
        className="background-image"
      />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="contact-container"
      >
        <h1>聯絡我們</h1>
        <p>如果您有任何問題或需要進一步的資訊，請隨時與我們聯繫。</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="您的姓名"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="您的電子郵件"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            placeholder="您的訊息"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
          <button type="submit">發送訊息</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </motion.div>
    </motion.div>
  );
};

export default Contact;