const express = require('express');
const cors = require('cors');
require('dotenv').config();


const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB接続成功!"))
  .catch((err) => console.error("❌ MongoDB 接続失敗:", err));

// Expressアプリケーションの初期化
const app = express();
app.use(cors());
app.use(express.json());

// 仮ルート
app.get('/', (req, res) => {
  res.send('バックエンド稼働中！');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`サーバー起動: http://localhost:${PORT}`));

