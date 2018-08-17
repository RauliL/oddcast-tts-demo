# oddcast-tts-demo

Helper functions for generating MP3 URLs from text using oddcast.com's
text-to-speech demo.

## Usage

```JavaScript
const { buildUrl, voices } = require('oddcast-tts-demo');

buildUrl('Hello, World.', voices.daniel);

// Produces:
// https://cache-a.oddcast.com/c_fs/3053a357f5d3a85a17182971a84007c9.mp3?engine=4&language=1&voice=5&text=Hello%2C%20World.&useUTF8=1
```
