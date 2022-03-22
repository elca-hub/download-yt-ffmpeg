const express = require('express');
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const app = express();

app.get('/:youtubeId/mp3', (req, res) => {
  const youtubeId = req.params.youtubeId;
  const stream = ytdl(`http://www.youtube.com/watch?v=${youtubeId}`, {
    filter: 'audioonly',
    quality: 'highest'
  });
  const fileName = `./downloads/${youtubeId}.mp3`;
  console.log('ファイルを生成中...');
  ffmpeg(stream)
  .audioBitrate(128)
  .save(fileName)
  .on('end', () => {
    const raw = fs.createReadStream(fileName);
    res.setHeader('Content-disposition', `attachment; filename=${youtubeId}.mp3`);
    res.setHeader('Content-type', 'audio/mpeg');
    console.log('ファイルをダウンロード中...');
    raw.pipe(res)
    .on('finish', () => { console.log('ダウンロードが完了しました!') });
  })
});

app.listen('3000', () => console.log('サーバーが起動しました!\nhttp://localhost:3000/{ここにVideoId}/mp3'));