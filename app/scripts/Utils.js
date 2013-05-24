var Utils = {};

Utils.bgImage = document.querySelector('.bgImage');
Utils.container = document.querySelector('.container');

Utils.moveBackground = function(page)
{
    var dt = window.innerWidth / 4;
    Utils.bgImage.style.webkitTransform = "translateX(" + -page*dt + "px)";
    Utils.container.className = "";
    Utils.container.className = "container fadeContent";
    setTimeout(function() {
        Utils.container.className = "container";
    }, 800);
};

Utils.isOnline = function()
{
    return false;
};