const patientController = require('../controller/patientController');
const express = require('express');
const router = express.Router();

router
.get('/', patientController.getAllPatients)
.post('/', patientController.createPatient)
.get('/:id', patientController.getPatient)
.patch('/:id', patientController.updatePatient)
.delete('/:id', patientController.deletePatient);

module.exports = router;