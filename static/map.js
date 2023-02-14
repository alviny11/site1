ymaps.ready(function () {

  let myMap = new ymaps.Map('map-test', {
    center: [55.831388, 37.629277],
    zoom: 15,
    controls: ['routePanelControl']
  });

  let control = myMap.controls.get('routePanelControl');
//  console.log(`Latitude : ${проспект Мира, 119с57}`);
////  console.log(`Longitude: ${Останкинский район}`);

  control.routePanel.state.set({
    type: 'pedestrian',
    })
  control.routePanel.options.set({
      types: {
        masstransit: false,
        pedestrian: true,
        taxi: false
        }
    })


});
var times = {
    '00': 'Ночью',
    '03': 'Ночью',
    '06': 'Утром',
    '09': 'Утром',
    '12': 'Днём',
    '15': 'Днём',
    '18': 'Вечером',
    '21': 'Вечером',
};

    var api_key = '9349823a9ec7d3b2af496b4fa21cf505';
var city = 'Moscow'
var troitsk_id = '481608';
var url = 'http://api.openweathermap.org/data/2.5/forecast?id=481608&lang=ru&units=metric&cnt=10&appid=9349823a9ec7d3b2af496b4fa21cf505&';
function update_weather() {
        var t_1 = document.getElementById("time_1");
        var t_2 = document.getElementById("time_2");
        var t_3 = document.getElementById("time_3");
        var t_4 = document.getElementById("time_4");
        var weather_img_1 = document.getElementById("weather_img_1");
    var weather_img_2 = document.getElementById("weather_img_2");
    var weather_img_3 = document.getElementById("weather_img_3");
    var weather_img_4 = document.getElementById("weather_img_4");
    var grad_1 = document.getElementById("grad_1");
    var grad_2 = document.getElementById("grad_2");
    var grad_3 = document.getElementById("grad_3");
    var grad_4 = document.getElementById("grad_4");


    fetch(url).then(function (resp) {return resp.json() }).then(function (all_data){
        var data = all_data.list;
        var time1 = data[2];
        var time2 = data[4];
        var time3 = data[6];
        var time4 = data[8];
        var time = data[0];
        var time_1 = time1.dt_txt.split(' ')[1].split(':')[0];
        var time_2 = time2.dt_txt.split(' ')[1].split(':')[0];
        var time_3 = time3.dt_txt.split(' ')[1].split(':')[0];
        var time_4 = time4.dt_txt.split(' ')[1].split(':')[0];



        t_1.textContent = times[time_1];
        t_2.textContent = times[time_2];
        t_3.textContent = times[time_3];
        t_4.textContent = times[time_4];

        weather_img_1.src = "https://openweathermap.org/img/wn/" + time1.weather[0]['icon'] + "@2x.png";
        weather_img_2.src = "https://openweathermap.org/img/wn/" + time2.weather[0]['icon'] + "@2x.png";
        weather_img_3.src = "https://openweathermap.org/img/wn/" + time3.weather[0]['icon'] + "@2x.png";
        weather_img_4.src = "https://openweathermap.org/img/wn/" + time4.weather[0]['icon'] + "@2x.png";

        grad_1.textContent = Math.round(time1.main.temp) + '°';
        grad_2.textContent = Math.round(time2.main.temp) + '°';
        grad_3.textContent = Math.round(time3.main.temp) + '°';
        grad_4.textContent = Math.round(time4.main.temp) + '°';
      });
};
update_weather();
setInterval(update_weather, 1000 * 60);
