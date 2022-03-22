const express = require('express');
const ytdl = require('ytdl-core');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const app = express();

app.get('/:youtubeId/mp3', (req, res) => {
  const youtubeId = req.params.youtubeId;
  const stream = ytdl(`http://www.youtube.com/watch?v=${youtubeId}`, {
    filter: 'audioonly',
    quality: 'highest'
  });
  ffmpeg(stream)
  .audioBitrate(128)
  .save(`./downloads/${youtubeId}.mp3`)
  .on('progress', p => {
    console.log(`${p.targetSize}kb downloaded`);
  })
  .on('end', () => {
    res.send('done');
  })
});

app.listen('3000', () => console.log(`Example app listening!`))