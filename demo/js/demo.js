/**
 * Particleground demo
 * @author Tanuj Chauhan
 */

$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#FFFFFF',
    lineColor: '#FFFFFF'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});