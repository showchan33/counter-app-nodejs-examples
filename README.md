# counter-app-nodejs-examples

このリポジトリは、Node.js と TypeScript を使って実装した「カウンターWebアプリ」のサンプル集です。

サーバーサイドとクライアントサイド、それぞれの方法でカウントの仕組みがどのように異なるかを比較・学習できる構成になっています。

詳しい解説は以下の記事をご覧ください：

👉 [Qiita記事: Webアプリのカウントの仕組みをサーバー／クライアント別に比較してみた](https://qiita.com/showchan33/items/80aea3e98f7683156266)

## ディレクトリ構成

```
.
├── client-side            # クライアントサイドのみで動作するカウンターアプリ
├── server-side-cookie     # Cookieを使ってクライアントごとにカウントを保持するアプリ
├── server-side-simple     # サーバーで1つの変数にカウントを保持するシンプルなアプリ
├── server-side-workers    # 複数のワーカープロセスで動かす構成（各プロセスが独立してカウントを保持）
└── README.md              # 本ファイル
````

## 使用技術

- Node.js (v20.19.2 で動作確認)
- TypeScript
- Express.js
- express-session（Cookieを使ったセッション管理で使用）

## 実行方法

各ディレクトリに移動後、以下のコマンドで必要なパッケージをインストールしてアプリを起動できます。

```bash
# 例：server-side-simple ディレクトリで
npm install
npx ts-node src/server.ts
````

`client-side` のアプリについては、`public/index.html` をブラウザで直接開くことでも動作確認が可能です。

## 補足

このリポジトリは学習・検証目的で作成されています。
本番利用を想定したセキュリティ対策やパフォーマンスチューニングは行っていませんのでご注意ください。

## Author
showchan33

## License
"counter-app-nodejs-examples" is under GPL license.
