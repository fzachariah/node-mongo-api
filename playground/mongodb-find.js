const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',function(error,db){

    if(error)
    {
        return console.log('Unable to connect mongodb');
    }
    console.log('Connected to mongodb server');

//    db.collection('ToDos').find({
//        _id:new ObjectID("597c9e3939da1c18c03259c5")}).toArray().then(function(docs){
//        console.log(JSON.stringify(docs,undefined,2));
//    },function(err){
//        console.log('Unable to fetch todos',err);
//    });
    
    db.collection('Users').find({name:'Febin'
    }).toArray().then(function(docs){
        console.log(JSON.stringify(docs,undefined,2));
    },function(err){
        console.log('Unable to fetch todos',err);
    });
    
    
    
//    db.collection('ToDos').find().count().then(function(count){
//        console.log(count);
//    },function(err){
//        console.log('Unable to fetch count',err);
//    });
    
   //db.close();

});