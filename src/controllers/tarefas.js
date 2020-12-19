const Tarefas = require('../models/tarefas');

const montarResponse = (response, statusCode, responseBody) => {
    return response.status(statusCode).send(responseBody);
}

const montarErrorResponsePadrao = (response, error) => {
    return montarResponse(response, 400, {
        erro: error.name,
        mensagem: error.message
    });
}

exports.create = (req, res) => {
    
    new Tarefas(req.body)
        .save((error, tarefa) => {
            if (error) {
                return montarErrorResponsePadrao(res, error);
            }

            return montarResponse(res, 201, {
                mensagem: 'Tarefa criada com sucesso!',
                tarefa
            })
        })

}

exports.list = (req, res) => {

    Tarefas.find((error, tarefas) => {
            if (error) {
                return montarErrorResponsePadrao(res, error);
            }

            return montarResponse(res, 200, {
                mensagem: 'Lista de tarefas carregadas!',
                quantidade: tarefas.length,
                tarefas
            });
        })

}

exports.get = (req, res) => {
    const { id } = req.params;
    Tarefas.findById(id, (error, tarefa) => {
        if (error) {
            return montarErrorResponsePadrao(res, error);
        }

        if (!tarefa) {
            return montarResponse(res, 404, {
                erro: 'Tarefa não encontrada',
                mensagem: `Não foi encontrada tarefa com o id ${id}`
            });
        }

        return montarResponse(res, 200, {
            mensagem: 'Tarefa encontrada!',
            tarefa
        });
    })
}

exports.update = (req, res) => {
    const { id } = req.params;
    const tarefa = req.body;
    Tarefas.findByIdAndUpdate(id, tarefa, (error, result) => {
        if (error) {
            return montarErrorResponsePadrao(res, error);
        }

        if (!result) {
            return montarResponse(res, 404, {
                erro: 'Tarefa não encontrada',
                mensagem: `Não foi encontrada tarefa com o id ${id}`
            });
        }

        return montarResponse(res, 200, {
            mensagem: 'Tarefa atualizada!',
            tarefa
        });
    })
}

exports.delete = (req, res) => {

}