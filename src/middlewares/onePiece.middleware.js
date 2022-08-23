const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido.' });
  }
  next()
};

const validObjectBody = (req, res, next) => {
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
  next()
}

module.exports = {
  validId,
  validObjectBody,
};
