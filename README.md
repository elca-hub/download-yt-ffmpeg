# YouTube動画をmp3でダウンロードするツール

## 使い方

### 1. dockerを起動
```bash
$ docker-compose up api # dockerを起動
```

### 2. ローカルサーバへアクセス
普通のwebブラウザ(chromeやsafari)から、**http://localhost:3000/:videoId/mp3**と入力しアクセスする

※videoIdは、「youtube.com/watch?v=i33ejoIne3w」の「v=」以降の値のこと。なのでこの例だと、http://localhost:3000/i33ejoIne3w/mp3へアクセスすればよい

### 3. ダウンロードできるまで待機
進捗状況はターミナルでわかる。結構時間かかるので気長に待とうね

## もしもダウンロードできなかったら
apiフォルダ直下にdownloadsフォルダがあるが、そこにmp3を格納してあるのでそこから引っ張ってこれる

## 参考
[ytdl-core](https://github.com/fent/node-ytdl-core/blob/master/example/convert_to_mp3.js)
