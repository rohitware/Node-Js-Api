const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Feedback = require('../models/feedback');

router.get('/', (req, res, next) => {
    Feedback.find(function (err, feedback) {
        if (err) {
            res.send(err);
        }
        res.send(feedback);
    });
});

router.post('/', (req, res, next) => {
    const feedback = new Feedback();
    feedback.Date_time = req.body.Date_time,
        feedback.Receiptno = req.body.Receiptno,
        feedback.Customer = req.body.Customer,
        feedback.Contacts = req.body.Contacts,
        feedback.Rating = req.body.Rating,
        feedback.Feedback = req.body.Feedback

    feedback.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.send({ message: 'Feedback Created......!' });
    });
});


router.get('/:feedback_id', (req, res, next) => {
    Feedback.findById(req.params.feedback_id, function (err, feedback) {
        if (err) {
            res.send('err');
        }
        res.send(feedback);
    });
});

// update feedback

router.put('/:feedback_id', (req, res, next) => {
    Feedback.findById(req.params.feedback_id, function (err, feedback) {
        if (err) {
            res.send(err);
        }

        feedback.Date_time = req.body.Date_time,
            feedback.Receiptno = req.body.Receiptno,
            feedback.Customer = req.body.Customer,
            feedback.Contacts = req.body.Contacts,
            feedback.Rating = req.body.Rating,
            feedback.Feedback = req.body.Feedback


        feedback.save(function (err) {
            if (err)
                res.send(err);
            res.json({ message: 'feedback updated.....!' });

        });
    });
});


//delete feedback

router.delete('/:feedback_id', (req, res, next)=>{
    Feedback.remove({_id:req.params.feedback_id}, function(err){
        if(err){
            res.send(err);
        }

        res.json({message: 'Feedback Deleted Successfully.......!'});
    });
});


module.exports = router;