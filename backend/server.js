// 필요 모듈 설정
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// HTTPS
const PORT = 4000;

// local
// const PORT = 4500;

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(
  session({
    secret: 'wooseok',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 },
  })
);
app.use(cookieParser('dex'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const signupRouter = require('./routes/register');
const reviewRouter = require('./routes/review');
const addLikeRouter = require('./routes/likes');

app.use('/test', (req, res) => {
  res.send('test 성공');
});
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/register', signupRouter);
app.use('/review', reviewRouter);
app.use('/addLike', addLikeRouter);

app.listen(PORT, () => {
  console.log(`데이터 통신 서버가 ${PORT}에서 작동 중입니다!`);
});
