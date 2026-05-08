
import fs from 'fs';

const filePath = 'src/main.js';
let content = fs.readFileSync(filePath, 'utf8');

const congregacaoRegex = /\{[\s\S]*?id:\s*\d+[\s\S]*?nome:\s*"([\s\S]*?)"[\s\S]*?cultos:\s*"([\s\S]*?)"[\s\S]*?\}/g;

let match;
let newContent = content;

const matches = [];
while ((match = congregacaoRegex.exec(content)) !== null) {
    matches.push({
        full: match[0],
        nome: match[1],
        cultos: match[2]
    });
}

for (const m of matches) {
    let newCultos = m.cultos;
    
    // Normalize existing EBD
    newCultos = newCultos.replace(/ · EBD/g, " \n EBD");
    
    // Add EBD if missing
    if (!newCultos.includes("EBD")) {
        newCultos += " \n EBD Dom 8h30";
    }
    
    // Special rule for Subsede
    if (m.nome.toLowerCase().includes("subsede")) {
        newCultos = newCultos.replace(/Qua\s*\d+h\d*/g, "Ter 19h30");
    }
    
    const newFull = m.full.replace(`cultos: "${m.cultos}"`, `cultos: "${newCultos}"`);
    newContent = newContent.replace(m.full, newFull);
}

fs.writeFileSync(filePath, newContent);
console.log("Updated congregacoes successfully with newlines.");
