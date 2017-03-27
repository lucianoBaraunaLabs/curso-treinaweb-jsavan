var form = document.getElementById('reportForm');

form.addEventListener('submit', function(event){
    event.preventDefault();

    // Criando o texto de boa
    // var titleDoc = document.getElementById('title').value;
    // var textDoc = document.getElementById('text').value;
    
    // var areaCaixa = document.createElement('div');
    // var areaTitle = document.createElement('h1');
    // var areaTextDoc = document.createElement('p');

    
    // areaTitle.textContent = titleDoc;
    // areaTextDoc.textContent = textDoc;

    // areaCaixa.appendChild(areaTitle);
    // areaCaixa.appendChild(areaTextDoc);

    // form.appendChild(areaCaixa);    

    var getElementValue = function(id){
        return document.getElementById(id).value;
    };
   

    var printData = function(titleDoc, textDoc){
        var areaCaixa = document.createElement('div');
        var areaTitle = document.createElement('h1');
        var areaTextDoc = document.createElement('p');

        areaTitle.textContent = titleDoc;
        areaTextDoc.textContent = textDoc;

        areaCaixa.appendChild(areaTitle);
        areaCaixa.appendChild(areaTextDoc);

        return areaCaixa;
    }

    var newFile = ;



    var titleDoc = getElementValue('title');
    var textDoc = getElementValue('text');
    

    form.appendChild(printData(titleDoc, textDoc));    

    
    
});