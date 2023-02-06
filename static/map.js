let center = [55.831388, 37.629277];

ymaps.ready(function () {

  let myMap = new ymaps.Map('map-test', {
    center: center,
    zoom: 15,
    controls: ['routePanelControl']
  });

  let control = myMap.controls.get('routePanelControl');
  let city = 'Санкт-Петербург';

  control.routePanel.state.set({
    type: 'pedestrian',
    masstransit: false,

  })
});
