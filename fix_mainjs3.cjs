const fs = require('fs');
let js = fs.readFileSync('src/main.js', 'utf8');

const startIdx = js.indexOf('window.openMinistryModal = function(id) {');
if(startIdx !== -1) {
    const endIdxStr = 'setTimeout(() => modal.remove(), 300);\n  }\n};\n';
    let endIdx = js.indexOf(endIdxStr);
    if(endIdx !== -1) {
        js = js.substring(0, startIdx) + js.substring(endIdx + endIdxStr.length);
        fs.writeFileSync('src/main.js', js, 'utf8');
        console.log('Successfully removed old modal functions from main.js');
    } else {
        console.log('Could not find end index string');
    }
} else {
    console.log('Could not find start index');
}
