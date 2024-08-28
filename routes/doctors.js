const exporess=require('express');
const doctorsController=require('../controller/doctorsController');

const router=exporess.Router();

router
.route('/')
.get(doctorsController.getAllDoctors)
.post(doctorsController.createDoctor);
router 
.route('/search')
.get(doctorsController.searchDoctor);
router
.route('/:id')
.get(doctorsController.getDoctor)
.patch(doctorsController.updateDoctor)
.delete(doctorsController.deleteDoctor);

module.exports=router;
