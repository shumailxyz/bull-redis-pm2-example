const Arena = require('bull-arena');

const express = require('express');
const app = express()
const router = express.Router();

const arenaConfig = Arena({
  queues: [
    {
      // Name of the bull queue, this name must match up exactly with what you've defined in bull.
      name: "queue1",

      // Hostname or queue prefix, you can put whatever you want.
      hostId: "SM",

      // Redis auth.
      redis: {
        port: 6379,
        host: '127.0.0.1'
      },
    },
  ],
},
{
  // Make the arena dashboard become available at {my-site.com}/arena.
  basePath: '/arena',

  // Let express handle the listening.
  disableListen: true
});

router.use('/', arenaConfig);
app.use('/', router);

const port = 3300;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
