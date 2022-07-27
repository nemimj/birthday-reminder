const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();


mongoose.connect('mongodb://localhost:27017/birthday-reminder')


const birthSChema = new mongoose.Schema({
    email:String,
    name:String,
    dateOfBirth:String
})


const birth = mongoose.model('date',birthSChema);


app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
   res.sendFile(__dirname+"/index.html")
})


app.post('/',function(req,res){

    const user = new birth({
        email:req.body.email,
        name:req.body.birthday,
        dateOfBirth:req.body.date
    })
    user.save();
    res.send("<h1>Data saved successfully</h1>")
  
})

app.listen(3000,function(){
    console.log("Server has started");
})