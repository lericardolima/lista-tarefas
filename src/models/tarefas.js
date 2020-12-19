const mongoose = require('mongoose');

const TarefasSchema = new mongoose.Schema({
    descricao: {
        type: String,
        required: true,
    },
    data_criacao: {
        type: Date,
        default: Date.now,
        required: true,
    },
    status: {
        type: String,
        enum: ['PENDENTE', 'EM_ANDAMENTO', 'CONCLUIDA'],
        default: 'PENDENTE',
        required: true,
    },
});

module.exports = mongoose.model('Tarefas', TarefasSchema);