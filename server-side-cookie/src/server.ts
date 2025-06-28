import express, { Request, Response } from 'express';
import session from 'express-session';

const app = express();
const port = 3000;

// セッションミドルウェアの設定
// セッションIDのCookieを安全に利用するためのシークレットキーを設定
// 本番環境では環境変数などから取得し、より複雑な文字列にすべし
app.use(session({
  secret: 'my-super-secret-key-for-session', // セッションIDを暗号化するための秘密鍵
  resave: false, // セッションに変更がない場合でもセッションストアに保存し直すか (通常はfalse)
  saveUninitialized: false, // 未初期化のセッションを保存するか (通常はfalse)
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // クッキーの有効期限 (例: 24時間)
    // secure: true, // HTTPS環境でのみクッキーを送信する場合はtrue (本番環境で推奨)
    // httpOnly: true, // クライアントサイドのJavaScriptからクッキーにアクセスできないようにする (推奨)
  }
}));

// Expressの型定義を拡張して、req.session にアクセス可能にする
declare module 'express-session' {
  interface SessionData {
    count?: number; // countプロパティを追加（?がつくのでオプショナルプロパティ。このプロパティはあってもなくてもいい）
  }
}

// 現在のカウントを取得
app.get('/count', (req: Request, res: Response) => {
  // req.session からクライアントごとの 'count' を取得
  // 初めてアクセスするクライアントの場合、req.session.count は undefined なので 0 を初期値とする
  const currentCount = req.session.count || 0;
  res.json({ count: currentCount });
});

// カウントを1増やす
app.post('/increment', (req: Request, res: Response) => {
  // req.session.count をインクリメント
  // 初めてアクセスするクライアントの場合、初期値は 0 として扱う
  req.session.count = (req.session.count || 0) + 1;
  res.json({ count: req.session.count });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running at http://localhost:${port}`);
});

