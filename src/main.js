const congregacoes = [
  {
    id: 1,
    nome: "Templo Sede — Pirapora",
    bairro: "Santo Antônio",
    endereco: "Rua Ouro Preto, 277, Bairro Santo Antônio — Pirapora",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Ouro+Preto+277+Santo+Antonio+Pirapora+MG",
    cidade: "Pirapora - MG",
    cultos: "Dom 18h30 · Ter 19h · Qui 19h",
    destaque: true,
    lideres: [
      { cargo: "Pastor", nome: "Carlos Corrêa de Souza", telefone: "038 99817-9855" }
    ]
  },
  {
    id: 2,
    nome: "Congregação Nova Pirapora",
    bairro: "Nova Pirapora",
    endereco: "R. João Dias da Costa, 98 — Nova Pirapora, Pirapora-MG, 39270-000",
    maps: "https://maps.app.goo.gl/z7sK4DzJn4PmJtcv9",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Dirigente", nome: "Geremias Bispo Ramos", telefone: "38 99948-3323 / 38 99938-3323" }
    ]
  },
  {
    id: 3,
    nome: "Congregação Cidade Jardim",
    bairro: "Cidade Jardim",
    endereco: "Joaquim Ferreira da Costa, 615 — 39272-278, Pirapora-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Joaquim+Ferreira+da+Costa+615+Cidade+Jardim+Pirapora+MG",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Ronivan Luiz Fonseca", telefone: "38 99969-0808" },
      { cargo: "1º Dirigente", nome: "Marcos Magalhães Leite", telefone: "38 99847-3308" },
      { cargo: "2º Dirigente", nome: "Gilberto Ferreira Fagundes", telefone: "38 99975-3768" }
    ]
  },
  {
    id: 4,
    nome: "Congregação Morada do Sol",
    bairro: "Morada do Sol",
    endereco: "Rua Rubi, 257 — 39276-314, Pirapora",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Rubi+257+Morada+do+Sol+Pirapora+MG",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Paulo Hernani de Andrade Júnior", telefone: "38 99234-2358" },
      { cargo: "1º Dirigente", nome: "Cleidson Roberto de Souza Silva", telefone: "38 99160-3466" }
    ]
  },
  {
    id: 5,
    nome: "Congregação São Geraldo",
    bairro: "São Geraldo",
    endereco: "Rua José Pedro da Silva, 437 — Pirapora-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Jose+Pedro+da+Silva+437+Sao+Geraldo+Pirapora+MG",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Dirigente", nome: "Narciso Pereira Batista", telefone: "38 99919-7450" },
      { cargo: "2º Dirigente", nome: "Francisco Sidinei de Souza", telefone: "38 99880-9061" }
    ]
  },
  {
    id: 6,
    nome: "Congregação Santos Dumont",
    bairro: "Santos Dumont",
    endereco: "Rua Raimundo Nascimento, 80 — CEP 39276-034, Pirapora-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Raimundo+Nascimento+80+Santos+Dumont+Pirapora+MG",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Pr. Ronivan Luiz Fonseca de Oliveira", telefone: "38 99969-0808" },
      { cargo: "1º Dirigente", nome: "Pb. José Rocha de Araújo", telefone: "38 99889-0055" },
      { cargo: "2º Dirigente", nome: "Ev. André Baptista", telefone: "38 98845-0129" }
    ]
  },
  {
    id: 7,
    nome: "Congregação Sagrada Família",
    bairro: "Sagrada Família",
    endereco: "Rua das Acácias, nº 412 — Pirapora-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+das+Acacias+412+Sagrada+Familia+Pirapora+MG",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Wenyson Alves Santos", telefone: "38 99972-5481" },
      { cargo: "1º Dirigente", nome: "Marcos Antônio Almeida", telefone: "38 98826-5845" }
    ]
  },
  {
    id: 8,
    nome: "Congregação São João",
    bairro: "São João",
    endereco: "Rua Tiago Quirino de Araújo, 189 — Pirapora-MG, 39270-000",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Tiago+Quirino+de+Araujo+189+Sao+Joao+Pirapora+MG",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Anderson Pereira da Silva", telefone: "38 98806-6601" },
      { cargo: "1º Dirigente", nome: "Ernandes Batista", telefone: "38 9847-5305" }
    ]
  },
  {
    id: 9,
    nome: "Congregação Bom Jesus",
    bairro: "Bom Jesus",
    endereco: "Rua Luiz Cardoso Café, 264 — Pirapora-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Luiz+Cardoso+Cafe+264+Bom+Jesus+Pirapora+MG",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Sebastião Moreira de Sena", telefone: "38 99154-3579" },
      { cargo: "1º Dirigente", nome: "Osmar Nunes de Azevedo", telefone: "31 97189-1356" }
    ]
  },
  {
    id: 10,
    nome: "Congregação Cícero Passos",
    bairro: "Cícero Passos",
    endereco: "Rua Professora Criselina Passos, 85 — Pirapora-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Professora+Criselina+Passos+85+Cicero+Passos+Pirapora+MG",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "André Marques Vieira", telefone: "38 99823-8119" },
      { cargo: "1º Dirigente", nome: "Ezequiel Barbosa de Souza", telefone: "38 99836-6290" }
    ]
  },
  {
    id: 11,
    nome: "Congregação João Guimarães",
    bairro: "João Guimarães",
    endereco: "Rua 2, nº 93 — 39276-086, Pirapora-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+2+93+Joao+Guimaraes+Pirapora+MG",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Dirigente", nome: "Gilson dos Santos Santana", telefone: "38 99844-5306" },
      { cargo: "2º Dirigente", nome: "Jacó Ribeiro da Silva", telefone: "38 99902-0841" }
    ]
  },
  {
    id: 12,
    nome: "Congregação Industrial",
    bairro: "Industrial",
    endereco: "Rua Emídio Magalhães Freire, 553, Industrial — Pirapora-MG, 39272-002",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Emidio+Magalhaes+Freire+553+Industrial+Pirapora+MG",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Dirigente", nome: "Ademilson Cardoso da Silva", telefone: "38 98809-0621" },
      { cargo: "2º Dirigente", nome: "Eric Tulio Barbosa Silva", telefone: "38 99734-4133" }
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
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Oziel Ferreira da Conceição", telefone: "38 99882-2164" },
      { cargo: "1º Dirigente", nome: "Manoel Messias", telefone: "38 99854-6013" },
      { cargo: "2º Dirigente", nome: "Adão Pedro Ruas", telefone: "38 99842-5259" }
    ]
  },
  {
    id: 14,
    nome: "Congregação Paco-Paco",
    bairro: "Paco-Paco",
    endereco: "Assentamento Paco-Paco, BR-365",
    maps: "https://www.google.com/maps/search/?api=1&query=Assentamento+Paco+Paco+BR-365+Pirapora+MG",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Pastor Oziel Ferreira", telefone: "38 99882-2164" },
      { cargo: "1º Dirigente", nome: "Presbítero Diogo dos Santos Botelho", telefone: "38 99940-3683" }
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
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Milton Atanazio de Oliveira", telefone: "38 99918-6975" },
      { cargo: "1º Dirigente", nome: "José Alves de Castro", telefone: "38 9830-7561" },
      { cargo: "2º Dirigente", nome: "Edberclis Maia Nobre", telefone: "38 9967-0572" }
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
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "João Batista dos Santos", telefone: "38 99845-0056" },
      { cargo: "1º Dirigente", nome: "Ivaí Gabriel Pereira", telefone: "38 99735-7146" },
      { cargo: "2º Dirigente", nome: "Rosenilson Pereira Ramos", telefone: "38 99942-9579" }
    ]
  },
  {
    id: 17,
    nome: "Congregação Ponto Chique",
    bairro: "Centro — Ponto Chique",
    endereco: "Avenida São Francisco, 308, Centro — 39328-000, Ponto Chique-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Avenida+Sao+Francisco+308+Centro+Ponto+Chique+MG",
    cidade: "Ponto Chique - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Valdir Soares da Silva", telefone: "38 99744-5455" },
      { cargo: "1º Dirigente", nome: "Presbítero Edmilson Ramos Messias", telefone: "31 97572-2571" }
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
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Dirigente", nome: "Ronaldo Moreira Costa", telefone: "38 99971-0987" }
    ]
  },
  {
    id: 19,
    nome: "Congregação Veloslândia",
    bairro: "Veloslândia",
    endereco: "Rua José Caetano Samer Filho — CEP 39320-000, Veloslândia",
    maps: "https://www.google.com/maps/search/?api=1&query=Veloslandia+Ubai+MG",
    cidade: "Ubaí - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Ronaldo Moreira Costa", telefone: "38 9971-0987" },
      { cargo: "1º Dirigente", nome: "Gedeon Roberto de Souza Papa", telefone: "31 99524-2165" },
      { cargo: "2º Dirigente", nome: "Manoel Ferreira da Costa", telefone: "38 9903-4339" }
    ]
  },
  {
    id: 20,
    nome: "Congregação Malhada Bonita",
    bairro: "Malhada Bonita",
    endereco: "Rua da Igreja CCB — CEP 39320-000, Malhada Bonita, Ubaí-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Malhada+Bonita+Ubai+MG",
    cidade: "Ubaí - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Pr. Ronaldo Moreira", telefone: "38 99971-0987" },
      { cargo: "1º Dirigente", nome: "Evangelista Ferreira dos Santos", telefone: "38 99747-8306" }
    ]
  },
  {
    id: 21,
    nome: "Congregação Curralinho",
    bairro: "Curralinho",
    endereco: "Cultos nas casas dos irmãos — Curralinho",
    maps: "https://www.google.com/maps/search/?api=1&query=Curralinho+Ubai+MG",
    cidade: "Ubaí - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Dirigente", nome: "Ronaldo Moreira Costa", telefone: "38 99971-0987" }
    ]
  },
  {
    id: 22,
    nome: "Congregação Areão",
    bairro: "Areão",
    endereco: "Cultos nas casas dos irmãos — Areão",
    maps: "https://www.google.com/maps/search/?api=1&query=Areao+Ubai+MG",
    cidade: "Ubaí - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Dirigente", nome: "Ronaldo Moreira Costa", telefone: "38 99971-0987" }
    ]
  },
  {
    id: 23,
    nome: "Congregação Agrovila",
    bairro: "Agrovila",
    endereco: "Assentamento Agrovila",
    maps: "https://www.google.com/maps/search/?api=1&query=Assentamento+Agrovila+Ubai+MG",
    cidade: "Ubaí - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Ronaldo Moreira Costa", telefone: "38 99971-0987" },
      { cargo: "1º Dirigente", nome: "Carlos Rodrigues Mourão", telefone: "38 99845-2415" }
    ]
  },
  {
    id: 24,
    nome: "Congregação Ponta da Ilha",
    bairro: "Ponta da Ilha",
    endereco: "Ponta da Ilha",
    maps: "https://www.google.com/maps/search/?api=1&query=Ponta+da+Ilha+Ubai+MG",
    cidade: "Ubaí - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Ronaldo Moreira Costa", telefone: "38 99971-0987" },
      { cargo: "1º Dirigente", nome: "Joanir Ferreira de Souza", telefone: "38 99923-1141" }
    ]
  },
  {
    id: 25,
    nome: "Congregação Pilões",
    bairro: "Pilões",
    endereco: "Fazenda Pilões",
    maps: "https://www.google.com/maps/search/?api=1&query=Fazenda+Piloes+Ubai+MG",
    cidade: "Ubaí - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Ronaldo Moreira Costa", telefone: "38 99971-0987" },
      { cargo: "1º Dirigente", nome: "Gilmar Rodrigues de Souza", telefone: "38 99918-0834" }
    ]
  },
  // ── REGIÃO DA SUBSEDE SÃO ROMÃO — 5º Setor ──
  {
    id: 26,
    nome: "Congregação Ubaí",
    bairro: "Ubaí",
    endereco: "Av. Tancredo Neves, nº 32 — Ubaí-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Av+Tancredo+Neves+32+Ubai+MG",
    cidade: "Ubaí - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Augusto Junior Amaral", telefone: "38 99825-1663" },
      { cargo: "1º Dirigente", nome: "Everton Ritielle de Oliveira Queiroz", telefone: "38 99810-5155" },
      { cargo: "2º Dirigente", nome: "Cláudio Araújo", telefone: "38 99976-8728" }
    ]
  },
  {
    id: 27,
    nome: "Congregação Coqueiro",
    bairro: "Coqueiro",
    endereco: "Comunidade Coqueiro",
    maps: "https://www.google.com/maps/search/?api=1&query=Comunidade+Coqueiro+Sao+Romao+MG",
    cidade: "São Romão - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Augusto Junior Amaral", telefone: "38 99825-1663" },
      { cargo: "1º Dirigente", nome: "Samuel Neves", telefone: "11 94299-7831" },
      { cargo: "2º Dirigente", nome: "Dionísio Pereira", telefone: "38 99730-2110" }
    ]
  },
  {
    id: 28,
    nome: "Congregação Capão da Onça",
    bairro: "Capão da Onça",
    endereco: "Comunidade Capão da Onça",
    maps: "https://www.google.com/maps/search/?api=1&query=Capao+da+Onca+Sao+Romao+MG",
    cidade: "São Romão - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Augusto Junior Amaral", telefone: "38 99825-1663" },
      { cargo: "1º Dirigente", nome: "Josias Pereira", telefone: "38 99739-3283" }
    ]
  },
  {
    id: 29,
    nome: "Subsede de São Romão",
    bairro: "São Romão",
    endereco: "Presidente Tancredo Neves, 1210 — 39290-000, São Romão",
    maps: "https://www.google.com/maps/search/?api=1&query=Presidente+Tancredo+Neves+1210+Sao+Romao+MG",
    cidade: "São Romão - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Augusto Junio Jesus Amaral", telefone: "38 99825-1663" },
      { cargo: "1º Dirigente", nome: "Renato Gonçalves de Mendonça", telefone: "38 99868-8995" },
      { cargo: "2º Dirigente", nome: "Antônio Geraldo Cesario dos Santos", telefone: "38 99890-4146" }
    ]
  },
  {
    id: 30,
    nome: "Congregação Icaraí de Minas",
    bairro: "Icaraí de Minas",
    endereco: "Maria Braga, 211 — Icaraí de Minas-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Maria+Braga+211+Icarai+de+Minas+MG",
    cidade: "Icaraí de Minas - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Augusto Junior Amaral", telefone: "38 99825-1663" },
      { cargo: "1º Dirigente", nome: "Edinei Antonio Marques de Souza", telefone: "38 99889-5888" }
    ]
  },
  // ── REGIONAL DE BURITIZEIRO — Cidade ──
  {
    id: 31,
    nome: "Congregação Alto São Francisco",
    bairro: "Alto São Francisco",
    endereco: "Rua Ceará, nº 1470 — CEP 39282-116, Bairro Alto São Francisco, Buritizeiro-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Ceara+1470+Alto+Sao+Francisco+Buritizeiro+MG",
    cidade: "Buritizeiro - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Antônio Marcos de Almeida", telefone: "38 99916-5559" },
      { cargo: "1º Dirigente", nome: "Warley Almeida de Oliveira", telefone: "38 99993-0662" }
    ]
  },
  {
    id: 32,
    nome: "Congregação São Francisco",
    bairro: "São Francisco — Buritizeiro",
    endereco: "Av. Brasil, nº 241, Bairro São Francisco — Buritizeiro-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Av+Brasil+241+Sao+Francisco+Buritizeiro+MG",
    cidade: "Buritizeiro - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Antônio Marcos Almeida", telefone: "38 99916-5559" },
      { cargo: "1º Dirigente", nome: "Cícero Pereira do Carmo", telefone: "38 99913-1072" },
      { cargo: "2º Dirigente", nome: "Robson Pereira", telefone: "38 99840-8338" }
    ]
  },
  {
    id: 33,
    nome: "Subsede Buritizeiro",
    bairro: "Vila Maria — Buritizeiro",
    endereco: "Rua Joaquim Trindade Cota, 513, Bairro Vila Maria — 39280-000, Buritizeiro",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Joaquim+Trindade+Cota+513+Vila+Maria+Buritizeiro+MG",
    cidade: "Buritizeiro - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Antônio Marcos de Almeida", telefone: "38 99916-5559" },
      { cargo: "1º Dirigente", nome: "Altair Magalhães", telefone: "38 99812-7774" }
    ]
  },
  // ── 2º SETOR BURITIZEIRO — Chupé ──
  {
    id: 34,
    nome: "Congregação Chupé / Xupé",
    bairro: "Xupé — Buritizeiro",
    endereco: "Comunidade do Xupé — Buritizeiro-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Comunidade+Xupe+Buritizeiro+MG",
    cidade: "Buritizeiro - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Pastor Antônio Marcos de Almeida", telefone: "38 99916-5559" },
      { cargo: "1º Dirigente", nome: "Isaías Lourenço de Resende", telefone: "31 99771-1850" },
      { cargo: "2º Dirigente", nome: "João Lourenço de Resende", telefone: "38 99891-2322" }
    ]
  },
  {
    id: 35,
    nome: "Congregação Paredão de Minas",
    bairro: "Paredão de Minas",
    endereco: "Rua Geraldo Carneiro Mendonça, 101 — Paredão de Minas",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Geraldo+Carneiro+Mendonca+101+Paredao+de+Minas+MG",
    cidade: "Paredão de Minas - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Antônio Marcos de Almeida", telefone: "38 99916-5559" },
      { cargo: "1º Dirigente", nome: "Gileno da Silva Lemos", telefone: "34 99820-9044" }
    ]
  },
  {
    id: 36,
    nome: "Congregação Santa Helena",
    bairro: "Santa Helena",
    endereco: "Comunidade Santa Helena, Área Central — Buritizeiro-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Comunidade+Santa+Helena+Buritizeiro+MG",
    cidade: "Buritizeiro - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Antônio Marcos de Almeida", telefone: "38 99916-5559" },
      { cargo: "1º Dirigente", nome: "João Henrique", telefone: "38 99740-8018" }
    ]
  },
  {
    id: 37,
    nome: "Congregação Fazenda Petkov",
    bairro: "Fazenda Petkov",
    endereco: "Fazenda Petkov — Buritizeiro-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Fazenda+Petkov+Buritizeiro+MG",
    cidade: "Buritizeiro - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Antônio Marcos de Almeida", telefone: "38 99916-5559" },
      { cargo: "1º Dirigente", nome: "Pb. Gerson Ferreira Oliveira", telefone: "39 99936-6812" }
    ]
  },
  {
    id: 38,
    nome: "Congregação Ribeirão do Areia",
    bairro: "Ribeirão do Areia",
    endereco: "Comunidade Ribeirão — Buritizeiro-MG",
    maps: "https://www.google.com/maps/search/?api=1&query=Comunidade+Ribeirao+do+Areia+Buritizeiro+MG",
    cidade: "Buritizeiro - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Antônio Marcos de Almeida", telefone: "38 99916-5559" },
      { cargo: "1º Dirigente", nome: "Sidinei da Silva", telefone: "38 99728-4492" }
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
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Renato Barbosa", telefone: "38 99953-5133" },
      { cargo: "1º Dirigente", nome: "Leonardo Cézar dos Santos Monteiro", telefone: "34 99828-9021" }
    ]
  },
  {
    id: 40,
    nome: "Congregação Cachoeira do Teobaldo",
    bairro: "Cachoeira do Teobaldo",
    endereco: "Comunidade São Bento / Cachoeira do Teobaldo — Buritizeiro, 39280-000",
    maps: "https://www.google.com/maps/search/?api=1&query=Cachoeira+do+Teobaldo+Buritizeiro+MG",
    cidade: "Buritizeiro - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Renato Barbosa", telefone: "38 99953-5133" },
      { cargo: "1º Dirigente", nome: "Pb. Gilberto Afonso Ferreira", telefone: "34 97283-528" }
    ]
  },
  {
    id: 41,
    nome: "Congregação São Bento",
    bairro: "São Bento",
    endereco: "Comunidade São Bento — Buritizeiro, 39280-000",
    maps: "https://www.google.com/maps/search/?api=1&query=Comunidade+Sao+Bento+Buritizeiro+MG",
    cidade: "Buritizeiro - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Setorial", nome: "Renato Barbosa", telefone: "38 99953-5133" },
      { cargo: "1º Dirigente", nome: "Manoel Raimundo Melo dos Santos", telefone: "38 99892-5186" }
    ]
  },
  {
    id: 42,
    nome: "Congregação Assentamento 1º de Maio",
    bairro: "Assentamento 1º de Maio",
    endereco: "Assentamento 1º de Maio — Buritizeiro, 39280-000",
    maps: "https://www.google.com/maps/search/?api=1&query=Assentamento+1+de+Maio+Buritizeiro+MG",
    cidade: "Buritizeiro - MG",
    cultos: "Dom 19h · Qua 19h30",
    lideres: [
      { cargo: "Pastor/Dirigente", nome: "Renato Barbosa", telefone: "38 99953-5133" }
    ]
  }
];

window.congregacoes = congregacoes;

// Renderizar cards de congregações (página inicial — exibe apenas 3 no mobile)
function renderCongs() {
  const grid = document.getElementById('congGrid');
  if (!grid) return;
  
  grid.innerHTML = congregacoes.filter(c => c.destaque || congregacoes.indexOf(c) < 5).slice(0, 5).map(c => `
    <div class="cong-card reveal">
      <div class="cong-icon-wrap">
        <svg class="cong-flame-icon" viewBox="0 0 48 46"><path d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z"/></svg>
      </div>
      <h3>${c.nome}</h3>
      <p>${c.endereco}</p>
      ${c.cultos ? `<div class="cong-hours">${c.cultos}</div>` : ''}
      <div class="cong-btns">
        <a href="${c.maps}" target="_blank" class="btn-loc">
          Localização
          <i data-lucide="map-pin"></i>
        </a>
        <button class="btn-saiba-mais" onclick="openModal(${c.id})">
          Saiba Mais
          <i data-lucide="info"></i>
        </button>
      </div>
    </div>
  `).join('');

  observeReveal();
  lucide.createIcons();
}

// Modal Saiba Mais
window.openModal = function(id) {
  const c = congregacoes.find(item => item.id === id);
  if (!c) return;

  // Remover modal existente se houver
  const existing = document.getElementById('modalSaibaMais');
  if (existing) existing.remove();

  const lideresHTML = c.lideres.map(l => `
    <div class="modal-lider">
      <div class="modal-lider-info">
        <span class="modal-lider-cargo">${l.cargo}</span>
        <strong class="modal-lider-nome">${l.nome}</strong>
      </div>
      <a href="tel:${l.telefone.split('/')[0].trim().replace(/\s/g, '')}" class="modal-lider-tel">
        <i data-lucide="phone"></i>
        ${l.telefone}
      </a>
    </div>
  `).join('');

  const modal = document.createElement('div');
  modal.id = 'modalSaibaMais';
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close" onclick="closeModal()">
        <i data-lucide="x"></i>
      </button>
      <div class="modal-header">
        <div class="modal-icon-wrap">
          <svg class="cong-flame-icon" viewBox="0 0 48 46"><path d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z"/></svg>
        </div>
        <h2>${c.nome}</h2>
        <p class="modal-endereco"><i data-lucide="map-pin"></i> ${c.endereco}</p>
      </div>
      <div class="modal-body">
        <h4><i data-lucide="users"></i> Liderança</h4>
        <div class="modal-lideres-list">
          ${lideresHTML}
        </div>
      </div>
      <div class="modal-footer">
        <a href="${c.maps}" target="_blank" class="btn-loc-modal">
          <i data-lucide="navigation"></i>
          Abrir no Google Maps
        </a>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  // Bloquear scroll
  document.body.style.overflow = 'hidden';
  
  // Animação de entrada
  requestAnimationFrame(() => {
    modal.classList.add('active');
  });

  lucide.createIcons();

  // Fechar ao clicar fora
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
};

window.closeModal = function() {
  const modal = document.getElementById('modalSaibaMais');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => modal.remove(), 300);
  }
};

// Fechar com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});



// Reveal on scroll logic
function observeReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  
  els.forEach(el => obs.observe(el));
}

// Mobile menu logic
window.toggleMenu = function() {
  const nav = document.querySelector('.nav-links');
  if (nav) {
    nav.classList.toggle('active');
  }
};

// Form submission simulation
window.submitOracao = function(e) {
  e.preventDefault();
  const form = document.getElementById('oracaoForm');
  const success = document.getElementById('formSuccess');
  if (form && success) {
    form.style.display = 'none';
    success.style.display = 'block';
  }
};

// Pix copy logic
window.copyPix = function() {
  const key = document.getElementById('pixKey').textContent;
  navigator.clipboard.writeText(key).then(() => {
    const btn = document.getElementById('pixBtn');
    if (btn) {
      const originalHTML = btn.innerHTML;
      btn.innerHTML = 'Copiado!';
      setTimeout(() => {
        btn.innerHTML = originalHTML;
      }, 2500);
    }
  });
};

// ── RADIO PLAYER (Profissional) ──
let radioIsPlaying = false;
let radioRetryCount = 0;
const RADIO_MAX_RETRIES = 3;
let miniPlayerDismissed = false;

window.toggleRadio = function() {
  const audio = document.getElementById('radioAudio');
  if (!audio) return;

  if (audio.paused || audio.ended) {
    startRadio(audio);
  } else {
    stopRadio(audio);
  }
};

function startRadio(audio) {
  const btn = document.getElementById('radioPlayBtn');
  const icon = document.getElementById('radioIcon');
  const label = document.getElementById('statusLabel');
  const eq = document.getElementById('radioEq');
  const playerGlass = document.querySelector('.player-glass');

  // Estado: Carregando
  btn.classList.add('loading');
  label.textContent = 'Conectando...';
  icon.setAttribute('data-lucide', 'loader');
  if (window.lucide) window.lucide.createIcons();

  // Forçar reload do stream
  audio.load();

  const playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise.then(() => {
      // Sucesso! Estado: Tocando
      radioIsPlaying = true;
      radioRetryCount = 0;
      btn.classList.remove('loading');
      btn.classList.add('is-playing');
      eq.classList.add('active');
      if(playerGlass) playerGlass.classList.add('is-playing');

      icon.setAttribute('data-lucide', 'pause');
      label.textContent = 'Ao Vivo';
      label.style.color = 'var(--accent)';

      // Atualizar mini player
      updateMiniPlayer('playing');
      checkMiniPlayerVisibility();

      if (window.lucide) window.lucide.createIcons();
    }).catch(error => {
      console.error("Erro ao tocar rádio:", error);
      btn.classList.remove('loading');
      
      // Tentar reconectar
      if (radioRetryCount < RADIO_MAX_RETRIES) {
        radioRetryCount++;
        label.textContent = `Tentativa ${radioRetryCount}/${RADIO_MAX_RETRIES}...`;
        setTimeout(() => startRadio(audio), 2000);
      } else {
        // Falha total
        label.textContent = 'Erro na conexão';
        label.style.color = '#ef4444';
        icon.setAttribute('data-lucide', 'play');
        radioRetryCount = 0;
        if (window.lucide) window.lucide.createIcons();
      }
    });
  }
}

function stopRadio(audio) {
  const btn = document.getElementById('radioPlayBtn');
  const icon = document.getElementById('radioIcon');
  const label = document.getElementById('statusLabel');
  const eq = document.getElementById('radioEq');
  const playerGlass = document.querySelector('.player-glass');

  audio.pause();
  // Remover src e recarregar para liberar o buffer de streaming
  audio.removeAttribute('src');
  audio.load();
  audio.innerHTML = `<source src="https://stm2.brasilcast.com:6698/;" type="audio/mpeg">`;

  radioIsPlaying = false;
  btn.classList.remove('loading', 'is-playing');
  eq.classList.remove('active');
  if(playerGlass) playerGlass.classList.remove('is-playing');

  icon.setAttribute('data-lucide', 'play');
  label.textContent = 'Pronto para ouvir';
  label.style.color = '';

  // Esconder mini player
  updateMiniPlayer('stopped');

  if (window.lucide) window.lucide.createIcons();
}

function updateMiniPlayer(state) {
  const mini = document.getElementById('radioMiniPlayer');
  const miniIcon = document.getElementById('miniIcon');
  const miniStatus = document.getElementById('miniStatus');
  if (!mini) return;

  if (state === 'playing') {
    miniIcon.setAttribute('data-lucide', 'pause');
    miniStatus.textContent = 'Ao Vivo';
    miniPlayerDismissed = false;
  } else {
    miniIcon.setAttribute('data-lucide', 'play');
    miniStatus.textContent = 'Parado';
    mini.classList.remove('active');
  }
  if (window.lucide) window.lucide.createIcons();
}

function checkMiniPlayerVisibility() {
  const radioSection = document.getElementById('radio');
  const mini = document.getElementById('radioMiniPlayer');
  if (!radioSection || !mini || !radioIsPlaying || miniPlayerDismissed) return;

  const rect = radioSection.getBoundingClientRect();
  const isOutOfView = rect.bottom < 0 || rect.top > window.innerHeight;

  if (isOutOfView) {
    mini.classList.add('active');
  } else {
    mini.classList.remove('active');
  }
}

window.closeMiniPlayer = function() {
  const mini = document.getElementById('radioMiniPlayer');
  if (mini) {
    mini.classList.remove('active');
    miniPlayerDismissed = true;
  }
};

// Scroll listener para mini player
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (header) {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }
  checkMiniPlayerVisibility();
});

// Volume control
document.addEventListener('DOMContentLoaded', () => {
  const volumeSlider = document.getElementById('radioVolume');
  const audio = document.getElementById('radioAudio');
  
  if (volumeSlider && audio) {
    audio.volume = volumeSlider.value / 100;
    volumeSlider.addEventListener('input', (e) => {
      audio.volume = e.target.value / 100;
    });
  }

  // Audio event listeners para estados
  if (audio) {
    audio.addEventListener('waiting', () => {
      if (radioIsPlaying) {
        const label = document.getElementById('statusLabel');
        const dot = document.querySelector('.status-dot');
        if (label) { label.textContent = 'Carregando...'; label.style.color = 'var(--accent)'; }
        if (dot) dot.className = 'status-dot loading';
      }
    });

    audio.addEventListener('playing', () => {
      const label = document.getElementById('statusLabel');
      const dot = document.querySelector('.status-dot');
      if (label) { label.textContent = 'Ao Vivo'; label.style.color = '#22c55e'; }
      if (dot) dot.className = 'status-dot playing';
    });

    audio.addEventListener('error', () => {
      if (radioIsPlaying && radioRetryCount < RADIO_MAX_RETRIES) {
        radioRetryCount++;
        const label = document.getElementById('statusLabel');
        if (label) { label.textContent = 'Reconectando...'; label.style.color = 'var(--accent)'; }
        setTimeout(() => {
          audio.load();
          audio.play().catch(() => {});
        }, 3000);
      }
    });

    audio.addEventListener('stalled', () => {
      if (radioIsPlaying) {
        const label = document.getElementById('statusLabel');
        if (label) { label.textContent = 'Buffering...'; label.style.color = 'var(--accent)'; }
      }
    });
  }

  renderCongs();
  observeReveal();
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
