import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = 3000;

// 静的ファイルを公開
app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running at http://localhost:${port}`);
});
