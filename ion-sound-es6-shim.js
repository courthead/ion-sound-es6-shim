(function () {
  /* globals define, ion */

  function generateModule(name, values) {
    define(name, [], function () {
      'use strict';

      return values;
    });
  }

  generateModule('ion-sound', { 'default': ion });
})();
