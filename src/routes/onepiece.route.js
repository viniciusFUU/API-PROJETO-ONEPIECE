route = require('express').Router();
const controllerPersonagem = require('../controllers/onePiece.controller');
const {validId} = require('../middlewares/onePiece.middleware')
const {validObjectBody} = require('../middlewares/onePiece.middleware')

route.get('/personagens', controllerPersonagem.findAllPersonagensController);
route.get('/personagem/:id', validId, controllerPersonagem.findByIdPersonagemController);
route.post('/create', validObjectBody, controllerPersonagem.createPersonagemController);
route.put('/update/:id', validId, validObjectBody, controllerPersonagem.updatePersonagemController);
route.delete('/delete/:id', validId, controllerPersonagem.deletePersonagemController);

module.exports = route;
