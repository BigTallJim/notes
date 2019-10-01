function errorLineColor() {
  var lines = $('.log').html().split('</li>');  
  $('.log').empty();

  $.each(lines, function() {
    var $this = $('<div>'+this+'</div>');
    $('.log').append($this);
    if( $this.text().match('Pass') ) {
        $this.css('color', 'green');
    }
    else if( $this.text().match('Error') ) {
        $this.css('color', 'red');
    }
  });
};

