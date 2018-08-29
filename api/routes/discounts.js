const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const Discount = require('../models/discount');

router.get('/', (req, res, next) => {
    Discount.find(function (err, discount) {
        if (err) {
            res.send(err);
        }
        res.send(discount);
    });
});

router.post('/', (req, res, next) => {
    const discount = new Discount();
    discount.Name = req.body.Name,
        discount.Value = req.body.Value,
        discount.Type = req.body.Type,
        discount.Restricted_access = req.body.Restricted_access

    discount.save(function (err) {
        if (err) {
            res.send(err)
        }
        res.send({ message: 'Discount Created......!' });
    });
});

//get the item with there id

router.get('/:discount_id', (req, res, next) => {
    Discount.findById(req.params.discount_id, function (err, discount) {
        if (err) {
            res.send(err);
        }
        res.send(discount);
    });
});


// update the items with there id
router.put('/:discount_id', (req, res, next) => {
    Discount.findById(req.params.discount_id, function (err, discount) {
        if (err)
            res.send(err);

        discount.Name = req.body.Name,
            discount.Value = req.body.Value,
            discount.Type = req.body.Type,
            discount.Restricted_access = req.body.Restricted_access

        discount.save(function (err) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Discount updated.....!' });
        });
    });
});


// delete the items with there id


router.delete('/:discount_id', (req, res, next)=>{
    Discount.remove({_id: req.params.discount_id}, function(err, discount){
        if(err){
            res.send(err);
        }
        res.json({message: 'Discount Deleted Successfully......!'});
    });
});



module.exports = router;