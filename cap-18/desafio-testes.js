var Player = function (name) {
    this.name = name;
    this.level = 0;
}

Player.prototype.levelUp = function(){
    this.level ++;
}

QUnit.test("Testando Player", function(assert){
    var player1 = new Player('Jose');
    var player2 = new Player('Ari');
    var player3 = new Player('Jose');
    assert.expect(2);
    // Para conseguir testar obj
    assert.notDeepEqual(player1, player2, 'player1 e diferente de player2');
    assert.deepEqual(player1, player3, 'player1 e igual ao player3');

});

QUnit.test("Testando propriedades do player", function(assert){
    
    var player1 = new Player('Felipe');
    var player2 = new Player('Juarez');
    assert.expect(4);
    assert.equal(player1.name, 'Felipe', 'player1.name == Felipe');
    assert.equal(player2.name, 'Juarez', 'player1.name == Juarez');

    player1.levelUp();
    player2.levelUp();
    player2.levelUp();

    assert.equal(player1.level, 1, 'player1.level == 1');
    assert.equal(player2.level, 2, 'player1.level == 2');
});


QUnit.test('Um teste', function(assert){
    assert.expect(2);

    function calc(x, operation){
        return operation(x);
    }

    var result = calc(2, function(x){
        assert.ok(true, 'calc foi chamada');
        return x * x
    });

    assert.equal(result, 4, '2 ao quadrado é igual 4')


})

