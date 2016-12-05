// code from waypoints site
(function load_me() {
  $(function() {
    var $body = $('body');

    $('.panel')
      .waypoint(function(direction) {
        $body.toggleClass(this.id + '-visible', direction === 'right');
      }, {
        offset: '50%',
        horizontal: true
      })
      .waypoint(function(direction) {
        $body.toggleClass(this.id + '-visible', direction === 'left');
      }, {
        offset: '-50%',
        horizontal: true
      });
  });

  /* Docs nav highlighting */
  $(function() {
    $('.doc-section')
      .waypoint(function(direction) {
        var $links = $('a[href="#' + this.id + '"]');
        $links.toggleClass('active', direction === 'down');
      }, {
        context: '#docs',
        offset: '100%'
      })
      .waypoint(function(direction) {
        var $links = $('a[href="#' + this.id + '"]');
        $links.toggleClass('active', direction === 'up');
      }, {
        context: '#docs',
        offset: function() {
          return -$(this).height();
        }
      });
  });
})();
/*
$(document).ready(function(){
  load_me();
});*/



