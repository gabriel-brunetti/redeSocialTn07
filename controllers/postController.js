const {Posts} = require('../models');
const {sequelize} = require('../models');

module.exports = {
    create: (req, res) => {
        res.render("./post/create")
    },
    store: async (req, res) => {
        const {texto} = req.body
        console.log(texto);
        const post = await Posts.create(
            {
                texto,
            }
        )
            // .then((post)=> post)
            .catch((err) => res.status(503).send('Tente novamente'))
        return res.redirect('/users');
    }
}