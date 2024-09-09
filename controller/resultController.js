const {result, resultType} = require ('../models/ResultResultType');
const db = require ('../config/database');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.createResult = catchAsync(async (req, res, next) => {
    const newResult = await result.create({
        ...req.body,
        resultAttachment: req.file ? `/results/${req.file.filename}` : null
    });
    res.status(201).json({
        status: 'success',
        data: {
            newResult
        }
    });
}
);

exports.getAllResults = catchAsync(async (req, res, next) => {
    const results = await result.findAll();
    res.status(200).json({
        status: 'success',
        data: {
            results
        }
    });
}
);

exports.getResult = catchAsync(async (req, res, next) => {
    const Theresult = await result.findByPk(req.params.id);
    if (!Theresult) {
        return next(new AppError('No result found with that ID', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            Theresult
        }
    });
}
);

exports.updateResult = catchAsync(async (req, res, next) => {
    const Theresult = await result.findByPk(req.params.id);
    if (!Theresult) {
        return next(new AppError('No result found with that ID', 404));
    }
    await result.update(req.body);
    res.status(200).json({
        status: 'success',
        data: {
            Theresult
        }
    });
}
);

exports.deleteResult = catchAsync(async (req, res, next) => {
    const Theresult = await result.findByPk(req.params.id);
    if (!Theresult) {
        return next(new AppError('No result found with that ID', 404));
    }
    await Theresult.destroy();
    res.status(204).json({
        status: 'success',
        data: null
    });
}
);

exports.getResultByType = catchAsync(async (req, res, next) => {
    const results = await result.findAll({
        where: {
            resultTypeID: req.params.resultTypeID
        }
    });
    res.status(200).json({
        status: 'success',
        data: {
            results
        }
    });
}
);

exports.getResultByPatient = catchAsync(async (req, res, next) => {
    const results = await result.findAll({
        where: {
            patientID: req.params.patientID
        }
    });
    res.status(200).json({
        status: 'success',
        data: {
            results
        }
    });
}
);




