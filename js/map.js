export const map = (item) => {
  const { naver } = window;
  var mapOptions = {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 7,
  };

  var map = new naver.maps.Map("map", {
    scaleControl: false,
    logoControl: false,
    mapDataControl: false,
    zoomControl: true,
    minZoom: 6,
    zoom: 8,
  });

  var contentString;

  const setContentString = (obj) => {
    contentString = "test";
  };

  item.map((items) => {
    items.map((items) => {
      var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(items.latitude, items.longitude),
        map: map,
      });

      naver.maps.Event.addListener(marker, "click", function (e) {
        setContentString();
        console.log(e);
        console.log(contentString);
        if (infowindow.getMap()) {
          infowindow.close();
        } else {
          infowindow.open(map, marker);
        }
      });
    });
  });

  var infowindow = new naver.maps.InfoWindow({
    content: contentString,
  });
};
