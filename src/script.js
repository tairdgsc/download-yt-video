const fs = require('fs');
const ytdl = require('ytdl-core');
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above

ytdl('https://www.youtube.com/watch?v=WyaVu2306_k&ab_channel=MateusSilva', {
    filter: "audioandvideo", quality: "highestvideo"
})
  .pipe(fs.createWriteStream('video.mp4'));