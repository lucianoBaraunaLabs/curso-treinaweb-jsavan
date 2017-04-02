var User = function(params){
    var name = params.name,
        age = params.age,
        address = params.address,
        gender = params.gender;

    this.getDescription= function(){
        var space = ' ';
        return name.concat(space,age,space, address,space,gender);
    }

    this.save = function(){
        alert(name.concat(name+' salvo com sucesso '));
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


var user = new User({
    name: 'Jose',
    age: 18,
    address: 'Rua 2',
    gender: 'Masculino'
});

console.log(user.getDescription());
user.save();


