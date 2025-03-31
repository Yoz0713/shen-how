import React, { useState } from 'react';
import '../styles/Contact.scss';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('感謝您的訊息！我們會盡快與您聯繫。');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>聯絡盛浩科技</h1>
        <p>我們期待與您的合作</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>聯絡資訊</h2>
          <div className="info-item">
            <h3>公司地址</h3>
            <p>台北市信義區信義路五段5號</p>
          </div>
          <div className="info-item">
            <h3>聯絡電話</h3>
            <p>02-2345-6789</p>
          </div>
          <div className="info-item">
            <h3>電子郵件</h3>
            <p>contact@shenghao.com</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>聯絡表單</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">姓名</label>
              <input
                type="text"
                id="name"
                name="name"
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
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">電話</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">訊息</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">送出</button>
          </form>
        </div>
      </div>
      <div className="map-container">
        <h2>我們的位置</h2>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.4674903247067!2d121.5169!3d25.0478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAyJzUyLjEiTiAxMjHCsDMxJzAwLjgiRQ!5e0!3m2!1szh-TW!2stw!4v1650000000000!5m2!1szh-TW!2stw"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Company Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact; 