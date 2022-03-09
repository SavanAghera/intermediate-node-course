const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');
const port = 8000;
const app = express();

app.use(bodyParser.json());

async function connectToMongoDb() {
  await mongoose.connect('mongodb://127.0.0.1:27017/userData');
}
connectToMongoDb().then(() => console.log('connected to mongo')).catch(err => console.log(err));
app.listen(port, () => {
  console.log(`server is listening on port:${port}`)
})

// CREATE
app.post('/users', (req, res) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }, (err, data) => {
    if (err) {
      res.json({ success: false, message: err })
    } else if (!data) {
      res.json({ success: false, message: 'not found' })

    } else {
      res.json({ success: true, message: data })

    }
  })
})

app.route('/users/:id')
  // READ
  .get((req, res) => {
    User.findById(req.params.id, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: err
        })
      } else if (!data) {
        res.json({
          success: false,
          message: "Not Found"
        })
      } else {
        res.json({
          success: true,
          data: data
        })
      }
    })
  })
  // UPDATE
  .put((req, res) => {
    // User.findByIdAndUpdate()
  })
  // DELETE
  .delete((req, res) => {
    // User.findByIdAndDelete()
  })