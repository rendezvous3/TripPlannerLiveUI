const createListItem = require("./listItemFunc");

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
    let hotels = data.hotel;
    let restaurants = data.restaurant;
    let activites = data.activity;
    populateSelect(hotels, "hotels-choices");
    populateSelect(restaurants, "restaurants-choices");
    populateSelect(activites, "activities-choices");
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






