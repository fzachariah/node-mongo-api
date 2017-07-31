var {SHA256} = require("crypto-js");

const jwt=require('jsonwebtoken');

var data={
    id:10
};

var token= jwt.sign(data,'123abc');
console.log(token);


var decode=jwt.verify(token,'123abc');
console.log(decode);

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