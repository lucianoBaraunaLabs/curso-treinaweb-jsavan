var MYAPP = {
  utils:{},
  formater:{}
}

MYAPP.utils.validator = (function(){
  var isValidEmail = function(email){
    var validEmail = /^(\w+[._-]?)+@\w+(\w+[.]?)+$/; //ailton.santos@email.com
    return validEmail.test(email);
  }

  var isValidPhone = function(phone){
    var validPhone = /^\d{5}-\d{4}$/; // 98765-8765
    return validPhone.test(phone);
  }

  var isValidDate = function(date){
    var validDate = /^\d{2}\/\d{2}\/\d{4}$/; // dd/mm/yyyy
    return validDate.test(date)
  }

  return {
  isValidEmail: isValidEmail,
    isValidPhone: isValidPhone,
    isValidDate: isValidDate
  }
})();

MYAPP.utils.formater = (function(){

  var date = function(date){
    if(date){
      if(typeof date === 'string'){
        if(date.length === 10){
          var dateArray = date.split('-');
          return dateArray.join('/');
        }
        throw new Error('invalid formate string');
      }
      throw new Error('parameter is not a valid value');
    }else{
      throw new Error('This function needs one parameter');
    }
  }

  return {
    date:date
  }
})();

var validator = MYAPP.utils.validator,
    formater = MYAPP.utils.formater;

QUnit.test('Email valido', function(assert){
  assert.expect(4);
  assert.ok(validator.isValidEmail('bruno@email.com'), 'Email valido bruno@email.com');
  assert.notOk(validator.isValidEmail('brunoemail.com'), 'Email invalido brunoemail.com');
  assert.notOk(validator.isValidEmail(123456), 'Valor invalido');
  assert.notOk(validator.isValidEmail(), 'Sem valor');
});


QUnit.test('Telefone valido', function(assert){
  assert.expect(3);
  assert.ok(validator.isValidPhone('99543-5566'), 'Telefone valido');
  assert.notOk(validator.isValidPhone(995443243), 'Telefone invalido');
  assert.notOk(validator.isValidPhone(), 'Sem valor');
});

QUnit.module('MYAPP.utils.formater');

QUnit.test('Data formatada',function(assert){
  assert.equal(formater.date('22-01-1994'),'22/01/1994','Data formatada ');
  assert.throws(
    function(){
      formater.date('21-011-1994');
    },
    function( err ) {
          return err.message === 'invalid formate string';
      },
      'String inválida'
    );
    assert.throws(
    function(){
      formater.date(123412);
    },
    function( err ) {
          return err.message === 'parameter is not a valid value';
      },
      'Valor invalido'
    );
    assert.throws(
    function(){
      formater.date();
    },
    function( err ) {
          return err.message === 'This function needs one parameter';
      },
      'Valor vazio'
    );
});