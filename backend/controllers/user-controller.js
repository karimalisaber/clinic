const express = require('express');
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


exports.createUser =  (req, res, next)=>{
  bcrypt.hash(req.body.password, 10 ).then(hash=>{

    const user  = new User ({
      email: req.body.email,
      password: hash
    })

    console.log(user);

    user.save()
      .then(result=>{
        console.log(result);
        res.status(201).json({
          message: 'user Created',
          result
        })
      })

      .catch(err=>{
        res.status(500).json({
          err,

        })
      })
  })
}

exports.userLogin = (req, res, next)=>{
  let fetchedUser;

  User.findOne({
    email: req.body.email
  }).then(user=>{
    fetchedUser = user

    if(!user){
      return res.status(401).json({
        message : 'Invalid Credientials'
      })
    }

    return bcrypt.compare(req.body.password, user.password)
  })
    .then(result=>{
      if(!result){
        return res.status(401).json({
          message : 'Invalid Credientials'
        })
      }

      const token = jwt.sign({email: fetchedUser.email, userId: fetchedUser._id}, process.env.JWT_KEY,{
        expiresIn: '1h'
      } ) // body of token ;

      res.status(200).json({
        expiresIn: 3600,
        data: {
          token,
          role: fetchedUser.role
        }
      })
    })
    .catch(err=>{
      return res.status(401).json({
        message : 'Auth Failed'
      })
    })
}
