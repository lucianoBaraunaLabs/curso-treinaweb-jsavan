// Todo teste precisa de assercao (uma comparacao).

var sum = function(value1, value2){
    return value1 + value2;
}

var mult = function(value1, value2){
    return value1 * value2 + 1;
}

QUnit.test('Teste da função sum', function(assert){
    assert.equal(sum(2,3), 5, "sum(2,3) = 5");
    assert.equal(sum(2,2), 4, "sun(2,2) = 4");
    assert.notEqual(sum(2,2), 5, "sun(2,2) != 5");
});

QUnit.test('Teste da função multiplicação', function(assert){
    assert.equal(mult(2,2), 4, "mult(2,2) = 4")
});