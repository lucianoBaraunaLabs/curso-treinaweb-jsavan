Sandbox('gameView', ['gameConfig'], function(gameConfig, ObjectMaker){
    var canvas = gameConfig.canvas.element;
    
    var context = canvas.getContext('2d');

    var paintGameBoard = function(){
        var background = gameConfig.color.background,
            boardBorder = gameConfig.color.boardBorder,
            gameWidth = gameConfig.canvas.element.width,
            gameHeight = gameConfig.canvas.element.height;

        context.fillStyle = background;
        context.fillRect(0,0, gameWidth, gameHeight);
        context.fillStroke = boardBorder;
        context.strokeRect(0,0, gameWidth, gameHeight);
    }

    var drawObject = function(object){
        var img = new Image();
        img.src = object.getImgPath();
        context.drawImage(img, object.x, object.y, object.width, object.height);
    }

    var drawScore = function(score){
        context.font = gameConfig.score.fontAndSize;
        context.fillStyle = gameConfig.color.score;
        context.fillText('Pontos: '+score, gameConfig.score.x, gameConfig.score.y);
    }
    
    var drawLife = function(life){
        context.font = gameConfig.life.fontAndSize;
        context.fillStyle = gameConfig.color.life;
        context.fillText('Vidas: '+life, gameConfig.life.x, gameConfig.life.y);
    }

    var obj = ObjectMaker.factory('Orange');

    obj.x = 100;
    obj.y = 100;

    drawObject(obj);

    return {
        paintGameBoard: paintGameBoard,
        drawObject: drawObject,
        drawLife: drawLife,
        drawScore: drawScore
    }

})