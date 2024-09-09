const express = require('express');
const resultController = require('../controller/resultController');
const uploadResultFile = require('../utils/uploadingFile');

const router = express.Router();

// Define routes for Result
router.post('/',uploadResultFile, resultController.createResult);
router.get('/', resultController.getAllResults);
router.get('/:id', resultController.getResult);
router.patch('/:id', resultController.updateResult);
router.delete('/:id', resultController.deleteResult);
router.get('/type/:resultTypeID', resultController.getResultByType);
router.get('/patient/:patientID', resultController.getResultByPatient);

module.exports = router;