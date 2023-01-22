import { useState } from "react";

function App() {

  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    // 'Pagar UNIMED Saymon',
    // 'Estudar para concursos',
    // 'Estudar ReactJS'
  ]);

  function handleRegister(e) {
    e.preventDefault();

    setTarefas([...tarefas, input]) // pegando todas as tarefas e adicionando mais uma no final
    setInput(''); // limpando o campo do input após gravar a nova tarefa
  }

  return (
    <div>
      
      <h1>Cadastrando tarefas</h1>

      <form onSubmit={handleRegister}>
        <label>Nome da tarefa</label><br />
        <input type="text"
          placeholder="Digite uma tarefa..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
         /><br /><br />

         <button>Registrar</button>

      </form>

      <br /><br />

      <ul>
        {tarefas.map((tarefa, index) => ( // passano o parêntesis direto já estaremos retornando o valores
          <li key={tarefa}>{`${index + 1}ª ${tarefa}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
