'use strict';

describe('Controller: SpinMenuCtrl', function ()
{

    // load the controller's module
    beforeEach(module('SpinningApp'));

    var SpinMenuCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope)
    {
        scope = $rootScope.$new();
        SpinMenuCtrl = $controller('SpinMenuCtrl', {
            $scope: scope
        });
    }));
});
