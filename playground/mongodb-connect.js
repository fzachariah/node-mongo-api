//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',function(error,db){

    if(error)
    {
        return console.log('Unable to connect mongodb');
    }
    console.log('Connected to mongodb server');

    db.collection('ToDos').insertOne({text:'Walk the dog',completed:false},function(err,result){

        if(error)
        {
            return console.log('Error Happend',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));

    });
    
    
//    db.collection('Users').insertOne({name:'Tess',age:25,location:"Charlotte"},function(err,result){
//
//        if(error)
//        {
//            return console.log('Error Happend',err);
//        }
//        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
//
//    });

    db.close();

});