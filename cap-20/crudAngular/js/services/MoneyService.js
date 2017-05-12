SaiaDoVermelho.service("MoneyService",function(){
	this.test = function(){
		console.log("service teste");
	}

	var that = this;

	this.money = {
		total: 0,
		saved: 100,
		expenses: {
			total: 0,
			values:[]
		},
		incomings: {
			total: 0,
			values: []
		}
	};

	this.newIncoming = function(incoming){
		if(incoming.name && incoming.value){
			incoming.id = incoming.name;
			if(!findElementInListById(incoming.id, that.money.incomings.values)){
				that.money.incomings.values.push(incoming);
				calculateTotal('incoming');
				calculateTotalSaved();
				return true;
			}
			throw new Error('Este nome já está cadastrado! ('+ incoming.name+')');
		}
		throw new Error('Preencha todos os campos para cadastrar');
	}

	this.deleteIncoming = function (incoming) {
		var element = findElementInListById(incoming.id, that.money.incomings.values);
		if(element){
			that.money.incomings.values.splice(elements.index,1);
			calculateTotal('incoming');
			calculateTotalSaved();
		}
	}


	this.newExpense = function(expense){
		if(expense.name && expense.value){
			expense.id = expense.name;
			if(!findElementInListById(expense.id, that.money.expenses.values)){
				that.money.expenses.values.push(expense);
				calculateTotal('expense');
				calculateTotalSaved();
				return true;
			}
			throw new Error('Este nome já está cadastrado! ('+ expense.name+')');
		}
		throw new Error('Preencha todos os campos para cadastrar');
	}


	this.deleteExpense = function (incoming) {
		var element = findElementInListById(incoming.id, that.money.incomings.values);
		if(element){
			that.money.incomings.values.splice(elements.index,1);
			calculateTotal('incoming');
			calculateTotalSaved();
		}
	}




	var findElementInListById = function(id, list){
		for(index in list){
			if(list[index].id === id){
				return {
					index: index,
					element: list[index]
				}
			}
		}
		return null;
	}

	var calculateTotal = function(){
		that.money.expenses.total = 0;
		for(index in that.money[type].values){
			that.money[type].total += that.money[type].values[index].value;
		}
	}

	var calculateTotalSaved = function () {
		that.money.total = that.money.incomings.total - that.money.expenses.total;
		if(that.money.expenses.total < that.money.incomings.total){
			that.money.saved = 100 ((that.money.expenses.total * 100)/that.money.incomings.total)
		} else {
			that.money.saved = 0;
		}

	}


});