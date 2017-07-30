var {mongoose} =require('./../server/db/mongoose');
const {ObjectID}=require('mongodb');
var {Todo}=require('./../server/models/todo');
var {User}=require('./../server/models/user');

//Todo.remove({}).then((reuslt)=>{
//    
//    console.log(result);
//});

Todo.findByIdAndRemove('597d6eb1309be619e53b627d').then((todo) =>{
    console.log(todo);
});