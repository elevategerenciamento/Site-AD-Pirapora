const fs = require('fs');
let js = fs.readFileSync('src/main.js', 'utf8');

const startIdx = js.indexOf('window.openMinistryModal = function(id) {');
if(startIdx !== -1) {
    const endIdx = js.indexOf('// TV Modal Handling');
    if(endIdx !== -1) {
        js = js.substring(0, startIdx) + js.substring(endIdx);
        fs.writeFileSync('src/main.js', js, 'utf8');
        console.log('Successfully removed old modal functions from main.js');
    } else {
        console.log('Could not find end index');
    }
} else {
    console.log('Could not find start index');
}
