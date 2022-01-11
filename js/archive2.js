const canvas = document.querySelector('.myCanvas');
const width = canvas.width = 600; //window.innerWidth;
const height = canvas.height = 650; //window.innerHeight;
const ctx = canvas.getContext('2d');

canvasSetup();

//////////////////////////////

function centerX(n){ return (width / 2) - (n.width / 2);}
function centerY(n){ return (height / 2) - (n.height / 2);}

function canvasSetup(){
    ctx.fillStyle = 'rgb(46, 47, 48)';
    ctx.fillRect(0, 0, width, height);

    var player = new Image();
    player.src = "img/player.png";
    player.onload = function() {
        // player.width = player.x * 0.15;
        // player.height = player.y * 0.15;
        ctx.drawImage(player, 0, 0, player.width * 0.15, player.height * 0.15);
        // var domElement = document.getElementById('')
        // player.style.left = centerX(player);
        // player.style.top = 50;
      }
      
}

// var xWing = new WebImage ("https://codehs.com/uploads/05a4ed5b608651926cdc505331750ae8");
// var bgColor = new Color(46, 47, 48);
// var background = new Rectangle(400,480);
// var player;
// var tieFighter;
// var laserHColor = new Color(23, 69, 255);
// var laserColor = new Color(96, 124, 240);
// var laserStack = new Stack();
