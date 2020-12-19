const tarefasController = require('../controllers/tarefas');

const BASE_PATH = '/api/tarefas';

module.exports = (app) => {
    console.log('Mapeando rotas da API');

    app.post(BASE_PATH, tarefasController.create)
        .get(BASE_PATH, tarefasController.list)
        .get(`${BASE_PATH}/:id`, tarefasController.get)
        .put(`${BASE_PATH}/:id`, tarefasController.update)
        .delete(`${BASE_PATH}/:id`, tarefasController.delete);
}