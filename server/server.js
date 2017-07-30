var express =require('express');
var bodyParser=require('body-parser');
var app=express();

const port=process.env.PORT || 3000;


var {mongoose} =require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');

app.use(bodyParser.json());

app.post('/todos',function(req,res){

    var toDo=new Todo({
        text:req.body.text
    });

    toDo.save().then((doc) =>{

        res.send(doc);
    }, (e) =>{

        res.status(400).send(e);

    });

});

app.get('/todos',function(req,res){

    Todo.find().then((todos) =>{

        res.send({todos});
    },(e) =>{
        res.status(400).send(e);

    });
});





app.listen(port,function(){

    console.log('Server is Up at Port No: '+port);

});

module.exports={app};
