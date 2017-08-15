const express = require('express');
const router = express.Router();
const models = require('../models');
const Hotel = models.Hotel;
const Restaurant = models.Restaurant;
const Activity = models.Activity;

router.get('/', function(req,res,next){
    let jsonObj = {}
    let hotel = Hotel.findAll({ include: [{ all: true }] })
    .then(hotels =>{
        jsonObj['hotel'] = hotels;
    })
    let restaurant = Restaurant.findAll({ include: [{ all: true }] })
    .then(restaurants =>{
        jsonObj['restaurant'] = restaurants;
    })
    let activity = Activity.findAll({ include: [{ all: true }] })
    .then(activities =>{
        jsonObj['activity'] = activities;
    })

    Promise.all([hotel, restaurant, activity])
    .then(()=>{
        res.json(jsonObj);
    })
   
})

module.exports = router;