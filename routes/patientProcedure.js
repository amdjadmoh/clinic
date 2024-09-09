const express = require('express');
const patientProcedureController = require('../controller/patientProcedure');

const router = express.Router();

router
  .route('/:invoiceID')
  .get(patientProcedureController.getProceduresByInvoice);

router
  .route('/assign')
  .post(patientProcedureController.assignProcedureToInvoice);

router
  .route('/unassign')
  .post(patientProcedureController.unassignProcedureFromInvoice);

module.exports = router;