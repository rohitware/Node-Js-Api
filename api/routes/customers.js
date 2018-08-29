const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Customer = require('../models/customer');



router.get('/', (req, res, next) => {
    Customer.find(function (err, customer) {
        if (err) {
            res.send(err);
        }
        res.send(customer);
    });
});

router.post('/', (req, res, next) => {
    const customer = new Customer();

    customer.custname = req.body.custname,
        customer.custemail = req.body.custemail,
        customer.custphonenumber = req.body.custphonenumber,
        customer.custnote = req.body.custnote

    customer.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Customer Created....!' });
    });
});

// get the customer with their id

router.get('/:customer_id', (req, res, next) => {
    Customer.findById(req.params.customer_id, function(err, customer){
        if (err){
            res.send(err);
        }
        res.send(customer);
    });
});


// update customer with there id

router.put('/:customer_id', (req, res, next)=>{
    Customer.findById(req.params.customer_id, function(err, customer){
        if(err){
            res.send(err);
        }
        customer.custname = req.body.custname,
        customer.custemail = req.body.custemail,
        customer.custphonenumber = req.body.custphonenumber,
        customer.custnote = req.body.custnote


        customer.save(function(err){
            if(err){
                res.send(err);
            }

            res.json({message: 'Customer updated....!'});
        });
    });
});


// delete customers with their id

router.delete('/:customer_id', (req, res, next)=>{
    Customer.remove({_id: req.params.customer_id}, function(err){
        if(err){
            res.send(err);
        }
        res.send({message: 'Customer deleted successfully'});
    });
});


module.exports = router;