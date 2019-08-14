//解密 token
const jwt = require('jsonwebtoken');
const token1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjI5OTE0MDksImRhdGEiOnsibmFtZSI6Inp6IiwiZmF2b3JpdGUiOlsi6IKJ6IKJIiwi5ZCJ5ZCJIiwi6L276L27Iiwi5LmQ5LmQIl19LCJpYXQiOjE1NjI5ODc4MDl9.bjBxUybNUaG2wsMWPne67t1cZw0pbKfvU8ioxzTY60E';

//解码token                         秘钥
// var decoded = jwt.verify(token, 'shhhhh');
// var decoded = jwt.verify(token, 'shhhhh');
// console.log(decoded.foo) // bar

// verify a token symmetric
// jwt.verify(token, 'shhhhh', function(err, decoded) {
//     console.log(decoded.foo) // bar
// });

jwt.verify(token1, 'biyao',function (err, decode) {
    if (err){
       throw new Error(err)
    } else{
        console.log(decode);
    }
});

