const Queue = require('../models/Queue');
const Doctor = require('../models/Doctors');
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

exports.getQueueByDep = catchAsync(async (req, res, next) => {
    const queues = await Queue.findAll({
        where: { depID: req.params.depID },
    });
    res.status(200).json({
        status: 'success',
        data: {
        queues,
        },
    });
    }
);

exports.getQueueByPatient = catchAsync(async (req, res, next) => {
    const queues = await Queue.findAll({
        where: { patientID: req.params.patientID },
    });
    res.status(200).json({
        status: 'success',
        data: {
        queues,
        },
    });
    }
);

exports.getQueueByStatus = catchAsync(async (req, res, next) => {
    const queues = await Queue.findAll({
        where: { status: req.params.status },
    });
    res.status(200).json({
        status: 'success',
        data: {
        queues,
        },
    });
    }
);

exports.getQueueByNumber = catchAsync(async (req, res, next) => {
    const queues = await Queue.findAll({
        where: { queueNumber: req.params.queueNumber },
    });
    res.status(200).json({
        status: 'success',
        data: {
        queues,
        },
    });
    }
);

exports.getQueueByDate = catchAsync(async (req, res, next) => {
    const queues = await Queue.findAll({
        where: { date: req.params.date },
    });
    res.status(200).json({
        status: 'success',
        data: {
        queues,
        },
    });
    }
);

exports.getQueueByDoctor = catchAsync(async (req, res, next) => {
    console.log(req.params.doctorID);

    const doctor = await Doctor.findOne({
        where: { id: req.params.doctorID },
        attributes: ['depID']
    });
    if (!doctor){
        return next(new appError('Doctor not found', 404));
    }
    console.log(doctor);
    const queues= await Queue.findAll({where:{depID:doctor.depID}})
    res.status(200).json({
        status: 'success',
        data: {
        queues,
        },
    });
    }
);

exports.getQueueByDepDate = catchAsync(async (req, res, next) => {
    const queues = await Queue.findAll({
        where: { depID: req.params.depID, date: req.params.date },
    });
    res.status(200).json({
        status: 'success',
        data: {
        queues,
        },
    });
    }
);

exports.getQueueByDepStatus = catchAsync(async (req, res, next) => {
    const queues = await Queue.findAll({
        where: { depID: req.params.depID, status: req.params.status },
    });
    res.status(200).json({
        status: 'success',
        data: {
        queues,
        },
    });
    }
);

exports.getQueueByDepNumber = catchAsync(async (req, res, next) => {
    const queues = await Queue.findAll({
        where: { depID: req.params.depID, queueNumber: req.params.queueNumber },
    });
    res.status(200).json({
        status: 'success',
        data: {
        queues,
        },
    });
    }
);

exports.getQueueByDoctorDate = catchAsync(async (req, res, next) => {
    const doctor = await Doctor.findOne({
        where: { id: req.params.doctorID },
    });
    if (!doctor){
        return next(new appError('Doctor not found', 404));
    }
    const queues = await Queue.findAll({
        where: { depID: doctor.depID, date: req.params.date },
    });
    res.status(200).json({
        status: 'success',
        data: {
        queues,
        },
    });
    }

);

exports.getQueueByDoctorStatus = catchAsync(async (req, res, next) => {
    const doctor = await Doctor.findOne({
        where: { id: req.params.doctorID },
    });
    if (!doctor){
        return next(new appError('Doctor not found', 404));
    }
    const queues = await Queue.findAll({
        where: {  status: req.params.status, depID: doctor.depID },
    });
    res.status(200).json({
        status: 'success',
        data: {
        queues,
        },
    });
    }
);

exports.getQueueByDoctorNumber = catchAsync(async (req, res, next) => {
    const doctor = await Doctor.findOne({
        where: { id: req.params.doctorID },
    });
    if (!doctor){
        return next(new appError('Doctor not found', 404));
    }
    const queues = await Queue.findAll({
        where: {  queueNumber: req.params.queueNumber , depID: doctor.depID },
    });
    res.status(200).json({
        status: 'success',
        data: {
        queues,
        },
    });
    }
);

exports.getQueueByDateStatus = catchAsync(async (req, res, next) => {
    const queues = await Queue.findAll({
        where: { date: req.params.date, status: req.params.status },
    });
    res.status(200).json({
        status: 'success',
        data: {
        queues,
        },
    });
    }
);

exports.getQueueByDateNumber = catchAsync(async (req, res, next) => {
    const queues = await Queue.findAll({
        where: { date: req.params.date, queueNumber: req.params.queueNumber },
    });
    res.status(200).json({
        status: 'success',
        data: {
        queues,
        },
    });
    }
);

exports.getQueueByStatusNumber = catchAsync(async (req, res, next) => {
    const queues = await Queue.findAll({
        where: { status: req.params.status, queueNumber: req.params.queueNumber },
    });
    res.status(200).json({
        status: 'success',
        data: {
        queues,
        },
    });
    }
);

exports.getQueueByDepDateStatus = catchAsync(async (req, res, next) => {
    const queues = await Queue.findAll({
        where: { depID: req.params.depID, date: req.params.date, status: req.params.status },
    });
    res.status(200).json({
        status: 'success',
        data: {
        queues,
        },
    });
    }
);

exports.getQueueByDepDateNumber = catchAsync(async (req, res, next) => {
    const queues = await Queue.findAll({
        where: { depID: req.params.depID, date: req.params.date, queueNumber: req.params.queueNumber },
    });
    res.status(200).json({
        status: 'success',
        data: {
        queues,
        },
    });
    }
);













