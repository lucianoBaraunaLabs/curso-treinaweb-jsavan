// Codigo sem responsabilidade

// var form = document.getElementById('reportForm');

// form.addEventListener('submit', function(event){
//     event.preventDefault();
    
//     var titleDoc = document.getElementById('title').value;
//     var textDoc = document.getElementById('text').value;
    
//     var areaCaixa = document.createElement('div');
//     var areaTitle = document.createElement('h1');
//     var areaTextDoc = document.createElement('p');

    
//     areaTitle.textContent = titleDoc;
//     areaTextDoc.textContent = textDoc;

//     areaCaixa.appendChild(areaTitle);
//     areaCaixa.appendChild(areaTextDoc);

//     form.appendChild(areaCaixa);
    
// });

// Codigo com responsabilidade

var getElementValue = function(id){
    return document.getElementById(id).value;
};

var createMarcation = function(tag){
    return document.createElement(tag);
};
    

// Documento
var filePrint = function(){
    var titleDocValue = getElementValue('title');
    var textDocValue = getElementValue('text');
    return {
        titleDocValue: titleDocValue,
        textDocValue: textDocValue
    };
};

// Impressora
var Print = function(params){
    var areaBox = createMarcation('div');
    var areaTitle = createMarcation('h1');
    var areaTextDoc = createMarcation('p');

    this.titleDoc = params.titleDoc;
    this.bodyDoc = params.bodyDoc;

    areaTitle.textContent = this.titleDoc;
    areaTextDoc.textContent = this.bodyDoc;    

    this.printDoc = function(target){
        var locationPrint = document.getElementById(target);
        
        areaBox.appendChild(areaTitle);
        areaBox.appendChild(areaTextDoc);
        locationPrint.appendChild(areaBox);
    };
    
};

var form = document.getElementById('reportForm');

form.addEventListener('submit', function(event){
    event.preventDefault();
    var doc = filePrint();
    var print1 = new Print({
                            titleDoc: doc.titleDocValue, 
                            bodyDoc: doc.textDocValue
                        });
    print1.printDoc('reportForm');
});