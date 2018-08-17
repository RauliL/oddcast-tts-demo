const buildUrl = require('build-url');

const buildHash = require('./build-hash');

module.exports = (text, voice, hash = null) => buildUrl(
  'https://cache-a.oddcast.com',
  {
    path: `c_fs/${hash || buildHash(text, voice)}.mp3`,
    queryParams: {
      engine: voice.engine,
      language: voice.language.id,
      voice: voice.id,
      text,
      useUTF8: 1
    }
  }
);
