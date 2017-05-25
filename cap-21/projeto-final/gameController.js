Sandbox('gameController', ['gameView', 'gameConfig', 'Player', 'ObjectMaker'], 
    function(gameView, gameConfig, Player, ObjectMaker){

        var fruit,
            box,
            player,
            gameLoop;

        var createRamdomFruit = function() {
            var fruits = ['Orange', 'Cherry', 'Life'];
            var fruit = fruits[Math.floor(Math.random() * fruits.length)];
            return ObjectMaker.factory(fruit);
        }

        var setRandomPosition = function(fruit){
            fruit.x = Math.floor(Math.random() * (gameConfig.canvas.element.width - fruit.width));
            return fruit;
        }

        var createBox = function(){
            var box = ObjectMaker.factory('Box');
            box.x = ((gameConfig.canvas.element.width - box.width) / 2);
            box.y = (gameConfig.canvas.element.height - box.height);
            return box;
        } 

        var drawView = function(fruit, box, score, life){
            gameView.paintGameBoard();
            gameView.drawObject(fruit);
            gameView.drawObject(box);
            gameView.drawScore(score);
            gameView.drawLife(life);
        }

        var moveFruit = function(){
            fruit.y +=  gameConfig.fruitSpeed;
        }

        var checkFruitCollisionBottom = function(){
            if(fruit.y >= gameConfig.canvas.element.height - fruit.height){
                fruit = setRandomPosition(createRamdomFruit());
                player.life -=1;
            }
        }

        var checkFruitCollisionBox = function(){
            if(fruit.y + fruit.height >= box.y && fruit.x >= box.x && fruit.x <= box.x + box.width){
                player.score +=1;
                if(fruit.name === 'Life'){
                    player.life +=1;
                }
                fruit = setRandomPosition(createRamdomFruit());
            }
        }

        var running = function(){
            moveFruit();
            checkFruitCollisionBox();
            checkFruitCollisionBottom();
            drawView(fruit, box, player.score, player.life);
            if(player.life <= 0){
                clearInterval(gameLoop);
            }
        }

        var initGame = function(){
            fruit = setRandomPosition(createRamdomFruit());
            box = createBox();
            player = new Player('Player1');
            gameLoop = setInterval(running,100);
        }

        var moveBox = function(direction){
            if(direction === 'right' && box.x < (gameConfig.canvas.element.width - box.width - box.width)){
                box.x += gameConfig.boxSpeed;
            }else if (direction === 'left' && box.x > 0){ 
                box.x -= gameConfig.boxSpeed;
            }
        }

        window.addEventListener('keydown', function(event){
            var pressedKey = event.which;

            if(pressedKey == gameConfig.keyCode.LEFT){
                moveBox('left');
            }else if(pressedKey == gameConfig.keyCode.RIGHT){
                moveBox('right');
            }

            drawView(fruit, box, player.score, player.life);

        });

        initGame();
    
});