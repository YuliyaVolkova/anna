'use strict';
ymaps.ready(init);

function init(){
  var  dots =  [
        {address: 'Москва, Ленинский проспект, д.111к.1',
        lang: '55.6617251', lat: '37.5070392'},
        {address: 'Москва, ул. Миклухо - Маклая, д.36А',
        lang: '55.6404532', lat: '37.5330293'}
        ],
        title = 'Семейная клиника&nbsp;Доктор&nbsp;Анна',
        myMap,
        myClusterer = new ymaps.Clusterer({clusterDisableClickZoom: true});

        myMap = new ymaps.Map('map', {
            center: [55.65, 37.51],
            zoom: 11,
            controls: []
        });

    myMap.behaviors.disable('scrollZoom');
    myMap.controls.add("zoomControl", {
        position: {top: 15, left: 15}
    });

    dots.forEach(function (el) {

        var html = '<div class="map__balloon">';
        html +=     `<div class="map__row">${el.address}</div>`;
        html +=     '<div class="map__row">с 8.00 до 21.00 без выходных</div>';
        html +=     '<div class="map__row_phone">';
        html +=         '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="map__svg" width="18px" height="18px">';
        html +=             '<path fill-rule="evenodd"  stroke="rgb(79, 191, 201)" fill="rgb(79, 191, 201)" d="M17.000,12.499 C15.800,12.499 14.600,12.299 13.400,11.899 C13.100,11.799 12.700,11.899 12.400,12.100 L10.200,14.299 C7.400,12.899 5.100,10.500 3.600,7.699 L5.800,5.499 C6.100,5.199 6.200,4.799 6.000,4.499 C5.700,3.400 5.500,2.199 5.500,0.999 C5.500,0.399 5.100,-0.000 4.500,-0.000 L1.000,-0.000 C0.400,-0.000 -0.000,0.399 -0.000,0.999 C-0.000,10.399 7.600,17.999 17.000,17.999 C17.600,17.999 18.000,17.600 18.000,16.999 L18.000,13.499 C18.000,12.899 17.600,12.499 17.000,12.499 ZM16.000,8.999 L18.000,8.999 C18.000,3.999 14.000,-0.000 9.000,-0.000 L9.000,2.000 C12.900,2.000 16.000,5.100 16.000,8.999 ZM12.000,8.999 L14.000,8.999 C14.000,6.199 11.800,3.999 9.000,3.999 L9.000,5.999 C10.700,5.999 12.000,7.299 12.000,8.999 Z"/>';
        html +=         '</svg>';
        html +=         '<a href="tel:+74951532379" target="_blank" class="map__link">+7 495 266-25-40</a>';
        html +=     '</div>';
        html +=    '</div>';

        var myPlaceMark = new ymaps.Placemark([el.lang, el.lat] ,
            {   clusterCaption: title,
                balloonContent: html,
                hintContent: title
            },
            { iconLayout: 'default#image',
                iconImageHref: './assets/images/svg/pin.svg',
                iconImageSize: [23,32],
                iconImageOffset: [-11.5, -32],
                balloonContentSize: [286, 130],
                balloonShadow: false });
        myClusterer.add(myPlaceMark);
        myMap.geoObjects.add(myClusterer);
    });
}
