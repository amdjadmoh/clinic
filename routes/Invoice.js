const express = require('express');
const invoiceController = require('../controller/Inovice');

const router = express.Router();

router
    .route('/')
    .get(invoiceController.getAllInvoices)
    .post(invoiceController.createInvoice);

router
    .route('/:id')
    .get(invoiceController.getInvoice)
    .patch(invoiceController.updateInvoice)
    .delete(invoiceController.deleteInvoice);

router
    .route('/patient/:patientID')
    .get(invoiceController.getPatientInvoices);

router
    .route('/patient/:patientID/pending')
    .get(invoiceController.getPatientPendingInvoices);

module.exports = router;