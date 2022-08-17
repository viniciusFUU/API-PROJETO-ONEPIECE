route = require('express').Router();
const controllerPersonagem = require('../controllers/onePiece.controller');

route.get('/personagens', controllerPersonagem.findAllPersonagensController);
route.get('/personagem/:id', controllerPersonagem.findByIdPersonagemController);
route.post('/create', controllerPersonagem.createPersonagemController);
route.put('/update/:id', controllerPersonagem.updatePersonagemController);
route.delete('/delete/:id', controllerPersonagem.deletePersonagemController);

module.exports = route;
