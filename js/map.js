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

  var contentString = [
    '<div class="iw_inner" style="padding: 10px;">',
    "   <h3>서울특별시청</h3>",
    "   <p>서울특별시 중구 태평로1가 31 | 서울특별시 중구 세종대로 110 서울특별시청<br />",
    "       <br />",
    "       02-120 | 공공,사회기관 &gt; 특별,광역시청<br />",
    '       <a href="http://www.seoul.go.kr" target="_blank">www.seoul.go.kr/</a>',
    "   </p>",
    "</div>",
  ].join("");

  var infowindow = new naver.maps.InfoWindow({
    content: contentString,
  });

  item.map((items) => {
    var marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(items.x, items.y),
      map: map,
    });

    naver.maps.Event.addListener(marker, "click", function (e) {
      console.log(e);

      if (infowindow.getMap()) {
        infowindow.close();
      } else {
        infowindow.open(map, marker);
      }
    });
  });
};
