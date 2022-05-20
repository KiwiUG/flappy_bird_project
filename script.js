var pipes = document.getElementById("pipes");
var gap = document.getElementById("gap");
var player = document.getElementById("player");
var jumping = 0;
var counter = 0;

gap.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    gap.style.top = random + "px";
    counter++;
});
setInterval(function(){
    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    if(jumping==0){
        player.style.top = (playerTop+3)+"px";
    }
    var pipesLeft = parseInt(window.getComputedStyle(pipes).getPropertyValue("left"));
    var gapTop = parseInt(window.getComputedStyle(gap).getPropertyValue("top"));
    var cTop = -(500-playerTop);
    if((playerTop>480)||((pipesLeft<20)&&(pipesLeft>-50)&&((cTop<gapTop)||(cTop>gapTop+130)))){
        alert("Game over. Score: "+(counter-1));
        player.style.top = 100 + "px";
        counter=0;
    }
},10);

    function jump(){
        jumping = 1;
        let jumpCount = 0;
        var jumpInterval = setInterval(function(){
            var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
            if((playerTop>6)&&(jumpCount<15)){
                player.style.top = (playerTop-5)+"px";
            }
            if(jumpCount>20){
                clearInterval(jumpInterval);
                jumping=0;
                jumpCount=0;
            }
            jumpCount++;
        },10);
    };

