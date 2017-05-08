var MYAPP = {
  utils:{}
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


var validator = MYAPP.utils.validator;

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


QUnit.test('Data valida', function(assert){
  assert.expect(4);
  assert.ok(validator.isValidDate('22/01/1994'), 'Data valida 22/01/1994');
  assert.notOk(validator.isValidDate('22-01-1994'), 'Data invalida 22-01-1994');
  assert.notOk(validator.isValidDate(22011994), 'Valor invalido');
  assert.notOk(validator.isValidDate(), 'Sem valor');
});