const Doctors = require("../models/Doctors");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const sequelize = require("sequelize");

exports.getAllDoctors = catchAsync(async (req, res, next) => {
  const doctors = await Doctors.findAll();
  res.status(200).json({
    status: "success",
    data: {
      doctors,
    },
  });
});

exports.getDoctor = catchAsync(async (req, res, next) => {
  const doctor = await Doctors.findByPk(req.params.id);
  if (!doctor) {
    return next(new AppError("Doctor not found", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      doctor,
    },
  });
});

exports.createDoctor= catchAsync(
    async (req,res,next)=>{
        const newDoctor= await Doctors.create(req.body);
        res.status(201).json({
            status:'success',
            data:{
                doctor:newDoctor,
            },
        });
    }
);

exports.updateDoctor= catchAsync(
    async (req,res,next)=>{
        const doctor= await Doctors.findByPk(req.params.id);
        if(!doctor){
            return next(new AppError('Doctor not found',404));
        }
        const updatedDoctor= await doctor.update(req.body);
        res.status(200).json({
            status:'success',
            data:{
                doctor:updatedDoctor,
            },
        });
    }
);
 exports.deleteDoctor= catchAsync(
    async (req,res,next)=>{
        const doctor = await Doctors.findByPk(req.params.id);
        if(!doctor){
            return next(new AppError('Doctor not found',404));
        }
        await doctor.destroy();
        res.status(200).json({
            status:'success',
            message:"Doctor deleted successfully",
        });
    }
);