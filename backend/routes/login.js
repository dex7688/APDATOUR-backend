// @ts-check
const express = require('express');
const router = express.Router();
const db = require('../controllers/userController');

// 로그인 요청처리
router.get('/check', (req, res) => {
  const cookies = req.signedCookies;

  if (req.signedCookies.user) {
    res.send({ cookie: req.signedCookies.user, session: req.session.login });
  } else {
    res.send('로그인정보없음');
  }
});

router.post('/', async (req, res) => {
  const loginResult = await db.login(req.body);

  if (loginResult.result) {
    req.session.login = true;
    req.session.userId = req.body.email;

    res.cookie('user', req.body.email, {
      maxAge: 1000 * 60 * 60,
      httpOnly: true,
      signed: true,
    });

    res.send(loginResult);
  }
});

module.exports = router;
