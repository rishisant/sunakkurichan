const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// 仮ルート
app.get('/', (req, res) => {
  res.send('バックエンド稼働中！');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`サーバー起動: http://localhost:${PORT}`));