var area = (function(){
    var retangulo = function(base, altura){
        var area = base * altura;
        return area;
    }
    
    var triangulo = function(base, altura){
        var area = (base * altura) / 2
        return area;
    }
    
    var trapezio = function(baseMaior, baseMenor, altura){
        var area =  ((baseMaior + baseMenor) * altura)/2;
        return area;
    }
    

    return {
        retangulo:retangulo,
        triangulo:triangulo,
        trapezio:trapezio
    }
})();

console.log(area.retangulo(2,3));
console.log(area.triangulo(3,1,5));
console.log(area.trapezio(6,3,1.5));