
import fs from 'fs';

const filePath = 'src/main.js';
let content = fs.readFileSync(filePath, 'utf8');

// 1. First, mark Subsedes so we don't apply the general rule to them yet
// Or just handle them specially.

// I'll use a regex to find all congregation objects
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
    
    // Add EBD to all
    if (!newCultos.includes("EBD")) {
        newCultos += " · EBD Dom 8h30";
    }
    
    // Special rule for Subsede
    if (m.nome.toLowerCase().includes("subsede")) {
        // Tira Qua, coloca Ter 19h30
        newCultos = newCultos.replace(/Qua\s*\d+h\d*/g, "Ter 19h30");
        // Ensure formatting (some might have Qua 19h30)
        newCultos = newCultos.replace(/Ter 19h30\s*·\s*Ter 19h30/g, "Ter 19h30");
    }
    
    const newFull = m.full.replace(`cultos: "${m.cultos}"`, `cultos: "${newCultos}"`);
    newContent = newContent.replace(m.full, newFull);
}

fs.writeFileSync(filePath, newContent);
console.log("Updated congregacoes successfully.");
