const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const additionalStyles = `
    .backdrop-blur-custom {
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
    }
    .custom-scrollbar::-webkit-scrollbar {
        width: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
        background: transparent;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
        background: #c4c6cf;
        border-radius: 10px;
    }
`;

html = html.replace('</style>', additionalStyles + '\n</style>');
fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully injected styles.');
