var {mongoose} =require('./../server/db/mongoose');
const {ObjectID}=require('mongodb');
var {Todo}=require('./../server/models/todo');
var {User}=require('./../server/models/user');

var id="597ccb277903123c08251c7ff";

if(!ObjectID.isValid(id))
{
    return console.log('Id not valid');
}

//Todo.find({
//
//    _id: id
//
//}).then((todos)=>{
//    console.log('Todos',todos);
//});
//
//
//Todo.findOne({
//
//    _id: id
//
//}).then((todo)=>{
//    console.log('Todo One',todo);
//});

Todo.findById(id).then((todo)=>{

    if(!todo)
    {
        return console.log('Id not found');
    }
    console.log('Todo By id',todo);
}).catch((e) =>console.log(e));