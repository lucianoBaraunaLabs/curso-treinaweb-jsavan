var MYAPP = {
    models:{}, // ex: construtores
    views:{}, // ex: componentes
    controllers:{}, // intermedio da view e models, 
                    // responsavel em saber para onde e enviado os dados
    utils:{} //alguns utilitarios
}

MYAPP.models.User = function (name, email, gender) {
    this.name = name;
    this.email = email;
    this.gender = gender;
}

MYAPP.utils.validator = (function(){
    var isValidEmail = function(){
        return true;
    }
    return { isValidEmail: isValidEmail}
})();



MYAPP.controllers.user = (function(User, validator) {
    var user = new User('Luciano', 'bara@email', 'masculino');
    console.log(user);
    console.log(validator.isValidEmail(user.email))
    return { // deixando o metodo acessivel do lado de fora
        user: user,
    }
})(MYAPP.models.User, MYAPP.utils.validator);


