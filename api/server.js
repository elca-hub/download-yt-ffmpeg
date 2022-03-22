const express = require('express');
const ytdl = require('ytdl-core');
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
  .on('end', () => {
    res.send('done');
  })
});

app.listen('3000', () => console.log(`Example app listening!`))