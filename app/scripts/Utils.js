var Utils = {};

Utils.moveBackground = function(page)
{
    var dt = window.innerHeight * 0.5 / 6;
    document.querySelector('.bgImage').style.backgroundPositionX = -page*dt + "px";
};