const route = require('express').Router();
const controllerOnepiece = require('../controllers/onepiece.controller');

route.get('/onepiece', controllerOnepiece.findOnepieceController);
route.get('/onepiece/:id', controllerOnepiece.findOnepieceByIdController);
route.post('/create', controllerOnepiece.createOnepieceController);
route.put('/update/:id', controllerOnepiece.updateOnepieceController);
route.delete('/delete/:id', controllerOnepiece.deleteOnepieceController);

module.exports = route;
