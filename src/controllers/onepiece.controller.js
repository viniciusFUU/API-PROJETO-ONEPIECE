const onepieceService = require('../services/onepiece.service');

const findPersonagemController = (req, res) => {
  const allPersonagens = onepieceService.findPersonagemService();
  res.send(allPersonagens);
};

const findPersonagemByIdController = (req, res) => {
  const idParam = req.params.idParam;
  const chosenPersonagem = onepieceService.findPersonagemByIdService(idParam);
  res.send(chosenPersonagem);
};

const createPersonagemController = (req, res) => {
  const personagem = req.body;
  const newPersonagem = onepieceService.createOnepieceService(personagem);
  res.send(newPersonagem);
};

const updatePersonagemController = (req, res) => {
  const idParam = Number(req.param.id);
  const personagemEdit = req.body;
  const updatePersonagem = onepieceService.updateonepieceService(
    idParam,
    personagemEdit,
  );
  res.send(updatePersonagem);
};

const deletePersonagemController = (req, res) => {
  const idParam = req.params.id;
  onepieceService.deleteonepieceService(idParam);
  res.send({ message: 'Personagem deletado com sucesso!' });
};

module.exports = {
  findPersonagemController,
  findPersonagemByIdController,
  createPersonagemController,
  updatePersonagemController,
  deletePersonagemController,
};
