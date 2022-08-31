const ModelDisciplina = require('../models/disciplina');

module.exports =
{
    async List(req, res) {
        try {
            const disciplinas = await ModelDisciplina.findAll();
            return res.json(disciplinas)

        } catch (error) {
            console.error("Erro na lista: ", error);
            return res.status(500).send({ error: error });
        }
    },

    async FindById(req, res) {
        try {
            const disciplina = await ModelDisciplina.findByPk(req.params.id);
            return res.json(disciplina)

        } catch (error) {
            console.error("Erro na busca: ", error);
            return res.status(500).send({ error: error });
        }
    },

    async Create(req, res) {
        try {

            console.log(req.body)
            await ModelDisciplina.create({
                Codigo: req.body.codigo,
                Nome: req.body.nome,
                Local: req.body.local,
                Criterios: req.body.criterios,
                Conteudo: req.body.conteudo,
                CargaHoraria: req.body.cargaHoraria,
                Professor: req.body.professor,
                ProfessorEmail: req.body.professorEmail,
            });

            return res.status(200).send({ sucess: true, message: 'Disciplina criada com sucesso' });

        } catch (error) {
            console.error("Erro na criação: ", error);
            return res.status(500).send({ error: error, message: 'Erro ao criar disciplina' });
        }
    },

    async Delete(req, res) {
        try {
            const disc = await ModelDisciplina.findByPk(req.body.Codigo);
            await disc.destroy();
            return res.json({ message: 'Sucesso ao excluir disciplina' });

        } catch (error) {
            console.error("Erro na exclusão: ", error);
            return res.status(500).send({ error: error });
        }
    },
}