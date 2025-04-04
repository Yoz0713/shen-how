require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// 中間件
app.use(cors());
app.use(bodyParser.json());

// 郵件發送路由
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // 確保所有欄位都有值
  if (!name || !email || !message) {
    return res.status(400).send('所有欄位都是必填的');
  }

  // 建立傳輸器
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // 您的 Gmail 地址
      pass: process.env.GMAIL_APP_PASSWORD, // 您的應用程式專用密碼
    },
  });

  // 配置郵件選項
  const mailOptions = {
    from: process.env.GMAIL_USER, // 發件人
    to: 'charlesyou1234567@gmail.com', // 收件人
    subject: `來自浩盛官網-填寫人:${name}`,
    text:  `有人透過官網的聯絡表單來信！\r\r\r
    以下為訊息內容：\r
    ${message} `,
  };

  // 發送郵件
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('發送郵件時發生錯誤：', error);
      return res.status(500).send('發送郵件時發生錯誤。');
    } else {
      console.log('郵件已成功發送：', info.response);
      return res.status(200).send('郵件已成功發送！');
    }
  });
});

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`伺服器正在 http://localhost:${PORT} 運行`);
});