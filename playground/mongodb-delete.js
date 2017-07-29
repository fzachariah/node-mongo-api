const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',function(error,db){

    if(error)
    {
        return console.log('Unable to connect mongodb');
    }
    console.log('Connected to mongodb server');

//    db.collection('ToDos').deleteMany({text:'Eat lunch'},function(error,result){
//        console.log(result);
//    });
    
    
//    db.collection('ToDos').deleteOne({text:'Eat lunch'},function(error,result){
//        console.log(result);
//    });
    
    db.collection('ToDos').findOneAndDelete({text:'Eat lunch'},function(error,result){
        console.log(result);
    });



});