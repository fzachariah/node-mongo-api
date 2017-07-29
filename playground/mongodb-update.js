const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',function(error,db){

    if(error)
    {
        return console.log('Unable to connect mongodb');
    }
    console.log('Connected to mongodb server');
    
    
    db.collection('ToDos').findOneAndUpdate({_id:new ObjectID("597c9e3939da1c18c03259c5")},{
     $set:{
         completed:true
     }   
    },{returnOriginal:false},function(err,result){
        
    });


});