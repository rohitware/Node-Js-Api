const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Category = require('../models/category');


router.get('/', (req, res, next) => {
    Category.find(function (err, categories) {
        if (err) {
            res.send(err);
        }
        res.send(categories);

    });
});

router.post('/', (req, res, next) => {
    const category = new Category();

    category.id = req.body.id,
    category.catname = req.body.catname
    

    category.save(function (err) {
        if (err) {
            res.send(err)
        }
        res.send({ message: 'Category Created....!' });
    });
});

// get the category with their id

router.get('/:category_id', (req, res, next) => {
    Category.findById(req.params.category_id, function (err, categories) {
        if (err) {
            res.send(err)
        }
        res.send(categories);
    });
});

// update the category with there id

router.put('/:category_id', (req, res, next) => {
    Category.findById(req.params.category_id, function (err, category) {
        if (err)
            res.send(err);
            category.id = req.body.id,
            category.catname = req.body.catname


        category.save(function (err) {
            if (err)
                res.send(err);

            res.send({ message: 'category updated....!' });
        });

    });
});

// delete the items with there id

router.delete('/:category_id', (req, res, next)=>{
    Category.remove({
        _id: req.params.category_id
    }, function(err, category){
        if(err)
        res.send(err);

        res.json({message: 'category deleted successfully...!'});
    });
});

module.exports = router;