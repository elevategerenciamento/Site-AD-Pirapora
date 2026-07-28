const fs = require('fs');
let js = fs.readFileSync('src/main.js', 'utf8');

// Use a regex or simple string replacement to remove the old openMinistryModal and closeMinistryModal
// Because it might be tricky to match the exact brackets, I can just replace the implementation with a call to the new one, or leave it empty so the index.html one takes precedence?
// Actually, if I just rename the old one or comment it out, the global one from index.html will work!
// Let's replace 'window.openMinistryModal = function' with '// window.openMinistryModal = function'
// And replace 'window.closeMinistryModal = function' with '// window.closeMinistryModal = function'

js = js.replace(/window\.openMinistryModal\s*=\s*function\(id\)\s*\{[\s\S]*?\}\s*window\.closeMinistryModal/g, '// REMOVED OLD MODAL\nwindow.closeMinistryModal');
js = js.replace(/window\.closeMinistryModal\s*=\s*function\(\)\s*\{[\s\S]*?document\.body\.style\.overflow\s*=\s*'';\s*\}/g, '// REMOVED OLD CLOSE MODAL');

fs.writeFileSync('src/main.js', js, 'utf8');
console.log('Successfully removed old modal functions from main.js');
