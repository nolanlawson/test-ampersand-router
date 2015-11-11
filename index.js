var Router = require('ampersand-router');

var currentRoute;

var AppRouter = Router.extend({
  routes: {
    '': 'home',
    'users/:id.html': 'userDetail',
    'info.html': 'info'
  },

  // ------- ROUTE HANDLERS ---------
  home: function () {
    console.log('home');
    console.log('previous route:', currentRoute);
  },

  // redirect example
  userDetail: function (id) {
    console.log('userDetail', id);
    console.log('previous route:', currentRoute);
  },

  info: function () {
    console.log('info');
    console.log('previous route:', currentRoute);
  }
});

var router = new AppRouter();

router.on('route', function (arg) {
  console.log('route', arguments);
  currentRoute = Array.from(arguments);
});

router.history.start();

window.router = router;

var $ = document.querySelector.bind(document);

$('#info').addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  router.navigate('info.html');
});

$('#userdetail').addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  router.navigate('users/1.html');
});