const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('    </nav>\r\n  </div>\r\n\r\n  <!-- TICKER', '    </nav>\r\n  </header>\r\n\r\n  <!-- TICKER');
fs.writeFileSync('index.html', html, 'utf8');
const openDivs = (html.match(/<div/g) || []).length;
const closeDivs = (html.match(/<\/div>/g) || []).length;
console.log('Open divs:', openDivs, 'Close divs:', closeDivs);
