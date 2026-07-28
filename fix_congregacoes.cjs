const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'main.js');
let content = fs.readFileSync(filePath, 'utf8');

// Encontrar início e fim do array congregacoes
const start = content.indexOf('export const congregacoes = [');
const end = content.indexOf('];', start) + 2;

const newArray = `export const congregacoes = [
  // ── PIRAPORA - CONGREGAÇÕES URBANAS ──
  {
    id: 1,
    nome: "Templo Sede — Pirapora",
    bairro: "Santo Antônio",
    endereco: "Rua Ouro Preto, 277, Bairro Santo Antônio — Pirapora",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Ouro+Preto+277+Santo+Antonio+Pirapora+MG",
    cidade: "Pirapora - MG",
    cultos: "Dom 18h30 · Ter 19h · Qui 19h  \\n EBD Dom 8h30",
    destaque: true,
    lideres: [
      { cargo: "1º Dirigente Local", nome: "Pastor Carlos Corrêa de Souza", telefone: "038 99817-9855" }
    ]
  },
  {
    id: 2,
    nome: "Congregação Nova Pirapora",
    bairro: "Nova Pirapora",
    endereco: "R. João Dias da Costa, 98 — Nova Pirapora, Pirapora-MG, 39270-000",
    maps: "https://maps.app.goo.gl/z7sK4DzJn4PmJtcv9",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "1º Dirigente Local", nome: "Pr. Geremias Bispo Ramos", telefone: "38 99948-3323" },
      { cargo: "2º Dirigente Local", nome: "Pr. Elton Pereira da Silva", telefone: "38 99147-4348" }
    ]
  },
  {
    id: 3,
    nome: "Congregação Cidade Jardim",
    bairro: "Cidade Jardim",
    endereco: "Joaquim Ferreira da Costa, 615 — 39272-278, Pirapora-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Joaquim+Ferreira+da+Costa+615+Cidade+Jardim+Pirapora+MG",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "1º Dirigente Local", nome: "Pb. Marcos Magalhães Leite", telefone: "38 99847-3308" },
      { cargo: "2º Dirigente Local", nome: "Pb. Gilberto Ferreira Fagundes", telefone: "38 99975-3768" }
    ]
  },
  {
    id: 4,
    nome: "Congregação Morada do Sol",
    bairro: "Morada do Sol",
    endereco: "Rua Rubi, 257 — 39276-314, Pirapora",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Rubi+257+Morada+do+Sol+Pirapora+MG",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "1º Dirigente Local", nome: "Ev. Paulo Hernani de Andrade Júnior", telefone: "38 99234-2358" },
      { cargo: "2º Dirigente Local", nome: "Pb. Gleydson", telefone: "38 99160-3466" }
    ]
  },
  {
    id: 5,
    nome: "Congregação São Geraldo",
    bairro: "São Geraldo",
    endereco: "Rua José Pedro da Silva, 437 — Pirapora-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Jose+Pedro+da+Silva+437+Sao+Geraldo+Pirapora+MG",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "1º Dirigente Local", nome: "Pb. Narciso Pereira Batista", telefone: "38 99919-7450" },
      { cargo: "2º Dirigente Local", nome: "Coop. Francisco Sidinei de Souza", telefone: "38 99880-9061" }
    ]
  },
  {
    id: 6,
    nome: "Congregação Santos Dumont",
    bairro: "Santos Dumont",
    endereco: "Rua Raimundo Nascimento, 80 — CEP 39276-034, Pirapora-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Raimundo+Nascimento+80+Santos+Dumont+Pirapora+MG",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "1º Dirigente Local", nome: "Pb. José Rocha de Araújo", telefone: "38 99889-0055" },
      { cargo: "2º Dirigente Local", nome: "Ev. André Baptista", telefone: "38 98845-0129" }
    ]
  },
  {
    id: 7,
    nome: "Congregação Sagrada Família",
    bairro: "Sagrada Família",
    endereco: "Rua das Acácias, nº 412 — Pirapora-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+das+Acacias+412+Sagrada+Familia+Pirapora+MG",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "1º Dirigente Local", nome: "Ev. Wenyson Alves Santos", telefone: "38 99972-5481" },
      { cargo: "2º Dirigente Local", nome: "Coop. Marcos Antônio Almeida", telefone: "38 98826-5845" }
    ]
  },
  {
    id: 8,
    nome: "Congregação São João",
    bairro: "São João",
    endereco: "Rua Tiago Quirino de Araújo, 189 — Pirapora-MG, 39270-000",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Tiago+Quirino+de+Araujo+189+Sao+Joao+Pirapora+MG",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "1º Dirigente Local", nome: "Pb. Anderson Pereira da Silva", telefone: "38 98806-6601" },
      { cargo: "2º Dirigente Local", nome: "Coop. Ernandes Batista", telefone: "38 98475-305" }
    ]
  },
  {
    id: 9,
    nome: "Congregação Bom Jesus",
    bairro: "Bom Jesus",
    endereco: "Rua Luiz Cardoso Café, 264 — Pirapora-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Luiz+Cardoso+Cafe+264+Bom+Jesus+Pirapora+MG",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "1º Dirigente Local", nome: "Pr. Ronaldo Moreira", telefone: "38 99154-3579" },
      { cargo: "2º Dirigente Local", nome: "Coop. Osmar Nunes de Azevedo", telefone: "31 97189-1356" }
    ]
  },
  {
    id: 10,
    nome: "Congregação Cícero Passos",
    bairro: "Cícero Passos",
    endereco: "Rua Professora Criselina Passos, 85 — Pirapora-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Professora+Criselina+Passos+85+Cicero+Passos+Pirapora+MG",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "1º Dirigente Local", nome: "Pr. André Marques Vieira", telefone: "38 99823-8119" },
      { cargo: "2º Dirigente Local", nome: "Dc. Ezequiel Barbosa de Souza", telefone: "38 99836-6290" }
    ]
  },
  {
    id: 11,
    nome: "Congregação João Guimarães",
    bairro: "João Guimarães",
    endereco: "Rua 2, nº 93 — 39276-086, Pirapora-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+2+93+Joao+Guimaraes+Pirapora+MG",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "1º Dirigente Local", nome: "Pb. Gilson dos Santos Santana", telefone: "38 99844-5306" },
      { cargo: "2º Dirigente Local", nome: "Pb. Jacó Ribeiro da Silva", telefone: "38 99902-0841" }
    ]
  },
  {
    id: 12,
    nome: "Congregação Industrial",
    bairro: "Industrial",
    endereco: "Rua Emídio Magalhães Freire, 553, Industrial — Pirapora-MG, 39272-002",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Emidio+Magalhaes+Freire+553+Industrial+Pirapora+MG",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "1º Dirigente Local", nome: "Pr. Ademilson Cardoso da Silva", telefone: "38 98809-0621" }
    ]
  },
  // ── REGIÃO DE GUAICUÍ — 1º Setor ──
  {
    id: 13,
    nome: "Subsede Guaicuí",
    bairro: "Guaicuí",
    endereco: "Rua Amazonas, 231 — CEP 39260-000, Guaicuí",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Amazonas+231+Guaicui+Varzea+da+Palma+MG",
    cidade: "Guaicuí - MG",
    cultos: "Dom 19h · Ter 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Pr. Oziel Ferreira da Conceição", telefone: "38 99882-2164" }
    ]
  },
  {
    id: 14,
    nome: "Congregação Paco-Paco",
    bairro: "Paco-Paco",
    endereco: "Assentamento Paco-Paco, BR-365",
    maps: "https://www.google.com/maps/search/?api=1&query=Assentamento+Paco+Paco+BR-365+Pirapora+MG",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Pr. Oziel Ferreira da Conceição", telefone: "38 99882-2164" }
    ]
  },
  // ── REGIÃO DE LAGOA DOS PATOS — 2º Setor ──
  {
    id: 15,
    nome: "Subsede Lagoa dos Patos",
    bairro: "Lagoa dos Patos",
    endereco: "Dona Guiomar, 412 — 39360-000, Lagoa dos Patos",
    maps: "https://www.google.com/maps/search/?api=1&query=Dona+Guiomar+412+Lagoa+dos+Patos+MG",
    cidade: "Lagoa dos Patos - MG",
    cultos: "Dom 19h · Ter 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Pr. Milton Atanázio de Oliveira", telefone: "38 99918-6975" },
      { cargo: "2º Dirigente Local", nome: "Ev. Edberclis Nobre", telefone: "" }
    ]
  },
  // ── REGIÃO DE IBIAÍ — 3º Setor ──
  {
    id: 16,
    nome: "Subsede de Ibiaí",
    bairro: "Ibiaí",
    endereco: "Rua Belo Horizonte, nº 958 — 39350-000, Ibiaí-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Belo+Horizonte+958+Ibiai+MG",
    cidade: "Ibiaí - MG",
    cultos: "Dom 19h · Ter 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Pr. João Batista dos Santos", telefone: "38 99845-0056" }
    ]
  },
  {
    id: 17,
    nome: "Congregação Ponto Chique",
    bairro: "Centro — Ponto Chique",
    endereco: "Avenida São Francisco, 308, Centro — 39328-000, Ponto Chique-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Avenida+Sao+Francisco+308+Centro+Ponto+Chique+MG",
    cidade: "Ponto Chique - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Pr. João Batista dos Santos", telefone: "38 99845-0056" },
      { cargo: "Dirigente de Sub-Setor", nome: "Pr. Valdecir Soares da Silva", telefone: "38 99744-5455" }
    ]
  },
  // ── REGIÃO DE BENTÓPOLIS DE MINAS — 4º Setor ──
  {
    id: 18,
    nome: "Subsede de Bentópolis de Minas",
    bairro: "Bentópolis",
    endereco: "Av. Epaminondas Leite — CEP 39320-000, Bentópolis, Ubaí-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Av+Epaminondas+Leite+Bentopolis+Ubai+MG",
    cidade: "Ubaí - MG",
    cultos: "Dom 19h · Ter 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Ev. Ronaldo Moreira Costa", telefone: "38 99971-0987" }
    ]
  },
  {
    id: 19,
    nome: "Congregação Veloslândia",
    bairro: "Veloslândia",
    endereco: "Rua José Caetano Samer Filho — CEP 39320-000, Veloslândia",
    maps: "https://www.google.com/maps/search/?api=1&query=Veloslandia+Ubai+MG",
    cidade: "Ubaí - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Ev. Ronaldo Moreira Costa", telefone: "38 99971-0987" }
    ]
  },
  {
    id: 20,
    nome: "Congregação Malhada Bonita",
    bairro: "Malhada Bonita",
    endereco: "Rua da Igreja CCB — CEP 39320-000, Malhada Bonita, Ubaí-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Malhada+Bonita+Ubai+MG",
    cidade: "Ubaí - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Ev. Ronaldo Moreira Costa", telefone: "38 99971-0987" }
    ]
  },
  {
    id: 21,
    nome: "Congregação Curralinho",
    bairro: "Curralinho",
    endereco: "Cultos nas casas dos irmãos — Curralinho",
    maps: "https://www.google.com/maps/search/?api=1&query=Curralinho+Ubai+MG",
    cidade: "Ubaí - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Ev. Ronaldo Moreira Costa", telefone: "38 99971-0987" }
    ]
  },
  {
    id: 22,
    nome: "Congregação Areão",
    bairro: "Areão",
    endereco: "Cultos nas casas dos irmãos — Areão",
    maps: "https://www.google.com/maps/search/?api=1&query=Areao+Ubai+MG",
    cidade: "Ubaí - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Ev. Ronaldo Moreira Costa", telefone: "38 99971-0987" }
    ]
  },
  {
    id: 23,
    nome: "Congregação Agrovila",
    bairro: "Agrovila",
    endereco: "Assentamento Agrovila",
    maps: "https://www.google.com/maps/search/?api=1&query=Assentamento+Agrovila+Ubai+MG",
    cidade: "Ubaí - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Ev. Ronaldo Moreira Costa", telefone: "38 99971-0987" }
    ]
  },
  {
    id: 24,
    nome: "Congregação Ponta da Ilha",
    bairro: "Ponta da Ilha",
    endereco: "Ponta da Ilha",
    maps: "https://www.google.com/maps/search/?api=1&query=Ponta+da+Ilha+Ubai+MG",
    cidade: "Ubaí - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Ev. Ronaldo Moreira Costa", telefone: "38 99971-0987" }
    ]
  },
  {
    id: 25,
    nome: "Congregação Pilões",
    bairro: "Pilões",
    endereco: "Fazenda Pilões",
    maps: "https://www.google.com/maps/search/?api=1&query=Fazenda+Piloes+Ubai+MG",
    cidade: "Ubaí - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Ev. Ronaldo Moreira Costa", telefone: "38 99971-0987" }
    ]
  },
  // ── REGIÃO DA SUBSEDE SÃO ROMÃO — 5º Setor ──
  {
    id: 26,
    nome: "Congregação Bairro Raul Simões",
    bairro: "Raul Simões",
    endereco: "Bairro Raul Simões — São Romão-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Raul+Simoes+Sao+Romao+MG",
    cidade: "São Romão - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Pr. Augusto Júnior Jesus Amaral", telefone: "38 99825-1663" }
    ]
  },
  {
    id: 27,
    nome: "Congregação Coqueiro",
    bairro: "Coqueiro",
    endereco: "Comunidade Coqueiro",
    maps: "https://www.google.com/maps/search/?api=1&query=Comunidade+Coqueiro+Sao+Romao+MG",
    cidade: "São Romão - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Pr. Augusto Júnior Jesus Amaral", telefone: "38 99825-1663" }
    ]
  },
  {
    id: 28,
    nome: "Congregação Capão da Onça",
    bairro: "Capão da Onça",
    endereco: "Comunidade Capão da Onça",
    maps: "https://www.google.com/maps/search/?api=1&query=Capao+da+Onca+Sao+Romao+MG",
    cidade: "São Romão - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Pr. Augusto Júnior Jesus Amaral", telefone: "38 99825-1663" }
    ]
  },
  {
    id: 29,
    nome: "Subsede de São Romão",
    bairro: "São Romão",
    endereco: "Presidente Tancredo Neves, 1210 — 39290-000, São Romão",
    maps: "https://www.google.com/maps/search/?api=1&query=Presidente+Tancredo+Neves+1210+Sao+Romao+MG",
    cidade: "São Romão - MG",
    cultos: "Dom 19h · Ter 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Pr. Augusto Júnior Jesus Amaral", telefone: "38 99825-1663" }
    ]
  },
  {
    id: 30,
    nome: "Congregação Icaraí de Minas",
    bairro: "Icaraí de Minas",
    endereco: "Maria Braga, 211 — Icaraí de Minas-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Maria+Braga+211+Icarai+de+Minas+MG",
    cidade: "Icaraí de Minas - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Pr. Augusto Júnior Jesus Amaral", telefone: "38 99825-1663" },
      { cargo: "1º Dirigente Local", nome: "Ev. Edney Antônio Marques de Souza", telefone: "38 99889-5888" }
    ]
  },
  // ── REGIONAL DE BURITIZEIRO ──
  {
    id: 31,
    nome: "Congregação Alto São Francisco",
    bairro: "Alto São Francisco",
    endereco: "Rua Ceará, nº 1470 — CEP 39282-116, Bairro Alto São Francisco, Buritizeiro-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Ceara+1470+Alto+Sao+Francisco+Buritizeiro+MG",
    cidade: "Buritizeiro - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Pr. Antônio Marcos de Almeida", telefone: "38 99916-5559" },
      { cargo: "1º Dirigente Local", nome: "Pb. Warley Almeida de Oliveira", telefone: "38 99993-0662" }
    ]
  },
  {
    id: 32,
    nome: "Congregação São Francisco",
    bairro: "São Francisco — Buritizeiro",
    endereco: "Av. Brasil, nº 241, Bairro São Francisco — Buritizeiro-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Av+Brasil+241+Sao+Francisco+Buritizeiro+MG",
    cidade: "Buritizeiro - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Pr. Antônio Marcos de Almeida", telefone: "38 99916-5559" },
      { cargo: "1º Dirigente Local", nome: "Pr. Cícero Pereira do Carmo", telefone: "38 99913-1072" }
    ]
  },
  {
    id: 33,
    nome: "Subsede Buritizeiro",
    bairro: "Vila Maria — Buritizeiro",
    endereco: "Rua Joaquim Trindade Cota, 513, Bairro Vila Maria — 39280-000, Buritizeiro",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Joaquim+Trindade+Cota+513+Vila+Maria+Buritizeiro+MG",
    cidade: "Buritizeiro - MG",
    cultos: "Dom 19h · Ter 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Pr. Antônio Marcos de Almeida", telefone: "38 99916-5559" },
      { cargo: "1º Dirigente Local", nome: "Ev. Altair Magalhães", telefone: "38 99812-7774" }
    ]
  },
  // ── 2º SETOR BURITIZEIRO ──
  {
    id: 34,
    nome: "Congregação Chupé / Xupé",
    bairro: "Xupé — Buritizeiro",
    endereco: "Comunidade do Xupé — Buritizeiro-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Comunidade+Xupe+Buritizeiro+MG",
    cidade: "Buritizeiro - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Pr. Antônio Marcos de Almeida", telefone: "38 99916-5559" },
      { cargo: "1º Dirigente Local", nome: "Pb. Isaías Lourenço de Resende", telefone: "31 99771-1850" },
      { cargo: "2º Dirigente Local", nome: "Pb. João Resende", telefone: "" }
    ]
  },
  {
    id: 35,
    nome: "Congregação Paredão de Minas",
    bairro: "Paredão de Minas",
    endereco: "Rua Geraldo Carneiro Mendonça, 101 — Paredão de Minas",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Geraldo+Carneiro+Mendonca+101+Paredao+de+Minas+MG",
    cidade: "Paredão de Minas - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Pr. Antônio Marcos de Almeida", telefone: "38 99916-5559" }
    ]
  },
  {
    id: 36,
    nome: "Congregação Santa Helena",
    bairro: "Santa Helena",
    endereco: "Comunidade Santa Helena, Área Central — Buritizeiro-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Comunidade+Santa+Helena+Buritizeiro+MG",
    cidade: "Buritizeiro - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Pr. Antônio Marcos de Almeida", telefone: "38 99916-5559" }
    ]
  },
  {
    id: 37,
    nome: "Congregação Fazenda Petkov",
    bairro: "Fazenda Petkov",
    endereco: "Fazenda Petkov — Buritizeiro-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Fazenda+Petkov+Buritizeiro+MG",
    cidade: "Buritizeiro - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Pr. Antônio Marcos de Almeida", telefone: "38 99916-5559" },
      { cargo: "1º Dirigente Local", nome: "Pb. Gerson Ferreira Oliveira", telefone: "39 99936-6812" }
    ]
  },
  {
    id: 38,
    nome: "Congregação Ribeirão do Areia",
    bairro: "Ribeirão do Areia",
    endereco: "Comunidade Ribeirão — Buritizeiro-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Comunidade+Ribeirao+do+Areia+Buritizeiro+MG",
    cidade: "Buritizeiro - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Pr. Antônio Marcos de Almeida", telefone: "38 99916-5559" }
    ]
  },
  // ── 3º SETOR BURITIZEIRO — Cachoeira do Manteiga ──
  {
    id: 39,
    nome: "Subsede Cachoeira do Manteiga",
    bairro: "Cachoeira do Manteiga",
    endereco: "Rua Pará, 85 — 39288-000, Cachoeira do Manteiga",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Para+85+Cachoeira+do+Manteiga+Buritizeiro+MG",
    cidade: "Buritizeiro - MG",
    cultos: "Dom 19h · Ter 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Pr. Antônio Marcos de Almeida", telefone: "38 99916-5559" },
      { cargo: "Dirigente de Sub-Setor", nome: "Pr. Renato Barbosa", telefone: "38 99953-5133" }
    ]
  },
  {
    id: 40,
    nome: "Congregação Cachoeira do Teobaldo",
    bairro: "Cachoeira do Teobaldo",
    endereco: "Comunidade São Bento / Cachoeira do Teobaldo — Buritizeiro, 39280-000",
    maps: "https://www.google.com/maps/search/?api=1&query=Cachoeira+do+Teobaldo+Buritizeiro+MG",
    cidade: "Buritizeiro - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Pr. Antônio Marcos de Almeida", telefone: "38 99916-5559" },
      { cargo: "Dirigente de Sub-Setor", nome: "Pr. Renato Barbosa", telefone: "38 99953-5133" },
      { cargo: "1º Dirigente Local", nome: "Coop. Maria Divina", telefone: "" }
    ]
  },
  {
    id: 41,
    nome: "Congregação São Bento",
    bairro: "São Bento",
    endereco: "Comunidade São Bento — Buritizeiro, 39280-000",
    maps: "https://www.google.com/maps/search/?api=1&query=Comunidade+Sao+Bento+Buritizeiro+MG",
    cidade: "Buritizeiro - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Pr. Antônio Marcos de Almeida", telefone: "38 99916-5559" },
      { cargo: "Dirigente de Sub-Setor", nome: "Pr. Renato Barbosa", telefone: "38 99953-5133" }
    ]
  },
  {
    id: 42,
    nome: "Congregação Assentamento 1º de Maio",
    bairro: "Assentamento 1º de Maio",
    endereco: "Assentamento 1º de Maio — Buritizeiro, 39280-000",
    maps: "https://www.google.com/maps/search/?api=1&query=Assentamento+1+de+Maio+Buritizeiro+MG",
    cidade: "Buritizeiro - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Pr. Antônio Marcos de Almeida", telefone: "38 99916-5559" },
      { cargo: "Dirigente de Sub-Setor", nome: "Pr. Renato Barbosa", telefone: "38 99953-5133" }
    ]
  },
  // ── NOVAS CONGREGAÇÕES ──
  {
    id: 43,
    nome: "Congregação Bairro Aparecida",
    bairro: "Aparecida",
    endereco: "Bairro Aparecida — Pirapora-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Bairro+Aparecida+Pirapora+MG",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Dirigente de Sub-Setor", nome: "Pr. Carlos Corrêa de Souza", telefone: "038 99817-9855" },
      { cargo: "1º Dirigente Local", nome: "Pb. Vitório Calans", telefone: "" },
      { cargo: "2º Dirigente Local", nome: "Pr. Serafim", telefone: "" }
    ]
  },
  {
    id: 44,
    nome: "Congregação Bairro Primavera",
    bairro: "Primavera",
    endereco: "Bairro Primavera — Pirapora-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Bairro+Primavera+Pirapora+MG",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Dirigente de Sub-Setor", nome: "Pr. Geremias Bispo Ramos", telefone: "38 99948-3323" },
      { cargo: "1º Dirigente Local", nome: "Dc. Luciano Camilo", telefone: "" }
    ]
  },
  { id: 45, nome: "Congregação Bandeirante — Guaicuí", bairro: "Bandeirante", endereco: "Comunidade Bandeirante — Guaicuí", maps: "https://www.google.com/maps/search/?api=1&query=Bandeirante+Guaicui+MG", cidade: "Guaicuí - MG", cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30", lideres: [{ cargo: "Pastor Regional", nome: "Pr. Oziel Ferreira da Conceição", telefone: "38 99882-2164" }] },
  { id: 46, nome: "Congregação Porteira — Guaicuí", bairro: "Porteira", endereco: "Comunidade Porteira — Guaicuí", maps: "https://www.google.com/maps/search/?api=1&query=Porteira+Guaicui+MG", cidade: "Guaicuí - MG", cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30", lideres: [{ cargo: "Pastor Regional", nome: "Pr. Oziel Ferreira da Conceição", telefone: "38 99882-2164" }] },
  { id: 47, nome: "Congregação Lagoa Grande — Guaicuí", bairro: "Lagoa Grande", endereco: "Comunidade Lagoa Grande — Guaicuí", maps: "https://www.google.com/maps/search/?api=1&query=Lagoa+Grande+Guaicui+MG", cidade: "Guaicuí - MG", cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30", lideres: [{ cargo: "Pastor Regional", nome: "Pr. Oziel Ferreira da Conceição", telefone: "38 99882-2164" }] },
  { id: 48, nome: "Congregação Rompe Dias — Guaicuí", bairro: "Assentamento Rompe Dias", endereco: "Assentamento Rompe Dias — Guaicuí", maps: "https://www.google.com/maps/search/?api=1&query=Rompe+Dias+Guaicui+MG", cidade: "Guaicuí - MG", cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30", lideres: [{ cargo: "Pastor Regional", nome: "Pr. Oziel Ferreira da Conceição", telefone: "38 99882-2164" }] },
  { id: 49, nome: "Congregação Mãe D'Água — Guaicuí", bairro: "Assentamento Mãe D'Água", endereco: "Assentamento Mãe D'Água — Guaicuí", maps: "https://www.google.com/maps/search/?api=1&query=Mae+Dagua+Guaicui+MG", cidade: "Guaicuí - MG", cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30", lideres: [{ cargo: "Pastor Regional", nome: "Pr. Oziel Ferreira da Conceição", telefone: "38 99882-2164" }] },
  { id: 50, nome: "Congregação Riachinho — Guaicuí", bairro: "Riachinho", endereco: "Comunidade Riachinho — Guaicuí", maps: "https://www.google.com/maps/search/?api=1&query=Riachinho+Guaicui+MG", cidade: "Guaicuí - MG", cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30", lideres: [{ cargo: "Pastor Regional", nome: "Pr. Oziel Ferreira da Conceição", telefone: "38 99882-2164" }] },
  { id: 51, nome: "Congregação Ilha do Boi — Guaicuí", bairro: "Ilha do Boi", endereco: "Ilha do Boi — Guaicuí", maps: "https://www.google.com/maps/search/?api=1&query=Ilha+do+Boi+Guaicui+MG", cidade: "Guaicuí - MG", cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30", lideres: [{ cargo: "Pastor Regional", nome: "Pr. Oziel Ferreira da Conceição", telefone: "38 99882-2164" }] },
  { id: 52, nome: "Congregação Tesoura — Lagoa dos Patos", bairro: "Tesoura", endereco: "Comunidade Tesoura — Lagoa dos Patos-MG", maps: "https://www.google.com/maps/search/?api=1&query=Tesoura+Lagoa+dos+Patos+MG", cidade: "Lagoa dos Patos - MG", cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30", lideres: [{ cargo: "Pastor Regional", nome: "Pr. Milton Atanázio de Oliveira", telefone: "38 99918-6975" }] },
  { id: 53, nome: "Congregação Sucuriú — Lagoa dos Patos", bairro: "Sucuriú", endereco: "Comunidade Sucuriú — Lagoa dos Patos-MG", maps: "https://www.google.com/maps/search/?api=1&query=Sucuriu+Lagoa+dos+Patos+MG", cidade: "Lagoa dos Patos - MG", cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30", lideres: [{ cargo: "Pastor Regional", nome: "Pr. Milton Atanázio de Oliveira", telefone: "38 99918-6975" }] },
  {
    id: 54,
    nome: "Congregação Bom Jardim — Ponto Chique",
    bairro: "Bom Jardim",
    endereco: "Comunidade Bom Jardim — Ponto Chique-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Bom+Jardim+Ponto+Chique+MG",
    cidade: "Ponto Chique - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Pr. João Batista dos Santos", telefone: "38 99845-0056" },
      { cargo: "Dirigente de Sub-Setor", nome: "Pr. Valdecir Soares da Silva", telefone: "38 99744-5455" }
    ]
  },
  { id: 55, nome: "Congregação Morrinho — Bentópolis", bairro: "Morrinho", endereco: "Comunidade Morrinho — Ubaí-MG", maps: "https://www.google.com/maps/search/?api=1&query=Morrinho+Ubai+MG", cidade: "Ubaí - MG", cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30", lideres: [{ cargo: "Pastor Regional", nome: "Ev. Ronaldo Moreira Costa", telefone: "38 99971-0987" }] },
  { id: 56, nome: "Congregação Gerais Velhos — Bentópolis", bairro: "Gerais Velhos", endereco: "Comunidade Gerais Velhos — Ubaí-MG", maps: "https://www.google.com/maps/search/?api=1&query=Gerais+Velhos+Ubai+MG", cidade: "Ubaí - MG", cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30", lideres: [{ cargo: "Pastor Regional", nome: "Ev. Ronaldo Moreira Costa", telefone: "38 99971-0987" }] },
  { id: 57, nome: "Congregação São José", bairro: "São José", endereco: "Comunidade São José — São Romão-MG", maps: "https://www.google.com/maps/search/?api=1&query=Sao+Jose+Sao+Romao+MG", cidade: "São Romão - MG", cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30", lideres: [{ cargo: "Pastor Regional", nome: "Pr. Augusto Júnior Jesus Amaral", telefone: "38 99825-1663" }] },
  { id: 58, nome: "Congregação Vila Santos Reis", bairro: "Vila Santos Reis", endereco: "Vila Santos Reis — São Romão-MG", maps: "https://www.google.com/maps/search/?api=1&query=Vila+Santos+Reis+Sao+Romao+MG", cidade: "São Romão - MG", cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30", lideres: [{ cargo: "Pastor Regional", nome: "Pr. Augusto Júnior Jesus Amaral", telefone: "38 99825-1663" }] },
  { id: 59, nome: "Congregação Nova Aparecida", bairro: "Nova Aparecida", endereco: "Comunidade Nova Aparecida — São Romão-MG", maps: "https://www.google.com/maps/search/?api=1&query=Nova+Aparecida+Sao+Romao+MG", cidade: "São Romão - MG", cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30", lideres: [{ cargo: "Pastor Regional", nome: "Pr. Augusto Júnior Jesus Amaral", telefone: "38 99825-1663" }] },
  { id: 60, nome: "Congregação Paraterra", bairro: "Paraterra", endereco: "Comunidade Paraterra — São Romão-MG", maps: "https://www.google.com/maps/search/?api=1&query=Paraterra+Sao+Romao+MG", cidade: "São Romão - MG", cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30", lideres: [{ cargo: "Pastor Regional", nome: "Pr. Augusto Júnior Jesus Amaral", telefone: "38 99825-1663" }] },
  { id: 61, nome: "Congregação Lagoa Cumprida", bairro: "Lagoa Cumprida", endereco: "Comunidade Lagoa Cumprida — São Romão-MG", maps: "https://www.google.com/maps/search/?api=1&query=Lagoa+Cumprida+Sao+Romao+MG", cidade: "São Romão - MG", cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30", lideres: [{ cargo: "Pastor Regional", nome: "Pr. Augusto Júnior Jesus Amaral", telefone: "38 99825-1663" }] },
  { id: 62, nome: "Congregação Riacho do Mato", bairro: "Riacho do Mato", endereco: "Comunidade Riacho do Mato — São Romão-MG", maps: "https://www.google.com/maps/search/?api=1&query=Riacho+do+Mato+Sao+Romao+MG", cidade: "São Romão - MG", cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30", lideres: [{ cargo: "Pastor Regional", nome: "Pr. Augusto Júnior Jesus Amaral", telefone: "38 99825-1663" }] },
  { id: 63, nome: "Congregação Ribanceira", bairro: "Ribanceira", endereco: "Comunidade Ribanceira — São Romão-MG", maps: "https://www.google.com/maps/search/?api=1&query=Ribanceira+Sao+Romao+MG", cidade: "São Romão - MG", cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30", lideres: [{ cargo: "Pastor Regional", nome: "Pr. Augusto Júnior Jesus Amaral", telefone: "38 99825-1663" }] },
  { id: 64, nome: "Congregação Lacha III — Buritizeiro", bairro: "Lacha III", endereco: "Comunidade Lacha III — Buritizeiro-MG", maps: "https://www.google.com/maps/search/?api=1&query=Lacha+III+Buritizeiro+MG", cidade: "Buritizeiro - MG", cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30", lideres: [{ cargo: "Pastor Regional", nome: "Pr. Antônio Marcos de Almeida", telefone: "38 99916-5559" }] },
  {
    id: 65,
    nome: "Congregação Jardim dos Buritiz",
    bairro: "Jardim dos Buritiz",
    endereco: "Jardim dos Buritiz — Buritizeiro-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Jardim+dos+Buritiz+Buritizeiro+MG",
    cidade: "Buritizeiro - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Pr. Antônio Marcos de Almeida", telefone: "38 99916-5559" },
      { cargo: "1º Dirigente Local", nome: "Pb. Wanderson", telefone: "" }
    ]
  },
  {
    id: 66,
    nome: "Congregação Vila Maria — Buritizeiro",
    bairro: "Vila Maria — Buritizeiro",
    endereco: "Bairro Vila Maria — Buritizeiro-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Vila+Maria+Buritizeiro+MG",
    cidade: "Buritizeiro - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Pr. Antônio Marcos de Almeida", telefone: "38 99916-5559" },
      { cargo: "1º Dirigente Local", nome: "Pb. Levi Gonçalves", telefone: "" },
      { cargo: "2º Dirigente Local", nome: "Coop. Gilson", telefone: "" }
    ]
  },
  {
    id: 67,
    nome: "Congregação Novo Buritizeiro",
    bairro: "Novo Buritizeiro",
    endereco: "Novo Buritizeiro — Buritizeiro-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Novo+Buritizeiro+MG",
    cidade: "Buritizeiro - MG",
    cultos: "Dom 19h · Qua 19h30  \\n EBD Dom 8h30",
    lideres: [
      { cargo: "Pastor Regional", nome: "Pr. Antônio Marcos de Almeida", telefone: "38 99916-5559" },
      { cargo: "1º Dirigente Local", nome: "Pr. Valentino Gomes de Alburquerque", telefone: "" },
      { cargo: "2º Dirigente Local", nome: "Pb. José de Aleluia", telefone: "" }
    ]
  }
];`;

const newContent = content.substring(0, start) + newArray + content.substring(end);
fs.writeFileSync(filePath, newContent, 'utf8');
console.log('✅ Array congregacoes atualizado com sucesso!');
console.log('Total de congregações: ' + (newArray.match(/id:/g) || []).length);
