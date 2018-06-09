//Retrieve the template data from the HTML .
var template = $('#handlebars-demo').html();

var context = { "name" : "John Carroll", "occupation" : "developer" };

//Compile the template data into a function
var templateScript = Handlebars.compile(template);

var html = templateScript(context);
//html = 'My name is Ritesh Kumar . I am a developer.'

$(document.body).append(html);
console.log("does this page even run?");
