(function() {
  'use strict';

  angular
    .module('herrvincent')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.layers = [{
      image: '/assets/images/pins/painting_1.png',
      depth: .12,
      left: 0,
      size: 60,
      top: 0
    }, {
      image: '/assets/images/pins/herr_vincent.png',
      depth: .15,
      left: 25,
      size: 100,
      top: 0,
      isTop: true,
    }, {
      image: '/assets/images/pins/lamp.png',
      depth: .25,
      left: 74,
      size: 50,
      top: 30
    }, {
      image: '/assets/images/pins/chair.png',
      depth: .25,
      left: 38,
      size: 60,
      top: 35,
      rotate: -2,
      hide: true
    }, {
      image: '/assets/images/pins/kerstin_flowers.png',
      depth: .4,
      left: 20,
      size: 100,
      top: 0,
      url: 'http://www.manfredwalder.at',
      shadow: true,
      main: true
    }, {

      image: '/assets/images/pins/joni_cake.png',
      depth: .4,
      left: 54,
      size: 100,
      top: 0,
      url: 'http://www.manfredwalder.at',
      shadow: true,
      main: true
    }, {
      image: '/assets/images/pins/coffee.png',
      depth: .6,
      size: 15,
      left: 10,
      top: 20,
      hide: true
    }, {

      image: '/assets/images/pins/beer.png',
      depth: .7,
      size: 13,
      left: 12,
      rotate: 5,
      top: 10,
      hide: true
    }, {

      image: '/assets/images/pins/teapot.png',
      depth: .6,
      size: 13,
      left: 77,
      rotate: -2,
      top: 10,
      hide: true
    }, {

      image: '/assets/images/pins/breakfast.png',
      depth: .7,
      size: 13,
      left: 77,
      top: 18,
      hide: true
    }, {
      image: '/assets/images/pins/impressum.png',
      depth: 1,
      top: 85,
      left: 5,
      rotate: -10,

    }];


    activate();

    function activate() {

    }


  }
})();