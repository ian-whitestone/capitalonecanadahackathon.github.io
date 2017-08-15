$(function() {
  // Usage: mosaic(element, diffuse, ambient, numTriangles)
  new mosaic(document.getElementById('hero-mosaic'), [15, 58, 79], [25, 52, 65], 10);

  // Animate in nav elements
  $('#nav').addClass('fade-in');

  // Animate In hero elements
  $('#tagline').addClass('hero-animate-in');
  $('#event-info').addClass('hero-animate-in');
  $('#hero').addClass('hero-animate-in');
  $('#hero-register-cta').addClass('hero-animate-in');
  $('#learn-more').addClass('hero-animate-in');

  // $(document).on('mousemove', '#hero-logo', function(e) {
  //   var halfW = ( this.clientWidth / 2 );
  //   var halfH = ( this.clientHeight / 2 );
  //
  //   var coorX = ( halfW - ( event.pageX - this.offsetLeft ) );
  //   var coorY = ( halfH - ( event.pageY - this.offsetTop ) );
  //
  //   var degX  = ( ( coorY / halfH ) * 10 ) + 'deg'; // max. degree = 10
  //   var degY  = ( ( coorX / halfW ) * -10 ) + 'deg'; // max. degree = 10
  //
  //   console.log('(' + coorX + ', ' + coorY + ')');
  //
  //   $(this).css('transform', function() {
  //     return 'perspective( 1500px ) translate3d( 0, -2px, 0 ) scale(1.1) rotateX('+ degX +') rotateY('+ degY +')';
  //   });
  // });
  //
  // $(document).on('mouseout', '#hero-logo', function() {
  //   $(this).removeAttr('style');
  // });
  // Add floating particles (only usable on Landing Page)
  // addFloatingParticles($('#landing-page'), 3);
  //
  // function addFloatingParticles(el, num) {
  //   for (var i = 0; i < 3; i++) {
  //     var div = $("<div></div>");
  //     div.addClass('floating-particle');
  //     // Set colour?
  //     // Set size?
  //
  //     el.append(div);
  //   }
  // }
});
