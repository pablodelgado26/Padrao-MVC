

class TarefaModel {
    constructor() {
        this.tarefas = [
            { id: 1, descricao: 'Estudar javaScript.js', finalizada: true },
        ];
    }
    getAll = () => this.tarefas;

    create = (descrição) => {
        const novaTarefa = {
            id: this.tarefas.length + 1,
            descrição,
            finalizada: false,
        };
        this.tarefas.push(novaTarefa);
        return novaTarefa;
    };

    update = (id, finalizado) => {
        const tarefa = this.tarefas.find((t) => tarefa.id === id);
        if (tarefa) {
            tarefa.finalizada =
                finalizado !== undefined ? finalizado : tarefa.finalizada;
            return tarefa;
        }
        return null;
    };
    delete = (id) => {
        const index = this.findIndex((t) => tarefa.id === id);
        if (index !== -1) {
            this.tarefas.splice(index, 1);
            return true;
        }
        return false;
    };
}

export default new TarefaModel();