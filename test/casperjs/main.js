var url = 'http://localhost:9000/#/';

casper.start(url, function ()
{
    casper.test.assertEval(function()
    {
        return document.querySelectorAll('li').length === 4;
    }, "Menu is complete");


});

casper.run(function()
{
    casper.test.done(1);
});
