jQuery(function ($) {
  $('#btncollapzion').Collapzion({
    _child_attribute: [
      {
        'label': 'Review',
        'url': '/reviews/write',
        'icon': '&#xE150;'
      },
      {
        'label': 'Question',
        'url': 'question.html',
        'icon': '&#xE7FD;'
      }
    ],
    _main_btn_color: '#FF4081;',
    _child_btn_color: '#3F51B5;'
  })
})
