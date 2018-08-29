const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const Item = require("../models/item");



router.get('/', (req, res, next) => {
    Item.find(function (err, items) {
        if (err) {
            res.send(err);
        }
        res.send(items);
    });
});


router.post('/', (req, res, next) => {
    const item = new Item();
    item.name = req.body.name,
        item.category = req.body.category,
        item.itemAvailable = req.body.itemAvailable,
        item.sold = req.body.sold,
        item.price = req.body.price,
        item.cost = req.body.cost,
        item.sku = req.body.sku,
        item.barcode = req.body.barcode

    item.save(function (err) {
        if (err) {
            res.send(err);
        }
        console.log("added");
        res.send({ message: 'Items Created !' })
    })
});


// on routes that end in /items/:item_id
//get the item with there id

router.get('/:item_id', (req, res, next) => {
    Item.findById(req.params.item_id, function (err, items) {
        if (err) {
            res.send(err);
        }
        res.send(items);
    });
});


// update the items with there id

router.put('/:item_id', function (req, res, ) {
    Item.findById(req.params.item_id, function (err, item) {

        if (err)
            res.send(err);

        item.name = req.body.name;
            item.category = req.body.category;
            item.itemAvailable = req.body.itemAvailable;
            item.sold = req.body.sold;
            item.price = req.body.price;
            item.cost = req.body.cost;
            item.sku = req.body.sku;
            item.barcode = req.body.barcode;

        item.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'item updated!' });
        });

    });
});

// delete the items with there id


router.delete('/:item_id', function (req, res, next) {
    Item.remove({
        _id: req.params.item_id
    }, function (err, item) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
});


module.exports = router;