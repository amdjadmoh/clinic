const Prescription = require('../models/Prescription');
const PrescriptionDetails = require('../models/PrescriptionDetails');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

// Get all prescriptions
exports.getAllPrescriptions = catchAsync(async (req, res, next) => {
    const prescriptions = await Prescription.findAll();
    res.status(200).json({
        status: 'success',
        data: {
            prescriptions,
        },
    });
});

// Get a single prescription by ID
exports.getPrescription = catchAsync(async (req, res, next) => {
    const prescription = await Prescription.findByPk(req.params.id);
    if (!prescription) {
        return next(new AppError('Prescription not found', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            prescription,
        },
    });
});

// Create a new prescription
exports.createPrescription = catchAsync(async (req, res, next) => {
    const prescription = await Prescription.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            prescription,
        },
    });
});

// Update a prescription by ID
exports.updatePrescription = catchAsync(async (req, res, next) => {
    const prescription = await Prescription.findByPk(req.params.id);
    if (!prescription) {
        return next(new AppError('Prescription not found', 404));
    }
    await prescription.update(req.body);
    res.status(200).json({
        status: 'success',
        data: {
            prescription,
        },
    });
});

// Delete a prescription by ID
exports.deletePrescription = catchAsync(async (req, res, next) => {
    const prescription = await Prescription.findByPk(req.params.id);
    if (!prescription) {
        return next(new AppError('Prescription not found', 404));
    }
    await prescription.destroy();
    res.status(200).json({
        status: 'success',
        data: null,
    });
});

exports.getPrescriptionsByPatient = catchAsync(async (req, res, next) => {
    const prescriptions = await Prescription.findAll({
        where: {
            patientID: req.params.patientID,
        },
    });
    res.status(200).json({
        status: 'success',
        data: {
            prescriptions,
        },
    });
});

exports.getPrescriptionsByDoctor = catchAsync(async (req, res, next) => {
    const prescriptions = await Prescription.findAll({
        where: {
            doctorID: req.params.doctorID,
        },
    });
    res.status(200).json({
        status: 'success',
        data: {
            prescriptions,
        },
    });
});

exports.getAllPrescriptionDetails = catchAsync(async (req, res, next) => {
    const prescriptionDetails = await PrescriptionDetails.findAll();
    res.status(200).json({
        status: 'success',
        data: {
            prescriptionDetails,
        },
    });
});

exports.getPrescriptionDetail = catchAsync(async (req, res, next) => {
    const prescriptionDetail = await PrescriptionDetails.findByPk(req.params.id);
    if (!prescriptionDetail) {
        return next(new AppError('Prescription detail not found', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            prescriptionDetail,
        },
    });
});

// Create a new prescription detail
exports.createPrescriptionDetail = catchAsync(async (req, res, next) => {
    const prescriptionDetail = await PrescriptionDetails.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            prescriptionDetail,
        },
    });
});

// Update a prescription detail by ID
exports.updatePrescriptionDetail = catchAsync(async (req, res, next) => {
    const prescriptionDetail = await PrescriptionDetails.findByPk(req.params.id);
    if (!prescriptionDetail) {
        return next(new AppError('Prescription detail not found', 404));
    }
    await prescriptionDetail.update(req.body);
    res.status(200).json({
        status: 'success',
        data: {
            prescriptionDetail,
        },
    });
});

// Delete a prescription detail by ID
exports.deletePrescriptionDetail = catchAsync(async (req, res, next) => {
    const prescriptionDetail = await PrescriptionDetails.findByPk(req.params.id);
    if (!prescriptionDetail) {
        return next(new AppError('Prescription detail not found', 404));
    }
    await prescriptionDetail.destroy();
    res.status(200).json({
        status: 'success',
        data: null,
    });
});

exports.getPrescriptionDetailsByPrescription = catchAsync(async (req, res, next) => {
    const prescriptionDetails = await PrescriptionDetails.findAll({
        where: {
            prescriptionID: req.params.prescriptionID,
        },
    });
    res.status(200).json({
        status: 'success',
        data: {
            prescriptionDetails,
        },
    });
});

exports.deletePrescriptionDetailsByPrescription = catchAsync(async (req, res, next) => {
    await PrescriptionDetails.destroy({
        where: {
            prescriptionID: req.params.prescriptionID,
        },
    });
    res.status(200).json({
        status: 'success',
        data: null,
    });
});



