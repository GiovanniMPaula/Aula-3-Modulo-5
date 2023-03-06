import Usuario from '../models/usuario.js'
function usuarioController(app) {
    app.get('/usuario', listar)
    app.post('/usuario', inserir)
    function listar(req, res) {
        const user1 = new Usuario('Gio','gmp@outlook.com','123456')
        res.send('Rota ativada com GET e recurso usuario:')
        console.log(user1)
    }
    function inserir(req, res) {
        res.send({
            "nome":"Gio",
            "email":"gmp@outlook.com"
        })
        console.log(req.body)
    }
}
export default usuarioController