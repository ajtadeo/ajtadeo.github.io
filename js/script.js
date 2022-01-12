window.onload = function() {
    var width = getWidth(); 
    var height = getHeight();
    var bgColor = new Color(36, 36, 36);
    var stars1 = new WebImage("https://raw.githubusercontent.com/ajtadeo/ajtadeo.github.io/main/img/starsScroller.png");
    var stars2 = new WebImage("https://raw.githubusercontent.com/ajtadeo/ajtadeo.github.io/main/img/starsScroller.png");

    var titleText = new Text ("GALAXY INVADERS", "48pt Trebuchet MS");
    var bodyText = new Text ("Avoid the enemy ships!", "24pt Trebuchet MS");
    
    const TITLE = 0;
    const PLAY = 1;
    const RESTART = 2;
    const WIN = 3;
    const LOSE = 4;
    var stage = TITLE;

    var player = new WebImage("https://raw.githubusercontent.com/ajtadeo/ajtadeo.github.io/main/img/player.png");

    // AUXILARY FNS ///////////////////////////////////

    function drawShape(variable, x, y, color, border, width, bColor){
        variable.setPosition(x,y);
        variable.setColor(color);
        if (border == true){
            variable.setBorder(border);
            variable.setBorderWidth(width);
            variable.setBorderColor(bColor);
        }
    }

    function centerX(n){ return (width / 2) - (n.getWidth() / 2); }
    function centerY(n){ return (height / 2) - (n.getHeight() / 2);}

    // STAGE FNS ///////////////////////////////////

    function setUp(){
        setBackgroundColor(bgColor);
        stars1.setPosition(0,-650);
        stars2.setPosition(0, -1300);
        add(stars1);
        add(stars2);
        setTimer(starsTimer, 20);

        player.setSize(58.2, 62.7);
        player.setPosition(centerX(player), 520);

        titlePage();
    }

    function starsTimer(){
        if (stars1.y >= 650){
            stars1.setPosition(0, -1300);
        }
        if (stars2.y >= 650){
            stars2.setPosition(0,-1300);
        }
        stars1.move(0,.5);
        stars2.move(0,.5);
    }

    function titlePage(){
        drawShape(titleText, centerX(titleText), 200, Color.white, false);
        add(titleText);
        drawShape(bodyText, centerX(bodyText), 260, Color.white, false);
        add(bodyText);
    }

    function transition(e){
        switch(stage){
            case TITLE:
                stage = 1;
                remove(titleText);
                remove(bodyText);
                add(player);
                break;
            case PLAY:
            case RESTART:
            case WIN:
            case LOSE:

            default:
                println("ERROR");
                break;
        }
    }

    ///////////////////////////////////

    function start(){
        setUp();
        mouseClickMethod(transition);
    }

    if (typeof start === 'function') {
        start();
    }
};