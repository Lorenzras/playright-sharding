# Playright Sharding Example
 Example repository for playwright sharding.

https://playwright.dev/docs/test-sharding

# Setup

Node.js 18 以上が必要です。

1. パッケージのインストール

```bash
npm install
```

2. ブラウザーやバイナリーをダウンロードする

```bash
npx playwright install --with-deps
```

## テスト実行サンプル

1. 5ワーカーでテストを実行する

```bash
npx playwright test --workers=5
```

2. テストスイートを5シャードに分割し、1シャードを実行する

```bash
npx playwright test --shard=1/5
```

その他参考

- [Sharding](https://playwright.dev/docs/test-sharding)
- [Parallel](https://playwright.dev/docs/test-parallel)