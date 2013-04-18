var url = 'http://localhost:9000/#/Create';

casper.start(url, function ()
{
    casper.test.assertEquals(this.getCurrentUrl(), url, 'No automatic redirect');
});

casper.run(function()
{
    casper.test.done(1);
});
