const express = require('express');

const app = express();

const mongoose  = require('mongoose');

// const path = require('path')

// const postsRoute = require('../routes/posts')
const userRoute = require('../backend/routes/user-routes')
const doctorRoute = require('../backend/routes/doctor-routes')

mongoose.connect("mongodb+srv://karim:" + process.env.MONGO_ATLAS_PW + "@cluster0.gbzge.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(res=>{
  console.log('connect data base successfully');
}).catch(err=>{
  console.log('error with connecting to database');
})

app.use(express.json())

// // app.use(bodyParser.urlencoded({extended: false}))

// app.use("/images", express.static(path.join('src/backend/images')))
// // app.use("/src/backend/images", express.static())

app.use((req, res , next )=>{
  res.setHeader('Access-Control-Allow-Origin', "*"); // no matter which domain sent the request
  res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-with, Content-Type, Accept, Authorization"); // which Headers allowed
  res.setHeader('Access-Control-Allow-Methods', "GET, POST, PATCH, PUT, DELETE, OPTIONS"); // no matter which domain sent the request
  // options implicit request sent by the browser
  next();
})

// app.use("/api/posts", postsRoute)

app.use("/api/user", userRoute)
app.use("/api/doctor", doctorRoute)

module.exports = app
