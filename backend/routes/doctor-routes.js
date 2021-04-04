// all_orders_patients
const express = require('express')
const router = express.Router()
const doctorControler = require('../controllers/doctor-controller')

router.get('/all_orders_patients', doctorControler.getAllPaitientsOrders)
router.get('/all_patient', doctorControler.getAllPaitientFiles)

router.post('/add_patient', doctorControler.addPatient)

router.get('/specific_patient/:id', doctorControler.getPatient)

router.post('/update_patient_data', doctorControler.updatePatinet) // put



module.exports = router
