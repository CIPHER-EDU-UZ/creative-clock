(function(){
    var time = new Date(),
    second = time.getSeconds() / 60 *360,
    hours = time.getHours() /12 * 360 + time.getMinutes() / 60 * 30,
    minute = time.getMinutes() / 60 * 360 + time.getSeconds() / 60 *6,
    animation = [
        "@keyframes sec-hand{from{transform:rotate(" + second + "deg);}to{transform:rotate(" + (second + 360 ) + "deg);}}",
        "@keyframes min-hand{from{transform:rotate(" + minute + "deg);}to{transform:rotate(" + (minute + 360 ) + "deg);}}",
        "@keyframes hr-hand{from{transform:rotate(" + hours + "deg);}to{transform:rotate(" + (hours + 360 ) + "deg);}}",
    ].join("");
    document.querySelector("#clock-animate").innerHTML = animation;
})();