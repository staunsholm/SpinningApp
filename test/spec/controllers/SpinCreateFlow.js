'use strict';

describe('Controller: SpinCreateFlowCtrl', function () {

  // load the controller's module
  beforeEach(module('SpinningApp'));

  var SpinCreateFlowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpinCreateFlowCtrl = $controller('SpinCreateFlowCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
