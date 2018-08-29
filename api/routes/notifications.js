const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Notification = require('../models/notification');

router.get('/', (req, res, next) => {
    Notification.find(function (err, notification) {
        if (err) {
            res.send(err);
        }
        res.send(notification);
    });
});


router.post('/', (req, res, next) => {
    const notification = new Notification();

    notification.subject = req.body.subject,
        notification.message = req.body.message

    notification.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.send({ Message: 'Notification Created Successfully.......!' });
    });
});


router.get('/:notification_id', (req, res, next) => {
    Notification.findById(req.params.notification_id, function (err, notification) {
        if (err) {
            res.send(err);
        }
        res.send(notification);
    });
});


// update the notification

router.put('/:notification_id', (req, res, next) => {
    Notification.findById(req.params.notification_id, function (err, notification) {
        if (err) {
            res.send(err);
        }
        notification.subject = req.body.subject,
            notification.message = req.body.message

        notification.save(function (err) {
            if(err)
            res.send(err);

            res.json({ Message: 'Notification Updated Successfully.....!' });

        });

    });
});

router.delete('/:notification_id', (req, res, next) =>{
    Notification.remove({_id: req.params.notification_id}, function(err, notification){
        if(err){
            res.send(err);
        }
        res.json({Message:'Notification Deleted Successfully......!'});
    });
});




module.exports = router;