const onePieceService = require('../services/onePiece.service');

const findAllPersonagensController = (req, res) => {
  const personagens = onePieceService.findAllPersonagensService();

  if (personagens.length == 0) {
    return res.status(404).send({
      message: 'Não existe personagem algum cadastrado!',
    })
  }
 
  res.send(personagens);
};

const findByIdPersonagemController = (req, res) => {
  const parametroId = Number(req.params.id);

  if (!parametroId) {
    return res.status(400).send({
      message: 'Id inválido!',
    });
  }

  const escolhaPersonagem =
    onePieceService.findByIdPersonagemService(parametroId);

    if (!escolhaPersonagem) {
      return res.status(404).send({
        message: 'Personagem não encontrado!',
      });
    }
  res.send(escolhaPersonagem);
};

const createPersonagemController = (req, res) => {
  const personagem = req.body;
  const newPersonagem = onePieceService.createPersonagemService(personagem);

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
  res.status(201).send(newPersonagem);
};

const updatePersonagemController = (req, res) => {
  const idParam = Number(req.params.id);

  if (!idParam) {
    return res.status(400).send({
      message: 'Id inválido!',
    });
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

  const updatePersonagem = onePieceService.updatePersonagemService(
    idParam,
    personagemEdit,
  );
  res.send(updatePersonagem);
};

const deletePersonagemController = (req, res) => {
  const idParam = Number(req.params.id);

  if (!idParam) {
    return res.status(400).send({
      message: 'Id inválido!',
    });
  }

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
