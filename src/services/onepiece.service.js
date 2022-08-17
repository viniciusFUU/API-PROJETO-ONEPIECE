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

const findAllPersonagensService = () => {
  return onePiece;
};

const findByIdPersonagemService = (ParametroId) => {
  return onePiece.find((personagem) => personagem.id === ParametroId);
};

const createPersonagemService = (newPersonagem) => {
  const newId = onePiece.length + 1;
  newPersonagem.id = newId;
  onePiece.push(newPersonagem);
  return newPersonagem;
};

const updatePersonagemService = (id, personagemEdited) => {
  personagemEdited['id'] = id;
  const personagemIndex = onePiece.findIndex(
    (personagem) => personagem.id == id,
  );
  onePiece[personagemIndex] = personagemEdited;
  return personagemEdited;
};

const deletePersonagemService = (id) => {
  const personagemIndex = onePiece.findIndex(
    (personagem) => personagem.id == id,
  );
  return onePiece.splice(personagemIndex, 1);
};

module.exports = {
  findAllPersonagensService,
  findByIdPersonagemService,
  createPersonagemService,
  updatePersonagemService,
  deletePersonagemService,
};
