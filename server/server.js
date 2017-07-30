var express =require('express');
var bodyParser=require('body-parser');
const {ObjectID}=require('mongodb');
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


app.get('/todos/:id',function(req,res){

    var id=req.params.id;

    if(!ObjectID.isValid(id))
    {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) =>{

        if(!todo)
        {
            return res.status(404).send();
        }
        
        res.send({todo});

    }).catch((e) =>{
        res.status(404).send();
    })
});





app.listen(port,function(){

    console.log('Server is Up at Port No: '+port);

});

module.exports={app};
