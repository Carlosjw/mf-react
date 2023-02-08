import { useState} from 'react';

function App() {

  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Preparar meu filho pra escola',
    'Me arrumar para ir para o trabalho',
    'Fazer o meu trabalho como deve ser feito: com dedicação'
  ])

  function handleResgister(e){
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput('')
  }

  return (
    <div className="App">
      <h1>Cadastro Tarefas</h1>

      <form onSubmit={handleResgister}>
        <label>Nome da tarefa:</label>
        <input
          placeholder='Digite uma tarefa...'
        />
      </form>
    </div>
  );
}

export default App;
