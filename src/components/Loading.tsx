import React from 'react';
import '../styles/Loading.scss';

interface LoadingProps {
  progress: number;
}

const Loading: React.FC<LoadingProps> = ({ progress }) => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-logo">
          <img src="/images/logo.png" alt="浩盛科技" />
        </div>
        <div className="loading-text">
          <h2>浩盛科技</h2>
          <p>正在載入中...</p>
        </div>
        <div className="loading-bar">
          <div 
            className="loading-progress"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="loading-percentage">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default Loading; 