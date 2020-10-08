const {Users} = require('../models');
const {sequelize} = require('../models');
const bcrypt = require('bcrypt');

// const {sequelize, User} = require('../models');

module.exports = {
    // método que exibe view com todos os usuários!
    index: async (req, res) => {
        const users = await Users.findAll();
        res.render('./user/index', {users});
    },

    // método que exibe o formulário de criação
    create: (req, res) => {
        res.render('./user/create');
    },
    // método que registra um novo usuário no banco de dados!
    store: async (req, res) => {
        const {firstName, lastName, email, password, cpf} = req.body
        const checkUser = await Users.findOne({
            where: {email},
        });
        if (checkUser) return res.status(409).send('Usuário já cadastrado');

        const userCreated = await Users.create(
            {
            firstName,
            lastName,
            email,
            password: bcrypt.hashSync(password, 10),
            cpf
            }
        )
            .then((user) => user)
            .catch((err) => res.status(503).send('Serviço não disponível'));

        return res.redirect('/users/');
    },
    // método que exibe o formulário de edição
    edit: async (req, res) => {
        const { id } = req.params;
        const user = await Users.findOne({
            where: {
                id,
            }
        });

        return res.render('./user/edit', {user});
    },
    update: async (req, res) => {
        const {id} = req.params;
        const user = await Users.update({...req.body}, {where: {id}});

        return res.redirect(`/users/`);
    }
}