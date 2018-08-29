const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const Employee = require('../models/employee');


router.get('/', (req, res, next) => {
    Employee.find(function (err, employees) {
        if (err) {
            res.send(err);
        }
        res.send(employees);
    });
});

router.post('/', (req, res, next) => {
    const employee = new Employee();
    employee.employeename = req.body.employeename,
        employee.email = req.body.email,
        employee.phonenumber = req.body.phonenumber,
        employee.role = req.body.role

    employee.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.send({ message: 'Employee Created....!' });
    });
});

// get the employee with their id

router.get('/:employee_id', (req, res, next) => {
    Employee.findById(req.params.employee_id, function (err, employee) {
        if (err) {
            res.send(err);
        }
        res.send(employee);
    });
});


// update the employee with their id

router.put('/:employee_id', (req, res, next) => {
    Employee.findById(req.params.employee_id, function (err, employee) {
        if (err) {
            res.send(err);
        }

        employee.employeename = req.body.employeename,
            employee.email = req.body.email,
            employee.phonenumber = req.body.phonenumber,
            employee.role = req.body.role

        employee.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Employee Updated......!' });
        });
    });
});

// delete the employee with their id

router.delete('/:employee_id', (req, res, next) => {
    Employee.remove({ _id: req.params.employee_id }, function (err) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Employee deleted successfully.....!' });
    });
});


module.exports = router;