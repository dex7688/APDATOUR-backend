// @ts-check
const express = require('express');
const router = express.Router();

// 로그아웃 요청처리
router.get('/', (req, res) => {
  res
    .clearCookie('user', {
      secure: true,
      sameSite: 'none',
    })
    .send(req.signedCookies);
});

module.exports = router;
