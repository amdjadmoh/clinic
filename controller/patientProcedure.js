const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Procedure = require('../models/PreDefinedProcedure');
const Invoice = require('../models/Invoice');
require('../models/InovicePatient');
require('../models/InvoiceProcedure');

exports.assignProcedureToInvoice = catchAsync(async (req, res, next) => {
    const { procedureID, invoiceID,quantity } = req.body;
    const procedure = await Procedure.findByPk(procedureID);
    if (!procedure) {
        return next(new AppError('No procedure found with that ID', 404));
    }
    const invoice = await Invoice.findByPk(invoiceID);
    if (!invoice) {
        return next(new AppError('No invoice found with that ID', 404));
    }
    await invoice.addPredefinedprocedure(procedure,{ through: { quantity: quantity } });
    await invoice.update({invoiceAmount: invoice.invoiceAmount + procedure.cost});
    res.status(200).json({
        status: 'success',
        data: {
            invoice
        }
    });
}
);

exports.unassignProcedureFromInvoice = catchAsync(async (req, res, next) => {
    const { procedureID, invoiceID } = req.body;
    const procedure = await Procedure.findByPk(procedureID);
    if (!procedure) {
        return next(new AppError('No procedure found with that ID', 404));
    }
    const invoice = await Invoice.findByPk(invoiceID);
    if (!invoice) {
        return next(new AppError('No invoice found with that ID', 404));
    }
    await invoice.removePredefinedprocedure(procedure);
    await invoice.update({invoiceAmount: invoice.invoiceAmount - procedure.cost});
    res.status(200).json({
        status: 'success',
        data: {
            invoice
        }
    });
}
);

exports.getProceduresByInvoice = catchAsync(async (req, res, next) => {
    const { invoiceID } = req.params;
    const invoice = await Invoice.findByPk(invoiceID);
    if (!invoice) {
        return next(new AppError('No invoice found with that ID', 404));
    }
    const procedures = await invoice.getPredefinedprocedures();
    res.status(200).json({
        status: 'success',
        data: {
            procedures
        }
    });
}
);
