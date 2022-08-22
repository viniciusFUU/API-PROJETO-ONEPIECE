const mongoose = require('mongoose');

const onePieceSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  descricao: {
    type: String,
    require: true,
  },
  foto: {
    type: String,
    require: true,
  },
  recompensa: {
    type: String,
    require: true,
  },
});

const OnePiece = mongoose.model('onePiece', onePieceSchema);

module.exports = OnePiece;

