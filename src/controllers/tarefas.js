const Tarefas = require('../models/tarefas');

exports.create = (req, res) => {
    
    new Tarefas(req.body)
        .save((error, tarefa) => {
            if (error) {
                return res.status(400).send({
                    erro: error.name,
                    mensagem: error.message
                })
            }

            return res.status(201).send({
                mensagem: 'Tarefa criada com sucesso!',
                tarefa
            });
        })

}

exports.list = (req, res) => {

    Tarefas.find((error, tarefas) => {
            if (error) {
                return res.status(400).send({
                    erro: error.name,
                    mensagem: error.message
                })
            }

            return res.status(200).send({
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
            return res.status(400).send({
                erro: error.name,
                mensagem: error.message
            })
        }

        if (!tarefa) {
            return res.status(404).send({
                erro: 'Tarefa não encontrada',
                mensagem: `Não foi encontrada tarefa com o id ${id}`
            })
        }

        return res.status(200).send({
            mensagem: 'Tarefa encontrada!',
            tarefa
        });
    })
}

exports.update = (req, res) => {

}

exports.delete = (req, res) => {

}