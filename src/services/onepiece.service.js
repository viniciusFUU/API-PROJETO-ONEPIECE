const onePiece = [
  {
    id: 1,
    nome: 'Monkey D. Luffy',
    descricao: 'O famoso pirata que estica do chapéu de palha :D',
    foto: 'https://w7.pngwing.com/pngs/113/90/png-transparent-one-piece-monkey-d-luffy-illustration-monkey-d-luffy-brook-vinsmoke-sanji-goku-chibi-one-piece-food-hand-cartoon.png',
    recompensa: '3 bilhões de berys',
  },
  {
    id: 2,
    nome: 'Roronoa Zoro',
    descricao:
      'O espadachim e "caçador de piratas", mesmo sendo um pirata kkkk.',
    foto: 'https://www.pngfind.com/pngs/m/245-2452080_one-piece-zoro-png-roronoa-zoro-wallpaper-iphone.png',
    recompensa: '320 milhões de berys',
  },
  {
    id: 3,
    nome: 'Vinsmoke Sanji',
    descricao: 'O cozinheiro do bando e famoso pelas suas "Pernas negras".',
    foto: 'https://w7.pngwing.com/pngs/788/763/png-transparent-vinsmoke-sanji-graphic-vinsmoke-sanji-monkey-d-luffy-one-piece-pirate-warriors-nami-roronoa-zoro-one-piece-cartoon-fictional-character-shoe-thumbnail.png',
    recompensa: '330 milhões de berys',
  },
];

const findPersonagemService = () => {
  return onePiece;
};

const findPersonagemByIdService = (id) => {
  return onePiece.find((personagem) => personagem.id == id);
};

const createPersonagemService = (id) => {
    const newId = onepiece.length + 1;
  newPersonagem.id = newId;
  onepiece.push(newPersonagem);
  return newPersonagem;
};

const updatePersonagemService = (id) => {
  personagemEdited['id'] = id;
  const personagemIndex = onepiece.findIndex((onepiece) => onepiece.id == id);
  onepiece[personagemIndex] = personagemEdited;
  return personagemEdited;
};

const deletePersonagemService = (id) => {
    personagemEdited['id'] = id;
  const personagemIndex = onepiece.findIndex((onepiece) => onepiece.id == id);
  paletas[personagemIndex] = personagemEdited;
  return personagemEdited;
};

module.exports = {
  findPersonagemService,
  findPersonagemByIdService,
  createPersonagemService,
  updatePersonagemService,
  deletePersonagemService,
};
