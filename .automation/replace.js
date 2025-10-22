var Handlebars = require('handlebars')

Handlebars.registerHelper('replace', function(find, replace, options) {
    var string = options.fn(this);
    return string.replace(new RegExp(find, 'g'), replace);
});