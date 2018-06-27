// Log levels in descending order of level number:
// fatal: 60
// error: 50
// warn:  40
// info:  30
// debug: 20
// trace: 10

const config = {
  port: 4001,
  log: {
    name: 'myweb',
    streams: [
      // Log 'trace' and above to the console
      {
        level: 'trace',
        stream: process.stdout,
      },

      // Log 'error' and above to 'logs/error.log'
      {
        level: 'error',
        path: 'logs/error.log',
      },
    ],
  },
};

export default config;

