function PrizeDraw(){};

PrizeDraw.prototype.sorty = function(litsPlayers){
}
    
PrizeDraw.factory = function(type){
    var prize
    if(typeof PrizeDraw[type] !== "function"){
        throw {
            message: type.concat(' nao existe.')
        }
    }
    
    if(typeof PrizeDraw[type].prototype.sorty !== "function"){
        PrizeDraw[type].prototype = new PrizeDraw();
    }
    prize = new PrizeDraw[type]();

    return prize;
}

PrizeDraw.Casa = function(){
    this.award = ['Liquidificador', 'Panela'];
}

PrizeDraw.Viagem = function(){
    this.award = ['cancun', 'paris'];
}
