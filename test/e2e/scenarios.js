'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */
describe('Spinning App', function ()
{
    beforeEach(function ()
    {
        browser().navigateTo('/index.html');
    });

    it('should automatically redirect to / when location hash/fragment is empty', function ()
    {
        expect(browser().location().url()).toBe("/");
    });

    describe('Find', function ()
    {

        beforeEach(function ()
        {
            browser().navigateTo('#/find');
        });

        it('should render Find when user navigates to /find', function ()
        {
            expect(element('h2:first').text()).toMatch('All Sessions');
        });

    });

    describe('Create', function ()
    {

        beforeEach(function ()
        {
            browser().navigateTo('#/create');
        });

        it('should render Create view when user navigates to /create', function ()
        {
            expect(element('.search').count()).toBeGreaterThan(0);
            expect(element('.session')).toBeDefined();
        });

    });
});