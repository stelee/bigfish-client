'use strict';

describe('impressViewApp.version module', function() {
  beforeEach(module('impressViewApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
