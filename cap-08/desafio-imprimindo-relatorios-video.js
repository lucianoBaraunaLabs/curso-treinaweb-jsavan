var form = document.getElementById('reportForm');

// Modelo de formulario
var Report = function(params){
    var title = params.title;
    var text = params.text;

    this.getContent = function(){
        return '<h1>'+title+'</h1>'+text;
    }
}

var getElementValue = function(id){
    return document.getElementById(id).value;
}

var getReportValuesDom = function(){
    var title = getElementValue('title');
    var text = getElementValue('text');
    return { title: title, text: text};
}

var print = function(report){
    document.write(report.getContent());
}

form.addEventListener('submit', function(event){
    event.preventDefault();
    var report = new Report(getReportValuesDom());
    print(report)
});