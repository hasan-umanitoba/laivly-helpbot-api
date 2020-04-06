const express = require('express');
const router = express.Router();

const listenerRouter = require('./listener-router');

router
  .use('/listeners', listenerRouter)
  //.use('/test', testRouter)
;

module.exports = router;