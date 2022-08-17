const onePieceService = require('../services/onePiece.service');

const findAllPersonagensController = (req, res) => {
  const personagens = onePieceService.findAllPersonagensService();
  res.send(personagens);
};

const findByIdPersonagemController = (req, res) => {
  const parametroId = Number(req.params.id);
  const escolhaPersonagem =
    onePieceService.findByIdPersonagemService(parametroId);
  res.send(escolhaPersonagem);
};

const createPersonagemController = (req, res) => {
  const personagem = req.body;
  const newPersonagem = onePieceService.createPersonagemService(personagem);
  res.send(newPersonagem);
};

const updatePersonagemController = (req, res) => {
  const idParam = Number(req.params.id);
  const personagemEdit = req.body;
  const updatePersonagem = onePieceService.updatePersonagemService(
    idParam,
    personagemEdit,
  );
  res.send(updatePersonagem);
};

const deletePersonagemController = (req, res) => {
  const idParam = req.params.id;
  onePieceService.deletePersonagemService(idParam);
  res.send({ message: 'Personagem deletado com sucesso' });
};

module.exports = {
  findAllPersonagensController,
  findByIdPersonagemController,
  createPersonagemController,
  updatePersonagemController,
  deletePersonagemController,
};
