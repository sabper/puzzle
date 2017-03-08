jQuery(function($){
    $('#btncollapzion').Collapzion({
      _child_attribute:[
      {
        'label':'Review',
        'url':'write.html',
        'icon':'&#xE150;'
      },
      {
      'label':'Question',
      'url':'question.html',
      'icon':'&#xE7FD;'
      },
    ],
    _main_btn_color:'#FF4081;',
    _child_btn_color:'#3F51B5;',
      });
    });

    var center = new google.maps.LatLng(59.76522, 18.35002);

    function initialize() {

        var mapOptions = {
            zoom: 7,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: center
        };

        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        var marker = new google.maps.Marker({
            map: map,
            position: center
        });
    }

    $('.launch-map').on('click', function () {

        $('#modal').modal({
            backdrop: 'static',
            keyboard: false
        }).on('shown.bs.modal', function () {
            google.maps.event.trigger(map, 'resize');
            map.setCenter(center);
        });
    });

    initialize();
