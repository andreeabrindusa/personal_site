Router.configure({
    layoutTemplate: 'layout',
});

Router.route('/', {name: 'mainBody'});
Router.route('/newEntry', {name: 'newEntry'});