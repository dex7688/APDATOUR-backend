// @ts-check

const express = require('express');
const router = express.Router();
const db = require('../controllers/userController');

router.post('/', async (req, res) => {
  const result = await db.addLike(req.body);
  res.header('Access-Control-Allow-Origin', '*');
  res.send(JSON.stringify(result));
});

router.post('/isCheck', async (req, res) => {
  const result = await db.isCheck(req.body);
  res.header('Access-Control-Allow-Origin', '*');
  res.send(JSON.stringify(result));
});

module.exports = router;
