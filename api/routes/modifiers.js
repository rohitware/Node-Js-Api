const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Modifier = require('../models/modifier');

router.get('/', (req, res, next) => {
    Modifier.find(function (err, modifiers) {
        if (err) {
            res.send(err);
        }
        res.send(modifiers);
    })
})


router.post('/', (req, res, next) => {
    const modifier = new Modifier();
    modifier.modifiername = req.body.modifiername;
    modifier.optionname = req.body.optionname;
    modifier.price = req.body.price


    modifier.save(function (err) {
        if (err) {
            res.send(err)
        }
        res.send({ message: 'Modifier creater......!' });
    });
});

// get the modifier with there id
router.get('/:modifier_id', (req, res, next) => {
    Modifier.findById(req.params.modifier_id, function (err, modifiers) {
        if (err) {
            res.send(err);
        }
        res.send(modifiers);

    });
});

//update the modifiers with their ids
router.put('/:modifier_id', (req, res, next) => {
    Modifier.findById(req.params.modifier_id, function (err, modifier) {
        if (err)
            res.send(err);

        modifier.modifiername = req.body.modifiername;
        modifier.optionname = req.body.optionname;
        modifier.price = req.body.price


        modifier.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Modifier updated......!' });
        });
    });
});

// delete the item with their id
router.delete('/:modifier_id', (req, res, next)=>{
    Modifier.remove({_id: req.params.modifier_id},function(err, modifier){
        if(err){
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });

    })
})

module.exports = router;