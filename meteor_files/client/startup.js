Meteor.startup( function() {
    $(window).resize(function(evt) {
      if ($(window).width() < 1000) {
        Session.set('window-size', 'compact');
      }
      else {
        Session.set('window-size', 'expanded');
      }
  });
  });