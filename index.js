const app = require('./server');

// Export the Express app directly; Vercel's @vercel/node will use it as the request handler
module.exports = app;

