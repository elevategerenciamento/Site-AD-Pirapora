const fs = require('fs');

const newDrawerHtml = fs.readFileSync('new_drawer.html', 'utf8');

let content = fs.readFileSync('index.html', 'utf8');
const drawerStartIndex = content.indexOf('<!-- Backdrop Overlay -->');
const scriptStartIndex = content.indexOf('<script>', drawerStartIndex);
let scriptEndIndex = content.indexOf('</script>', scriptStartIndex);

if (scriptEndIndex !== -1) {
    scriptEndIndex += '</script>'.length;
}

if (drawerStartIndex !== -1 && scriptEndIndex !== -1) {
    content = content.substring(0, drawerStartIndex) + newDrawerHtml + content.substring(scriptEndIndex);
    fs.writeFileSync('index.html', content, 'utf8');
    console.log('Successfully replaced drawer with bottom sheet layout.');
} else {
    console.log('Could not find indices properly.', {drawerStartIndex, scriptStartIndex, scriptEndIndex});
}
