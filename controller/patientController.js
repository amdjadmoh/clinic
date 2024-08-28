const Patient = require('../models/Patient');
const appError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Sequelize = require('sequelize');
const { Op } = require('sequelize');

exports.searchPatient = catchAsync(async (req, res, next) => {
    const patients = await Patient.findAll({
        where: {
           name:{ [Op.like]: `%${req.query.name}%`},
        },
    });
    res.status(200).json({
        status: 'success',
        data: {
        patients,
        },
    });
    }
);

exports.getAllPatients = catchAsync(async (req, res, next) => {
    const patients = await Patient.findAll();
    res.status(200).json({
        status: 'success',
        data: {
        patients,
        },
    });
    }
);

exports.getPatient = catchAsync(async (req, res, next) => {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) {
        return next(new appError('Patient not found', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
        patient,
        },
    });
    }
);

exports.createPatient = catchAsync(async (req, res, next) => {
    const newPatient = await Patient.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
        patient: newPatient,
        },
    });
    }
);

exports.updatePatient = catchAsync(async (req, res, next) => {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) {
        return next(new appError('Patient not found', 404));
    }
    const updatedPatient = await patient.update(req.body);
    res.status(200).json({
        status: 'success',
        data: {
        patient: updatedPatient,
        },
    });
    }
);

exports.deletePatient = catchAsync(async (req, res, next) => {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) {
        return next(new appError('Patient not found', 404));
    }
    await patient.destroy();
    res.status(200).json({
        status: 'success',
        data: null,
    });
    }

);

