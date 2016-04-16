(function() {
  'use strict';

  angular
    .module('herrvincent')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
