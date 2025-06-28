import cluster from 'cluster';
import express, { Request, Response } from 'express';

const numOfWorkers = 2;
const port = 3000;

if (cluster.isPrimary) {
  console.log(`Primary process ${process.pid} is running`);

  // 指定したワーカー数ぶんフォーク
  for (let i = 0; i < numOfWorkers; i++) {
    cluster.fork();
  }
} else {
  const app = express();
  let count = 0;

  app.get('/count', (_req: Request, res: Response) => {
    res.json({ count });
  });

  app.post('/increment', (_req: Request, res: Response) => {
    count++;
    res.json({ count });
  });

  app.listen(port, '0.0.0.0', () => {
    console.log(`Worker ${process.pid} running on http://localhost:${port}`);
  });
}
