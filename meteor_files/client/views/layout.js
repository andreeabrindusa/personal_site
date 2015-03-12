my_links = [{"link_name":"about", "href": "www.google.com"},
           {"link_name": "work", "href":"www.google.com"},
           {"link_name": "resume", "href": "www.google.com"},
           {"link_name": "contact","href": "www.google.com"}
           ];
           

Template.navTemplate.helpers({
    navLink : my_links,
    isExpanded : function() {
      var window_size = Session.get('window-size');
      if (window_size == 'expanded') {
        return true;
      }
      else {
        return false;
      }
    }
});

Template.mainBody.helpers({
    entryList : function(){
        return Entries.find();
    },

});

Template.mainBody.events({
    'click .entry': function() {
      alert('clicked entry');
    }
});

Template.newEntry.events({
    'click #submit-new': function() {
        var new_title = $( 'input[name*="title"]' ).val();
        var new_description = $( 'input[name*="description"]' ).val();
        Entries.insert({title:new_title, description:new_description});
        Router.go("/");
    }
})

