'use strict';

describe('Controller: PlayCtrl', function ()
{

    // load the controller's module
    beforeEach(module('SpinningApp'));

    var PlayCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope)
    {
        scope = $rootScope.$new();
        PlayCtrl = $controller('PlayCtrl', {
            $scope: scope
        });
    }));
});
