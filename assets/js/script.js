var formEl = document.getElementById('city-form')
var cityInputEl = document.getElementById('city-input')
var cities = JSON.parse(localStorage.getItem('cities')) || [];
function getWeather(city){

}

formEl.addEventListener('submit', function(event){
    event.preventDefault();
    var city = cityInputEl.value
    getWeather(city);
    cities.push(city);
})