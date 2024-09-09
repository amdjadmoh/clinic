const express = require('express');
const resultTypeController = require('../controller/ResultType');

const router = express.Router();

// Define routes for ResultType
router
.route('/')
.get(resultTypeController.getAllResultTypes)
.post(resultTypeController.createResultType);

router
.route('/:id')
.get(resultTypeController.getResultType)
.patch(resultTypeController.updateResultType)
.delete(resultTypeController.deleteResultType);

router
.route('/dep/:dep')
.get(resultTypeController.getResultTypeByDep);

module.exports = router;

