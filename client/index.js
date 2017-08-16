const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");
const createListItem = require("./listItemFunc");


/*
  * Instantiate the Map
  */

// mapboxgl.accessToken = "pk.eyJ1IjoibGNoZXd5IiwiYSI6ImNqNmFnZG1oejB4bnkycHFyc3E5NXRmdjMifQ.QieRY2HH2wA4ApJGqd6enQ";
// const map = new mapboxgl.Map({
//   container: "map-canvas",
//   center: [-74.0, 40.731],
//   zoom: 12.5, // starting zoom
//   pitch: 35,
//   bearing: 20,
//   style: "mapbox://styles/mapbox/streets-v10"
// });

fetch('/api')
  .then(result => result.json())
  .then(data => {
    // {hotel: Array(15), restaurant: Array(15), activity: Array(15)}
    let hotels = data.hotel;
    let restaurants = data.restaurant;
    let activites = data.activity;
    //var counter = 0;
    hotels.forEach(function(hotel){
      var optionEl = document.createElement('option');
      optionEl.append(hotel.name)
      //optionEl.value = counter.toString();
      document.getElementById("hotels-choices")
      .append(optionEl)
      //counter++
    })

    restaurants.forEach(function(restaurant){
      var optionEl = document.createElement('option');
      optionEl.append(restaurant.name)
      document.getElementById("restaurants-choices")
      .append(optionEl)
    })

   activites.forEach(function(activity){
      var optionEl = document.createElement('option');
      optionEl.append(activity.name)
      document.getElementById("activities-choices")
      .append(optionEl)
    })



  })
  .catch(console.error);




document.getElementById("hotels-add").addEventListener("click",function(){
  createListItem("hotels-choices", "hotels-list", "hotel", "hotels");
  // let e = document.getElementById("hotels-choices");
  // var selectVal = e.value;
  // var listItem = document.createElement('li');
  // var removeBtn = document.createElement('button');
  // removeBtn.className = 'removeBtn btn btn-danger';
  // removeBtn.append("x");
  // listItem.append(selectVal);
  // listItem.appendChild(removeBtn);
  // document.getElementById("hotels-list").appendChild(listItem);
  // fetch('/api')
  // .then(result => result.json())
  // .then(data => {
  //   var theHotel;
  //   data.hotel.forEach((hotel)=>{
  //     if (hotel.name === selectVal){
  //       theHotel = hotel;
  //     }
  //   })
  //   return theHotel;
  // })
  // .then(function(hotel){
  //   var marker = buildMarker("hotels", hotel.place.location).addTo(map);
  //   removeBtn.addEventListener('click', function(){
  //     listItem.remove()
  //     marker.remove();
  //     map.flyTo({
  //       container: "map-canvas",
  //       center: [-74.0, 40.731],
  //       zoom: 12.5, // starting zoom
  //       pitch: 35,
  //       bearing: 20,
  //       style: "mapbox://styles/mapbox/streets-v10"
  //     })
  //   })
  //   map.flyTo({
  //     center: hotel.place.location,
  //     zoom: 18,
  //     speed: 0.8,
  //     curve: 1.8,
  //     easing(t) {
  //       return t;
  //     }
  //   });
  // })
  // .catch(console.error);
  
  console.log(selectVal)
})


document.getElementById("restaurants-add").addEventListener("click",function(){
  createListItem("restaurants-choices", "restaurants-list", "restaurant", "restaurants");
  // let e = document.getElementById("restaurants-choices");
  // var selectVal = e.value;
  // var listItem = document.createElement('li');
  // var removeBtn = document.createElement('button');
  // removeBtn.className = 'removeBtn btn btn-danger';
  // removeBtn.append("x");
  // listItem.append(selectVal);
  // listItem.appendChild(removeBtn);
  // document.getElementById("restaurants-list").appendChild(listItem);
  // fetch('/api')
  // .then(result => result.json())
  // .then(data => {
  //   var theHotel;
  //   data.restaurant.forEach((hotel)=>{
  //     if (hotel.name === selectVal){
  //       theHotel = hotel;
  //     }
  //   })
  //   return theHotel;
  // })
  // .then(function(hotel){
  //   var marker = buildMarker("restaurants", hotel.place.location).addTo(map);
  //   removeBtn.addEventListener('click', function(){
  //     listItem.remove()
  //     marker.remove();
  //     map.flyTo({
  //         container: "map-canvas",
  //         center: [-74.0, 40.731],
  //         zoom: 12.5, // starting zoom
  //         pitch: 35,
  //         bearing: 20,
  //         style: "mapbox://styles/mapbox/streets-v10"
  //       })
  //   })
  //   map.flyTo({
  //     center: hotel.place.location,
  //     zoom: 18,
  //     speed: 0.8,
  //     curve: 1.8,
  //     easing(t) {
  //       return t;
  //     }
  //   });

  // })
  // .catch(console.error);
  // console.log(selectVal)
})

document.getElementById("activities-add").addEventListener("click",function(){
  createListItem("activities-choices", "activities-list", "activity", "activities");
  // let e = document.getElementById("activities-choices");
  // var selectVal = e.value;
  // var listItem = document.createElement('li');
  // var removeBtn = document.createElement('button');
  // removeBtn.className = 'removeBtn btn btn-danger';
  // removeBtn.append("x");
  // listItem.append(selectVal);
  // listItem.appendChild(removeBtn);
  // document.getElementById("activities-list").appendChild(listItem);
  // fetch('/api')
  // .then(result => result.json())
  // .then(data => {
  //   var theHotel;
  //   data.activity.forEach((hotel)=>{
  //     if (hotel.name === selectVal){
  //       theHotel = hotel;
  //     }
  //   })
  //   return theHotel;
  // })
  // .then(function(hotel){
  //   var marker = buildMarker("activities", hotel.place.location).addTo(map);
  //   removeBtn.addEventListener('click', function(){
  //     listItem.remove()
  //     marker.remove();
  //     map.flyTo({
  //       container: "map-canvas",
  //       center: [-74.0, 40.731],
  //       zoom: 12.5, // starting zoom
  //       pitch: 35,
  //       bearing: 20,
  //       style: "mapbox://styles/mapbox/streets-v10"
  //     })
  //   })
  //   map.flyTo({
  //     center: hotel.place.location,
  //     zoom: 18,
  //     speed: 0.8,
  //     curve: 1.8,
  //     easing(t) {
  //       return t;
  //     }
  //   });
  // })
  // .catch(console.error);
  // console.log(selectVal)
})






