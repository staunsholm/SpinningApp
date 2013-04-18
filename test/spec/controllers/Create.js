'use strict';

describe('Controller: CreateCtrl', function ()
{

    // load the controller's module
    beforeEach(module('SpinningApp'));

    var CreateCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope)
    {
        scope = $rootScope.$new();
        CreateCtrl = $controller('CreateCtrl', {
            $scope: scope
        });
    }));
/*
    it('should contain a menu of 3 elements', function ()
    {
        expect(scope.awesomeThings.length).toBe(4);
    });*/
});
