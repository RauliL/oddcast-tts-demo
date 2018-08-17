const md5 = require('md5');

module.exports = (text, voice) => {
  const { id, language, engine } = voice;
  const fragments = [
    `<engineID>${engine}</engineID>`,
    `<voiceID>${id}</voiceID>`,
    `<langID>${language.id}</langID>`,
    '<ext>mp3</ext>',
    text
  ];

  return md5(fragments.join(''));
};
