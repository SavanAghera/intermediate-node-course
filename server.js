const express= require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const User=require('./models/User');
const port=8000;
const app= express();

app.use(bodyParser.json());

async function connectToMongoDb() {
  await mongoose.connect('mongodb://127.0.0.1:27017/userData');
}
connectToMongoDb().then(() => console.log('connected to mongo')).catch(err => console.log(err));
app.listen(port, ()=>{
	console.log(`server is listening on port:${port}`)
})

// CREATE
app.post('/users',(req,res)=>{
  // User.create()
})

app.route('/users/:id')
// READ
.get((req,res)=>{
  // User.findById()
})
// UPDATE
.put((req,res)=>{
  // User.findByIdAndUpdate()
})
// DELETE
.delete((req,res)=>{
  // User.findByIdAndDelete()
})