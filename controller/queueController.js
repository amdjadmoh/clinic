const Queue = require('../models/Queue');
const appError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Sequelize = require('sequelize');

exports.getAllQueues = catchAsync(async (req, res, next) => {
    const queues = await Queue.findAll();
    res.status(200).json({
        status: 'success',
        data: {
        queues,
        },
    });
    }
);

exports.getQueue = catchAsync(async (req, res, next) => {
    const queue = await Queue.findByPk(req.params.id);
    if (!queue) {
        return next(new appError('Queue not found', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
        queue,
        },
    });
    }
);

exports.addToQueue = catchAsync(async (req, res, next) => {
    const { depID } = req.body;
    if (!depID) {
        return next(new appError('Department ID is required', 400));
    }
    const lastQueue = await Queue.findOne({
        where: { depID },
        order: [['createdAt', 'DESC']],
    });
    const queueNumber = lastQueue ? lastQueue.queueNumber + 1 : 1;
    const newQueue = await Queue.create({
        ...req.body, queueNumber: queueNumber, });
       res.status(201).json({
        status: 'success',
        data: {
        queue: newQueue,
        },
    });
    }
);

exports.updateQueue = catchAsync(async (req, res, next) => {
    const queue = await Queue.findByPk(req.params.id);
    if (!queue) {
        return next(new appError('Queue not found', 404));
    }
    const updatedQueue = await queue.update(req.body);
    res.status(200).json({
        status: 'success',
        data: {
        queue: updatedQueue,
        },
    });
    }
);

exports.deleteQueue = catchAsync(async (req, res, next) => {
    const queue = await Queue.findByPk(req.params.id);
    if (!queue) {
        return next(new appError('Queue not found', 404));
    }
    await queue.destroy();
    res.status(200).json({
        status: 'success',
        data: null,
    });
    }
);



