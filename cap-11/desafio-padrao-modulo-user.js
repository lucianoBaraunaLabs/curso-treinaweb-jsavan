var MYAPP = {
    models: {},
    views: {},
    controller: {},
    utils: {}

}

MYAPP.models.User = function(params){    
    this.name = params.name,
    this.age = params.age,
    this.address = params.address,
    this.gender = params.gender;
};

MYAPP.views = (function(User){
    
    console.log(User);
    
    var user = new User({
        name: 'Jose',
        age: 18,
        address: 'Rua 2',
        gender: 'Masculino'
    });
    

    var getDescription = function(){
        var space = ' ';
        return user.name.concat(space,user.age,space, user.address,space,user.gender);
    };

    return {
        user: user,
        getDescription: getDescription
    }

})(MYAPP.models.User);

MYAPP.controller = (function(view, User){
    var user = view.user;

    var save = function(user){
        if (user.age >= 18){ 
            alert(user.name.concat(' salvo com sucesso '));
        } else {
            alert('merda');
        }
    }
    
    return {
        save: save(user)
    };

})(MYAPP.views, MYAPP.models.User);


