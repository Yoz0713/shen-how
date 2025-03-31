import React from 'react';
import '../styles/News.scss';

const News: React.FC = () => {
  return (
    <div className="news">
      <div className="news-header">
        <h1>公司新聞</h1>
        <p>了解我們的最新動態</p>
      </div>
      <div className="news-container">
        <div className="news-item">
          <div className="news-image">
            <img src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=800&auto=format&fit=crop" alt="公司榮獲最佳服務獎" />
          </div>
          <div className="news-content">
            <h2>公司榮獲2024年度最佳服務獎</h2>
            <p className="news-date">2024年3月15日</p>
            <p className="news-summary">
              我們很榮幸地宣布，本公司在2024年度服務品質評比中獲得最佳服務獎。這個獎項是對我們長期以來致力於提供優質服務的肯定。我們的客戶服務團隊始終秉持"以客為尊"的原則，為客戶提供專業、高效的服務。這個獎項不僅是對我們過去工作的認可，也是對未來的激勵。我們將繼續努力，提供更好的服務體驗。
            </p>
            <a href="#" className="read-more">閱讀更多</a>
          </div>
        </div>
        <div className="news-item">
          <div className="news-image">
            <img src="https://images.unsplash.com/photo-1546146830-2cca9512c68e?q=80&w=800&auto=format&fit=crop" alt="公司推出全新產品線" />
          </div>
          <div className="news-content">
            <h2>公司推出全新產品線</h2>
            <p className="news-date">2024年2月20日</p>
            <p className="news-summary">
              為了滿足客戶不斷變化的需求，我們推出了全新的產品線。這些產品融合了最新技術，將為客戶帶來前所未有的體驗。新產品包括了智能家居系列、辦公自動化系統以及個人安全設備等。每一款產品都經過嚴格的測試和優化，確保品質和性能達到最高標準。我們相信，這些新產品將為客戶的生活和工作帶來更多便利和效率。
            </p>
            <a href="#" className="read-more">閱讀更多</a>
          </div>
        </div>
        <div className="news-item">
          <div className="news-image">
            <img src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=800&auto=format&fit=crop" alt="公司擴展國際業務" />
          </div>
          <div className="news-content">
            <h2>公司擴展國際業務</h2>
            <p className="news-date">2024年1月10日</p>
            <p className="news-summary">
              隨著公司的不斷成長，我們決定擴展國際業務。這將使我們能夠將優質的產品和服務帶給全球更多的客戶。我們已經在歐洲、北美和亞太地區設立了辦事處，並招募了當地的專業人才。這一戰略性擴張不僅將增加我們的市場份額，也將豐富我們的產品線和服務項目。我們期待與全球客戶建立長期、互利的合作關係。
            </p>
            <a href="#" className="read-more">閱讀更多</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News; 