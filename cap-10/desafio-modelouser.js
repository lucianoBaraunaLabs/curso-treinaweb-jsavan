var User = function(){
    var name = 'Ary';
    var gender = 'Masculino';
    var age = 25;

    this.getUserMoldel= function(){
        return {
            name: name,
            gender: gender,
            age: age,
        }
    }
   
};


var logar = (function(){
    return {
        login: function(user){
            if(user.age >= 25){
                alert('Usuario logado');
            } else {
                alert('Usuario invalido');
            }
        }
    }
})();


var user = new User();

var user1 = user.getUserMoldel();

console.log(logar.login(user1));


