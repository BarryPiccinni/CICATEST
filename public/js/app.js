// public/js/app.js

// RSS feed JS

function loadRSS () {
    var feed = '';

    $.ajax({
      url: 'http://api.rss2json.com/v1/api.json',
      method: 'GET',
      dataType: 'json',
      data: {
        rss_url: 'https://feeds.bbci.co.uk/news/rss.xml?edition=uk',
        api_key: 'p57qvqzjjcyd8qbc1qcncjusju1v5pemmccnbele',
        count: 15
      }
    }).done(function (response) {
      if(response.status != 'ok'){ 
        throw response.message; 
      }
      for(var i in response.items){
        var item = response.items[i];
        feed +=('<span style=\'font-family: Gill Sans,Gill Sans MT,Calibri,sans-serif; font-size:80px; color:#FFFFFF;\'>' + item.title + ': </span><span style=\'font-family: Gill Sans,Gill Sans MT,Calibri,sans-serif; font-size:60px; color:#FFFFFF;\'>' + item.description + '</span><span style=\'color:#9d0a0e\'>.....................</span>');
      }
      $('.rss').html(feed);
    });
};

// Google maps API

function initMap() {
    var map = new google.maps.Map(document.getElementById('traffic_widget'), {
        zoom: 12,
        center: {lat: 55.858407, lng: -4.2623462},
        disableDefaultUI: true,
    });

    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
}