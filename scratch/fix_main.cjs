const fs = require('fs');
let content = fs.readFileSync('src/main.js', 'utf8');
content = content.replace(/cultos:\s*"([^\"]*?)\r?\n\s*(EBD[^\"]*)"/g, 'cultos: "$1 \\n $2"');
fs.writeFileSync('src/main.js', content);
