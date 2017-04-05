var MYAPP = {
    views: {},
    controllers: {},
    models: {}
};


MYAPP.models.User = function(params){
    this.name = params.name;
    this.age = params.age;
    this.gender = params.gender;

    this.save = function(){
        return('O usuario '+this.name+' foi criado com sucesso');
    }

    this.isValid = function(){
        return this.name && this.age && this.gender;
    }
}

MYAPP.controllers.user = (function(User){
    var save = function(userJSON){
        var user = new User(userJSON);
        if(user.isValid()){
            alert(user.save());
        } else {
            alert('Erro ao cadastrar');
        }
        
    };


    return {
        save: save
    }

})(MYAPP.models.User)


MYAPP.views.user = (function(userController){
    var form = document.getElementById('userForm');

    var getElementValue = function(id){
        return document.getElementById(id).value;
    }

    var getUserDOM = function(){
        var name = getElementValue('name');
        var age = getElementValue('age');
        var gender = getElementValue('gender');
        return {
            name: name,
            age: age,
            gender: gender
        };
    }


    form.addEventListener('submit', function(event){
        event.preventDefault();
        userController.save(getUserDOM());
    });
})(MYAPP.controllers.user)


