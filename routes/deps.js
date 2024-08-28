const depController = require('../controller/depController');
const express = require('express');
const router = express.Router();

router
    .route('/')
    .get(depController.getAllDeps)
    .post(depController.createDep);

router
    .route('/search')
    .get(depController.searchDep);    
router
    .route('/:id')
    .get(depController.getDep)
    .patch(depController.updateDep)
    .delete(depController.deleteDep);


module.exports = router;