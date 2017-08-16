const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");
const createListItem = require("./listItemFunc");


/*
  * Instantiate the Map
  */


function populateSelect(data, selectId){
    data.forEach(function(hotel){
    var optionEl = document.createElement('option');
    optionEl.append(hotel.name)
    document.getElementById(selectId)
    .append(optionEl)
  })
}


fetch('/api')
  .then(result => result.json())
  .then(data => {
    // {hotel: Array(15), restaurant: Array(15), activity: Array(15)}
    let hotels = data.hotel;
    let restaurants = data.restaurant;
    let activites = data.activity;
    //var counter = 0;
    // hotels.forEach(function(hotel){
    //   var optionEl = document.createElement('option');
    //   optionEl.append(hotel.name)
    //   //optionEl.value = counter.toString();
    //   document.getElementById("hotels-choices")
    //   .append(optionEl)
    //   //counter++
    // })

    populateSelect(hotels, "hotels-choices");
    populateSelect(restaurants, "restaurants-choices");
    populateSelect(activites, "activities-choices");

  //   restaurants.forEach(function(restaurant){
  //     var optionEl = document.createElement('option');
  //     optionEl.append(restaurant.name)
  //     document.getElementById("restaurants-choices")
  //     .append(optionEl)
  //   })

  //  activites.forEach(function(activity){
  //     var optionEl = document.createElement('option');
  //     optionEl.append(activity.name)
  //     document.getElementById("activities-choices")
  //     .append(optionEl)
  //   })



  })
  .catch(console.error);

document.getElementById("hotels-add").addEventListener("click",function(){
  createListItem("hotels-choices", "hotels-list", "hotel", "hotels");
})

document.getElementById("restaurants-add").addEventListener("click",function(){
  createListItem("restaurants-choices", "restaurants-list", "restaurant", "restaurants");
})

document.getElementById("activities-add").addEventListener("click",function(){
  createListItem("activities-choices", "activities-list", "activity", "activities");
})






