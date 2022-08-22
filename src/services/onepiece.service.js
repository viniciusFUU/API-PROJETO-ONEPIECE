const OnePiece = require('../models/OnePiece');

const findAllPersonagensService = async () => {
  const personagens = await OnePiece.find();
  return personagens;
};

const findByIdPersonagemService = async (ParametroId) => {
  const personagens = await OnePiece.findById(ParametroId);
  return personagens;
};

const createPersonagemService = async (newPersonagem) => {
  const personagemCreated = await OnePiece.create(newPersonagem);
  return personagemCreated;
};

const updatePersonagemService = async (id, personagemEdited) => {
  const personagemUpdate = await OnePiece.findByIdAndUpdate(
    id,
    personagemEdited,
  );
  return personagemUpdate;
};

const deletePersonagemService = async (id) => {
  return await OnePiece.findByIdAndDelete(id);
};

module.exports = {
  findAllPersonagensService,
  findByIdPersonagemService,
  createPersonagemService,
  updatePersonagemService,
  deletePersonagemService,
};
