// Initialize and add the map
function initMap() {
  // The location of PolyU
  const polyU = { lat: 22.304419, lng: 114.17978 };
  // The map, centered at PolyU
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: polyU,
  });
  // The marker, positioned at polyU
  const marker = new google.maps.Marker({
    position: polyU,
    map: map,
  });
}

window.initMap = initMap;
