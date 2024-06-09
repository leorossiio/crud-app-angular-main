const mongoose = require("mongoose");

const TodoList = mongoose.model("tarefas", {
  tarefaId: Number, //Utilizar um Random UUID para que não fique com um id aleatório do Mongo
  tarefaDescricao: String, //Descriçao sibre a task
  usuarioAtribuido: String, //Pelo :email
  tarefaStatus: String //Não inciado, Em andamento e Finalizado 
});

module.exports = TodoList;