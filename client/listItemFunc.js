const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");


mapboxgl.accessToken = "pk.eyJ1IjoibGNoZXd5IiwiYSI6ImNqNmFnZG1oejB4bnkycHFyc3E5NXRmdjMifQ.QieRY2HH2wA4ApJGqd6enQ";
const map = new mapboxgl.Map({
  container: "map-canvas",
  center: [-74.0, 40.731],
  zoom: 12.5, // starting zoom
  pitch: 35,
  bearing: 20,
  style: "mapbox://styles/mapbox/streets-v10"
});

function createListItem(selectIdValue, listIdValue, type, icon){
  let e = document.getElementById(selectIdValue);
  var selectVal = e.value;
  var listItem = document.createElement('li');
  var removeBtn = document.createElement('button');
  removeBtn.className = 'removeBtn btn btn-danger';
  removeBtn.append("x");
  listItem.append(selectVal);
  listItem.appendChild(removeBtn);
  document.getElementById(listIdValue).appendChild(listItem);
  fetch('/api')
  .then(result => result.json())
  .then(data => {
    var theHotel;
    data[type].forEach((hotel)=>{
      if (hotel.name === selectVal){
        theHotel = hotel;
      }
    })
    return theHotel;
  })
  .then(function(hotel){
    var marker = buildMarker(icon, hotel.place.location).addTo(map);
    removeBtn.addEventListener('click', function(){
      listItem.remove();
      marker.remove();
      map.flyTo({
        container: "map-canvas",
        center: [-74.0, 40.731],
        zoom: 12.5, // starting zoom
        pitch: 35,
        bearing: 20,
        style: "mapbox://styles/mapbox/streets-v10"
      })
    })
    map.flyTo({
      center: hotel.place.location,
      zoom: 18,
      speed: 0.8,
      curve: 1.8,
      easing(t) {
        return t;
      }
    });
  })
  .catch(console.error);
}


module.exports = createListItem;