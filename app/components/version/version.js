'use strict';

angular.module('impressViewApp.version', [
  'impressViewApp.version.interpolate-filter',
  'impressViewApp.version.version-directive'
])

.value('version', '0.1');
