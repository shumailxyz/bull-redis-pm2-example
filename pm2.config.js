var pm2Config = {
  "apps": [
    {
      "name": "producer",
      "script": "./node_modules/.bin/ts-node",
      "args": "producer.ts",
      "instances": "1"
    },
    {
      "name": "consumer",
      "script": "./node_modules/.bin/ts-node",
      "args": "consumer.ts",
      "instances": 4
    },
    {
      "name": "monitor",
      "script": "monitor.js",
      "instances": 1
    }
  ]
};

module.exports = pm2Config;
