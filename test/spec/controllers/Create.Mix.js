'use strict';

describe('Controller: CreateMixCtrl', function () {

  // load the controller's module
  beforeEach(module('SpinningApp'));

  var CreateMixCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateMixCtrl = $controller('CreateMixCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
