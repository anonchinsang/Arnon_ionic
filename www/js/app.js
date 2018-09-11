// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('menus', {
    url: '/menus',
    abstract: true,
    templateUrl: 'templates/menus.html'
  })

  // Each tab has its own nav history stack:

  .state('menus.main', {
    url: '/main',
    views: {
      'tab-main': {
        templateUrl: 'templates/main.html',
        controller: 'DashCtrl'
      }
    }
  })
.state('menus.member', {
    url: '/member',
    views: {
      'tab-member': {
        templateUrl: 'templates/member.html',
        controller: 'DashCtrl'
      }
    }
  })
.state('menus.howto', {
    url: '/howto',
    views: {
      'tab-howto': {
        templateUrl: 'templates/howto.html',
        controller: 'DashCtrl'
      }
    }
  })
.state('menus.music', {
    url: '/music',
    views: {
      'tab-music': {
        templateUrl: 'templates/music.html',
        controller: 'DashCtrl'
      }
    }
  })
.state('menus.call', {
    url: '/call',
    views: {
      'tab-call': {
        templateUrl: 'templates/call.html',
        controller: 'DashCtrl'
      }
    }
  })
.state('menus.hello', {
    url: '/hello',
    views: {
      'tab-hello': {
        templateUrl: 'templates/hello.html',
        controller: 'DashCtrl'
      }
    }
  })
/*
  .state('main', {
      url: '/main',
        templateUrl: 'templates/main.html', 
  })


  .state('member', {
      url: '/member',
        templateUrl: 'templates/member.html', 
  })


  .state('howto', {
      url: '/howto',
        templateUrl: 'templates/howto.html', 
  })
*/
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/menus/main');

});