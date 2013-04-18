'use strict';

describe('Controller: FindCtrl', function ()
{

    // load the controller's module
    beforeEach(module('SpinningApp'));

    var FindCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope)
    {
        scope = $rootScope.$new();
        FindCtrl = $controller('FindCtrl', {
            $scope: scope
        });
    }));

    it('should have a sessions array in scope', function ()
    {
        expect(scope.sessions.length).toBeGreaterThan(0);
    });
});
