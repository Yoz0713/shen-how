import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import News from './pages/News';
import History from './pages/History';
import Products from './pages/Products';
import Contact from './pages/Contact';
import About from './pages/About';
import PowerAnalysis from './pages/PowerAnalysis';
import Loading from './components/Loading';
import Nanocrystal from './pages/Nanocrystal';
import './styles/App.scss';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showFadeOut, setShowFadeOut] = useState(false);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    // 監聽資源載入進度
    const updateProgress = () => {
      const resources = document.querySelectorAll('img, link[rel="stylesheet"]');
      const totalResources = resources.length;
      let loadedResources = 0;

      resources.forEach(resource => {
        if (resource instanceof HTMLImageElement) {
          if (resource.complete) loadedResources++;
        } else if (resource instanceof HTMLLinkElement) {
          if (resource.sheet) loadedResources++;
        }
      });

      // 計算實際進度
      const actualProgress = Math.min(95, Math.round((loadedResources / totalResources) * 100));
      
      // 確保最少顯示3秒
      const elapsedTime = Date.now() - startTime;
      const minDisplayTime = 3000; // 3秒
      
      if (elapsedTime < minDisplayTime) {
        // 如果還沒到3秒，使用模擬進度
        const simulatedProgress = Math.min(95, Math.round((elapsedTime / minDisplayTime) * 100));
        setProgress(Math.max(actualProgress, simulatedProgress));
      } else {
        // 如果已經超過3秒，使用實際進度
        setProgress(actualProgress);
      }
    };

    // 監聽資源載入事件
    const handleLoad = () => {
      // 確保進度達到100%
      setProgress(100);
      
      // 延遲一小段時間後開始淡出
      setTimeout(() => {
        setShowFadeOut(true);
        // 等待淡出動畫完成後移除載入畫面
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }, 500);
    };

    // 如果頁面已經載入完成，直接觸發handleLoad
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    const progressInterval = setInterval(updateProgress, 100);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearInterval(progressInterval);
    };
  }, [startTime]);

  return (
    <Router>
      <ScrollToTop />
      {isLoading && (
        <div className={`loading-container ${showFadeOut ? 'fade-out' : ''}`}>
          <Loading progress={progress} />
        </div>
      )}
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/history" element={<History />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/power-analysis" element={<PowerAnalysis />} />
            <Route path="/nanocrystal" element={<Nanocrystal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
