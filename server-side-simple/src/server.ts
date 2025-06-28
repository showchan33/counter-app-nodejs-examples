import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

let count = 0;

// 現在のカウントを取得
app.get('/count', (_req: Request, res: Response) => {
  res.json({ count });
});

// カウントを1増やす
app.post('/increment', (_req: Request, res: Response) => {
  count++;
  res.json({ count });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running at http://localhost:${port}`);
});
