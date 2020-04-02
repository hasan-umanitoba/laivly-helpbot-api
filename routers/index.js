const express = require('express');
const router = express.Router();

const actionRouter = require('./action-router');

router
  .use('/actions', actionRouter)
  //.use('/test', testRouter)
;

module.exports = router;