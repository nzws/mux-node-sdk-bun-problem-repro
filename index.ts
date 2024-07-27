import Mux from '@mux/mux-node';

const mux = new Mux({
  tokenId: process.env['MUX_TOKEN_ID'],
  tokenSecret: process.env['MUX_TOKEN_SECRET'],
  webhookSecret: process.env['MUX_WEBHOOK_SECRET'],
  jwtSigningKey: process.env['MUX_JWT_SIGNING_KEY'],
  jwtPrivateKey: process.env['MUX_JWT_PRIVATE_KEY'],
});

console.log("Current Runtime:", process.versions?.bun ? "Bun" : "Node");

console.log('signPlaybackId', await mux.jwt.signPlaybackId('some-playback-id'));
console.log('signViewerCounts', await mux.jwt.signViewerCounts('some-live-stream-id'));
