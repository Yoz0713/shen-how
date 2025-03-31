import React from 'react';
import '../styles/Products.scss';

const Products: React.FC = () => {
  return (
    <div className="products-page">
      <div className="products-hero">
        <h1>盛浩科技產品系列</h1>
        <p>專業的太陽能發電系統和智能電力管理解決方案</p>
      </div>

      <div className="products-grid">
        <div className="product-card">
          <img src="/images/product1.jpg" alt="太陽能發電系統" />
          <h3>太陽能發電系統</h3>
          <p>高效能的太陽能發電系統，為您的家庭或企業提供清潔能源</p>
        </div>

        <div className="product-card">
          <img src="/images/product2.jpg" alt="智能電力管理系統" />
          <h3>智能電力管理系統</h3>
          <p>先進的智能電力管理系統，幫助您更好地控制和管理用電</p>
        </div>

        <div className="product-card">
          <img src="/images/product3.jpg" alt="能源監控系統" />
          <h3>能源監控系統</h3>
          <p>即時監控能源使用情況，提供詳細的分析報告</p>
        </div>
      </div>
    </div>
  );
};

export default Products; 