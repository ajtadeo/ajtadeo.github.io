window.onload = function() {
    var width = getWidth(); 
    var height = getHeight();
    var bgColor = new Color(36, 36, 36);

    var stars = new WebImage("img/stars.png");

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
        stars.
        
    }

    function titlePage(){
        var titleText = new Text ("GALAXY INVADERS", "32pt Trebuchet MS");
        drawShape(titleText, centerX(titleText), 200, Color.white, false);
        add(titleText);

        var bodyText = new Text ("Avoid the enemy ships!", "16pt Trebuchet MS");
        drawShape(bodyText, centerX(bodyText), 260, Color.white, false);
        add(bodyText);
    }

    ///////////////////////////////////

    function start(){
        setUp();
        titlePage();
    }

    if (typeof start === 'function') {
        start();
    }
};