const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const ResultType = require('../models/ResultType');
const Dep = require('../models/Dep');
const sequelize = require('../config/database');

exports.createResultType = catchAsync(async (req, res, next) => {
    const resultType = await ResultType.create(req.body);
    console.log('here',resultType);
    res.status(201).json({
        status: 'success',
        data: {
            resultType
        }
    });
});

exports.getAllResultTypes = catchAsync(async (req, res, next) => {
    const resultTypes = await ResultType.findAll();
    res.status(200).json({
        status: 'success',
        data: {
            resultTypes
        }
    });
}
);

exports.getResultType = catchAsync(async (req, res, next) => {
    const resultType = await ResultType.findByPk(req.params.id);
    if (!resultType) {
        return next(new AppError('No result type found with that ID', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            resultType
        }
    });
}
);

exports.updateResultType = catchAsync(async (req, res, next) => {
    const resultType = await ResultType.findByPk(req.params.id);
    if (!resultType) {
        return next(new AppError('No result type found with that ID', 404));
    }
    await resultType.update(req.body);
    res.status(200).json({
        status: 'success',
        data: {
            resultType
        }
    });
}
);

exports.deleteResultType = catchAsync(async (req, res, next) => {
    const resultType = await ResultType.findByPk(req.params.id);
    if (!resultType) {
        return next(new AppError('No result type found with that ID', 404));
    }
    await resultType.destroy();
    res.status(204).json({
        status: 'success',
        data: null
    });
}
);

exports.getResultTypeByDep = catchAsync(async (req, res, next) => {
    const resultTypes = await ResultType.findAll({
        where: {
            resultDep: req.params.dep
        }
    });
    res.status(200).json({
        status: 'success',
        data: {
            resultTypes
        }
    });
}
);



