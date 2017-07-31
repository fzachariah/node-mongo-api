var {SHA256} = require("crypto-js");
const bcrypt=require('bcryptjs');

var password='123abc!';
bcrypt.genSalt(10,(error,salt)=>{
    bcrypt.hash(password,salt,(err,hash)=>{
        console.log(hash);
    })
});

var hashedPassword='$2a$10$nuMmbyZeRxaoVdqaZ.4dnOlzCKo6Mn3oHiKVfE0.WikFc3yPxbyuu';

bcrypt.compare(password,hashedPassword,(err,res)=>{
    console.log(res);
});
//const jwt=require('jsonwebtoken');
//
//var data={
//    id:10
//};
//
//var token= jwt.sign(data,'123abc');
//console.log(token);
//
//
//var decode=jwt.verify(token,'123abc');
//console.log(decode);

//var message ='i am user number 3';
//
//var hash=SHA256(message).toString();
//
//console.log('Encrypted',hash);
//
//var data={
//    id:4
//};
//
//var token={
//    data,
//    hash:SHA256(JSON.stringify(data)+'some secret').toString()
//}
//
//var resultHash=SHA256(JSON.stringify(token.data)+'some secret').toString();
//
//if(resultHash===token.hash)
//{
//    console.log('not changed')
//}
//
//else{
//    console.log('data was changed');
//}