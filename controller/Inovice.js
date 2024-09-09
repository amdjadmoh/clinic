const appError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Invoice = require('../models/Invoice');
exports.getAllInvoices = catchAsync(async (req, res, next) => {
    const invoices = await Invoice.findAll();
    res.status(200).json({
        status: 'success',
        data: {
            invoices
        }
    });
}
);

exports.getInvoice = catchAsync(async (req, res, next) => {
    const invoice = await Invoice.findByPk(req.params.id);
    if (!invoice) {
        return next(new appError('No invoice found with that ID', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            invoice
        }
    });
}
);


exports.createInvoice = catchAsync(async (req, res, next) => {
    const invoice = await Invoice.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            invoice
        }
    });
}
);

exports.updateInvoice = catchAsync(async (req, res, next) => {
    const invoice = await Invoice.findByPk(req.params.id);
    if (!invoice) {
        return next(new appError('No invoice found with that ID', 404));
    }
    await invoice.update(req.body);
    res.status(200).json({
        status: 'success',
        data: {
            invoice
        }
    });
}
);


exports.deleteInvoice = catchAsync(async (req, res, next) => {
    const invoice = await Invoice.findByPk(req.params.id);
    if (!invoice) {
        return next(new appError('No invoice found with that ID', 404));
    }
    await invoice.destroy();
    res.status(204).json({
        status: 'success',
        data: null
    });
}
);

exports.getPatientInvoices = catchAsync(async (req, res, next) => {
    const invoices = await Invoice.findAll({
        where: {
            patientID: req.params.patientID
        }
    });
    res.status(200).json({
        status: 'success',
        data: {
            invoices
        }
    });
}
);

exports.getPatientPendingInvoices = catchAsync(async (req, res, next) => {
    const invoices = await Invoice.findAll({
        where: {
            patientID: req.params.patientID,
            invoiceStatus: 'unpaid'
        }
    });
    res.status(200).json({
        status: 'success',
        data: {
            invoices
        }
    });
}
);
