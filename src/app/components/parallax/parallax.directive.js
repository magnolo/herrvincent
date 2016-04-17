(function() {
  'use strict';

  angular
    .module('herrvincent')
    .directive('parallax', parallax);

  /** @ngInject */
  function parallax($timeout) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/parallax/parallax.html',
      scope: {},
      link: linkFunc,
      controller: ParallaxController,
      controllerAs: 'vm',
      bindToController: {
        layers: '='
      },
    };

    return directive;

    function linkFunc(scope, el, attr, vm) {
      var scenes = angular.element(el).find('#scene');
      var pScene = null;
      $timeout(function() {
        /*angular.element(scene).find('img').each(function(key, image) {
          var img = angular.element(this);
          var transform = img.css('transform');
          img.on('mouseenter', function(ev) {
            img.css('transform', 'rotateZ(0) rotateY(360deg)');
          }).on('mouseleave', function(ev) {
            img.css('transform', transform);
          })
        });*/
        pScene = scenes.parallax({
          calibrateX: true,
          calibrateY: true,
          invertX: true,
          invertY: true,
          limitX: false,
          limitY: false,
          scalarX: 35,
          scalarY: 10,

        });
      });
    }
    /** @ngInject */
    function ParallaxController() {
      var vm = this;

      vm.rotation = rotation;
      vm.calcStyle = calcStyle;

      function calcStyle(layer) {
        return {
          "transform": "rotateZ(" + rotation(layer) + 'deg) rotateY(0deg)',
          "max-width": (layer.size || 100) + '%',
          "left": layer.left + '%',
          "bottom": ((-layer.top || -30)) + '%',
          "top": layer.isTop ? 0 : 'auto'
        }
      }

      function rotation(layer) {
        var rotation = 0;
        if (layer.rotate) return layer.rotate;
        if (!layer.stopRotate) {
          rotation = (27 - layer.left) / 10 * -2;
        }

        return rotation;
      }

    }
  }

})();