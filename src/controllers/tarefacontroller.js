import Tarefa from '../models/Tarefa.js'
function tarefaController(app) {
    app.get('/tarefa', listar)
    app.post('/tarefa', inserir)
    function listar(req, res) {
        const d = new Date();
        const Tarefa = new Tarefa('Back-End','uso de Express e bibliotecas',true,d)
        res.send('Rota ativada com GET e recurso tarefa: lista de tarefas deve ser retornada')

    }
    function inserir(req, res) {
        res.send('Rota ativada com POST e recurso tarefa: tarefa deve ser inserida')
    }
}
export default tarefaController
