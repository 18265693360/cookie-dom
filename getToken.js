const jwt = require('jsonwebtoken');


//jsonwebtoken 签名机制  就是为了签名
//签名后就是token
const token =  jwt.sign({
    //expire 过期时间
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    data: {
       //要签名的数据
       name:"zz",
       favorite: [
           "肉肉",
           "吉吉",
           "轻轻",
           "乐乐"
       ]
    }
}, 'biyao');
// }, 'secret');
// secret 签名秘钥作用
// md5 加密 加盐就是加点字符串进去token
// secret 可以改变

const token2 =  jwt.sign({
    //expire 过期时间
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    data: {
       //要签名的数据
       name:"zz",
       favorite: [
           "肉肉",
           "吉吉",
           "轻轻",
           "乐乐"
       ]
    }
}, 'GG');
//上下两个 token 不一样
console.log(token, 'token1');
console.log(token2, 'token2');


// 唯一标识符
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjI5OTE0MDksImRhdGEiOnsibmFtZSI6Inp6IiwiZmF2b3JpdGUiOlsi6IKJ6IKJIiwi5ZCJ5ZCJIiwi6L276L27Iiwi5LmQ5LmQIl19LCJpYXQiOjE1NjI5ODc4MDl9.bjBxUybNUaG2wsMWPne67t1cZw0pbKfvU8ioxzTY60E token1

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjI5OTE0MDksImRhdGEiOnsibmFtZSI6Inp6IiwiZmF2b3JpdGUiOlsi6IKJ6IKJIiwi5ZCJ5ZCJIiwi6L276L27Iiwi5LmQ5LmQIl19LCJpYXQiOjE1NjI5ODc4MDl9.8SF8WS4zyvNmSnnF43jMQEIqwwP3GDYxNT4470Usmbo token2


















