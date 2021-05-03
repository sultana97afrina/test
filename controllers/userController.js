const express = require('express');
const { json } = require('express');
const router =require('express').Router();
// var datetime = require('node-datetime');
const datetime = require('date-and-time')

const mailservice = require('../services/mailService.js');

const user_model = require('../models/userModel');
const reminderModel = require('../models/reminderModel');

router.post('/createreminder',async(req, res)=>{
    try {
        const{name,email,date,description} = req.body;

        // var dt = datetime.format(date, 'YYYY/MM/DD HH:mm:ss');
            // var formattedDate = dt.format();

        const newReminder = new reminderModel({
            name,email,date,description
        })
        await newReminder.save();
    
        res.json(newReminder)
        console.log(newReminder)
    
    
    } catch (err) {
       console.log({msg:err.message});
    }
 })

 router.put('/updatereminder/:id',async(req, res)=>{
    try {
        const {name,email,date,description} =req.body;   
       
    
        await reminderModel.findByIdAndUpdate({_id:req.params.id},{
            name,email,date,description
        })
    
        res.json({msg:"Update a product"})
    } catch (err) {
        return res.status(500).json({msg : err.message})
    }

 })

 router.delete('/deletereminder/:id',async(req, res)=>{
    try {
        await reminderModel.findByIdAndDelete(req.params.id)
        res.json({msg : ' delete a product'})
    } catch (err) {
        return res.status(500).json({msg : err.message})
    }

})




module.exports = router;