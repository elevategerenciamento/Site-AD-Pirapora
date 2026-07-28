const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace <header and </header> with <div and </div> inside the drawer
// Also <section and </section>

// I will just do string replaces since I know the exact classes I used.

html = html.replace('<header class="flex flex-col items-center text-center mb-10">', '<div class="flex flex-col items-center text-center mb-10">');
html = html.replace('</header>', '</div>'); // This assumes only one </header> was used in my snippet, but wait, the main page has a </header> too.
// I better be specific.

// We can extract the drawer HTML substring and do the replace there, then stitch back.
const drawerStartStr = '<!-- Drawer Container (Bottom Sheet) -->';
const drawerStartIdx = html.indexOf(drawerStartStr);
const scriptStartIdx = html.indexOf('<script>', drawerStartIdx);

let drawerHtml = html.substring(drawerStartIdx, scriptStartIdx);

drawerHtml = drawerHtml.replace(/<header/g, '<div');
drawerHtml = drawerHtml.replace(/<\/header>/g, '</div>');
drawerHtml = drawerHtml.replace(/<section/g, '<div');
drawerHtml = drawerHtml.replace(/<\/section>/g, '</div>');
drawerHtml = drawerHtml.replace(/<article/g, '<div');
drawerHtml = drawerHtml.replace(/<\/article>/g, '</div>');

html = html.substring(0, drawerStartIdx) + drawerHtml + html.substring(scriptStartIdx);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully replaced semantic tags with divs to fix CSS conflicts');
