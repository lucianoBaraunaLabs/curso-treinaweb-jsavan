var form = document.getElementById('userForm');

var getElementValue = function(id){
    return document.getElementById(id).value;
}

var getUserDOM = function(){
    var name = getElementValue('name');
    var age = getElementValue('age');
    var gender = getElementValue('gender');
    return new User({
        name: name,
        age: age,
        gender: gender
    });
}

var User = function(params){
    this.name = params.name;
    this.age = params.age;
    this.gender = params.gender;

    this.save = function(){
        alert('O usuario '+this.name+' foi criado com sucesso');
    }
}

form.addEventListener('submit', function(event){
    event.preventDefault();
    var user = getUserDOM();
    user.save();    
});