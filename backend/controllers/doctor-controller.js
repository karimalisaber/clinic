const express = require('express');
const Doctor = require('../models/Doctor')


exports.getAllPaitientsOrders = (req, res, next)=>{
  const pageSize = +req.query.pageSize || 10;
  const current_page = +req.query.page || 1;

  const query = Doctor.find();

  let orders;

  if(pageSize && current_page){
    query
      .skip(pageSize * (current_page - 1 ))
      .limit(pageSize)
  }


  query.then(orders_response=>{
    data = orders_response;

    return Doctor.count()

    }).then(count=>{
      let last_page ;
      if(count < pageSize ){
        last_page = 1;
      }else{
        last_page = Math.ceil((count / pageSize ))
      }

      res.status(200).json({ // you don't have to use return as it is the last item
        message : 'success ',
        data,
        count,
        current_page,
        last_page
      });
   })

}

exports.getAllPaitientFiles = (req, res, next)=>{
  const pageSize = +req.query.pageSize || 10;
  const currentPage = +req.query.currentPage || 1;

  const query = Doctor.find();

  let orders;

  // if(pageSize && currentPage){
  //   query
  //     .skip(pageSize * (currentPage - 1 ))
  //     .limit(pageSize)
  // }


  query.then(orders_response=>{
    data = orders_response;

    return Doctor.count()

    }).then(count=>{
      let last_page ;
      if(count < pageSize ){
        last_page = 1;
      }else{
        last_page = Math.ceil((count / pageSize ))
      }

      res.status(200).json({ // you don't have to use return as it is the last item
        message : 'success ',
        data,
        count,
        current_page: currentPage ||  1,
        last_page
      });
   })

}



exports.addPatient =
(req, res, next)=>{
  const body = req.body; // body is an extra field added by body-parser

  // const url = req.protocol + '://' + req.get('host');

  const patient = new Doctor({
    name: body.name,
    address: body.address,
    phone: body.phone,
    age: body.age,
    father_name: body.father_name,
    father_job: body.father_job,
    father_age: body.father_age,
    mather_name: body.mather_name,
    mather_age: body.mather_age,
    number_of_births: body.number_of_births,
    mather_job: body.mather_job ,
    date: body.date,
    note: body.note,
    relation_type: body.relation_type
  })

  patient.save().then(newPatient=>{
    res.status(201).json({
      message: 'post added successfuly',
      post : {
        ...newPatient._doc
      }
    })
  })
}


exports.getPatient = (req, res, next)=>{
  Doctor.findById(req.params.id).then(patient=>{
    if(patient){
      res.status(200).json({ // you don't have to use return as it is the last item
      data : patient
    });
    } else{
      res.status(404).json({ // you don't have to use return as it is the last item
       message : 'Invalid Id '
     });
    }
  })
}


exports.updatePatinet = (req, res, next)=>{
  const updatedPatient = new Doctor({
    ...req.body
  })

  updatedPatient.updateOne({_id: updatedPatient._id}, updatedPatient).then(patient=>{
    if(patient){
      res.status(200).json({
        message: 'updated Successfully',
        data: req.body
      })
    }
  }
  )


}
