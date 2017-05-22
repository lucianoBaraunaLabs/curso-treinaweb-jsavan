// Factory para criar objetos
Sandbox('ObjectMaker', [], function(){
    var ObjectMaker = function(){};

    ObjectMaker.prototype.getImgPath = function(){
        return 'img/'+this.img;
    }

    ObjectMaker.factory = function(type){
        var fruit;

        if(typeof ObjectMaker[type] !== 'function'){
            throw new Error(type + ' não é uma função');
        }

        if(typeof ObjectMaker[type].prototype.getImgPath !== 'function'){
            ObjectMaker[type].prototype = ObjectMaker.prototype;
        }

        fruit = new ObjectMaker[type]();

        return fruit;
    }

    ObjectMaker.Orange = function(){
        this.name = 'Orange';
        this.img = 'orange.png';
        this.x = 0;
        this.y = 0;
        this.width = 20;
        this.height = 25
    }
    
    ObjectMaker.Cherry = function(){
        this.name = 'Cherry';
        this.img = 'cherry.png';
        this.x = 0;
        this.y = 0;
        this.width = 20;
        this.height = 25
    }
    
    ObjectMaker.Life = function(){
        this.name = 'Life';
        this.img = 'life.png';
        this.x = 0;
        this.y = 0;
        this.width = 20;
        this.height = 25
    }
    
    ObjectMaker.Box = function(){
        this.name = 'Box';
        this.img = 'box.png';
        this.x = 0;
        this.y = 0;
        this.width = 20;
        this.height = 25
    }
    
    return ObjectMaker;

})