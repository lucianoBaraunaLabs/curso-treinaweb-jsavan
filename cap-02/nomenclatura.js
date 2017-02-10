var afg = (function(){
    var ar = function(b, a){
        return b * a;
    }
    
    var at = function(b, a){
        return (b * a)/2;
    }
    
    var ata = function(B, b, h){
        return ((B + b) * h)/2;
    }
    

    return {
        ar:ar,
        at:at,
        ata:ata
    }
})();

console.log(afg.ar(2,3));
console.log(afg.at(3,1,5));
console.log(afg.ata(6,3,1.5));