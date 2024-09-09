const PreDefinedProcedure = require('../models/PreDefinedProcedure');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const { Op } = require('sequelize');

exports.getAllPreDefinedProcedures = catchAsync(async (req, res, next) => {
    const preDefinedProcedures = await PreDefinedProcedure.findAll();
    res.status(200).json({
        status: 'success',
        data: {
            preDefinedProcedures
        }
    });
}
);

exports.getPreDefinedProcedure = catchAsync(async (req, res, next) => {
    const preDefinedProcedure = await PreDefinedProcedure.findByPk(req.params.id);
    if (!preDefinedProcedure) {
        return next(new AppError('No preDefinedProcedure found with that ID', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            preDefinedProcedure
        }
    });
}
);

exports.createPreDefinedProcedure = catchAsync(async (req, res, next) => {
    const preDefinedProcedure = await PreDefinedProcedure.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            preDefinedProcedure
        }
    });
}
);

exports.updatePreDefinedProcedure = catchAsync(async (req, res, next) => {
    const preDefinedProcedure = await PreDefinedProcedure.findByPk(req.params.id);
    if (!preDefinedProcedure) {
        return next(new AppError('No preDefinedProcedure found with that ID', 404));
    }
    await preDefinedProcedure.update(req.body);
    res.status(200).json({
        status: 'success',
        data: {
            preDefinedProcedure
        }
    });
}
);

exports.deletePreDefinedProcedure = catchAsync(async (req, res, next) => {
    const preDefinedProcedure = await PreDefinedProcedure.findByPk(req.params.id);
    if (!preDefinedProcedure) {
        return next(new AppError('No preDefinedProcedure found with that ID', 404));
    }
    await preDefinedProcedure.destroy();
    res.status(204).json({
        status: 'success',
        data: null
    });
}
);

exports.searchPreDefinedProcedure = catchAsync(async (req, res, next) => {
    const preDefinedProcedures = await PreDefinedProcedure.findAll({
        where: {
            procedureName: {
                [Op.like]: `%${req.query.procedureName}%`
            }
        }
    });
    res.status(200).json({
        status: 'success',
        data: {
            preDefinedProcedures
        }
    });
});