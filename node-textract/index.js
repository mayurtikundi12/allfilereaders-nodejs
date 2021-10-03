var textract = require('textract');
let fs = require('fs');
var config = {
    preserveLineBreaks: true
};

textract.fromFileWithPath('../sample.pdf',config, function( error, text ) {
    fs.writeFileSync('./result.txt',text, 'utf-8');
    console.log(text);
});

