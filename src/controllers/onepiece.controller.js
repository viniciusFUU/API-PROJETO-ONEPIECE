const onePieceService = require('../services/onePiece.service');
const mongoose = require('mongoose');

const findAllPersonagensController = async (req, res) => {
  const personagens = await onePieceService.findAllPersonagensService();

  if (personagens.length == 0) {
    return res.status(404).send({
      message: 'Não existe personagem algum cadastrado!',
    });
  }

  res.send(personagens);
};

const findByIdPersonagemController = async (req, res) => {
  const parametroId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(parametroId)) {
    return res.status(400).send({ message: 'Id inválido.' });
  }

  const escolhaPersonagem = await onePieceService.findByIdPersonagemService(
    parametroId,
  );

  if (!escolhaPersonagem) {
    return res.status(404).send({
      message: 'Personagem não encontrado!',
    });
  }
  res.send(escolhaPersonagem);
};

const createPersonagemController = async (req, res) => {
  const personagem = req.body;

  if (
    !personagem ||
    !personagem.nome ||
    !personagem.descricao ||
    !personagem.foto ||
    !personagem.recompensa
  ) {
    return res.status(400).send({
      message: 'Envie todos os campos do personagem o personagem completo!',
    });
  }

  const newPersonagem = await onePieceService.createPersonagemService(
    personagem,
  );
  res.status(201).send(newPersonagem);
};

const updatePersonagemController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido.' });
  }

  const personagemEdit = req.body;

  if (
    !personagemEdit ||
    !personagemEdit.nome ||
    !personagemEdit.descricao ||
    !personagemEdit.foto ||
    !personagemEdit.recompensa
  ) {
    return res.status(400).send({
      message: 'Envie todos os campos do personagem o personagem completo!',
    });
  }

  const updatePersonagem = await onePieceService.updatePersonagemService(
    idParam,
    personagemEdit,
  );
  res.send(updatePersonagem);
};

const deletePersonagemController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido.' });
  }

  await onePieceService.deletePersonagemService(idParam);

  res.send({ message: 'Personagem deletado com sucesso' });
};

module.exports = {
  findAllPersonagensController,
  findByIdPersonagemController,
  createPersonagemController,
  updatePersonagemController,
  deletePersonagemController,
};
