import React from 'react';
import '../styles/About.scss';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>關於盛浩科技</h1>
        <p>專業的技術團隊，為您提供最優質的服務</p>
      </div>
      
      <div className="about-content">
        <section className="company-intro">
          <h2>公司簡介</h2>
          <p>
            盛浩科技成立於2024年，是一家專注於太陽能發電系統和智能電力管理的科技公司。
            我們致力於為客戶提供高品質的產品和專業的技術服務，推動綠色能源的發展。
          </p>
        </section>

        <section className="our-mission">
          <h2>我們的使命</h2>
          <p>
            盛浩科技以推動綠色能源發展為使命，通過創新技術和專業服務，
            為客戶提供可持續的能源解決方案，共同創造更美好的未來。
          </p>
        </section>

        <section className="our-vision">
          <h2>我們的願景</h2>
          <p>
            盛浩科技致力於成為太陽能發電系統和智能電力管理領域的領導者，
            通過持續創新和優質服務，為客戶創造更大的價值。
          </p>
        </section>
      </div>
    </div>
  );
};

export default About; 