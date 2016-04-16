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
      var scene = angular.element(el).find('#scene');
      var pScene = null;
      $timeout(function() {
        pScene = scene.parallax();
      });

    }
    /** @ngInject */
    function ParallaxController() {
      var vm = this;

      vm.rotation = rotation;
      vm.calcStyle = calcStyle;

      function calcStyle(layer) {
        return {
          "transform": "rotate(" + rotation(layer) + 'deg)',
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