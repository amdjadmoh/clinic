const queueController=require('../controller/queueController');
const express = require('express');
const router = express.Router();

router
.route('/')
.get(queueController.getAllQueues)
.post(queueController.addToQueue);

router
.route('/:id')
.get(queueController.getQueue)
.patch(queueController.updateQueue)
.delete(queueController.deleteQueue);

module.exports = router;
