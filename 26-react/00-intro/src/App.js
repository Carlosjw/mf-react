// importando hook useState
import { useState } from "react";

// importando componente
import Name from "./components/Name";

// criando um componente
function App(){

  // usando o hook useState: nome do useState + função que vai atualiza-lo
  const [aluno, setAluno] = useState('Carlos Lima'); // valor opcional

  // criando função para usar o setAluno
  function handleChangeName(name){
    setAluno(name)
  }

  return(
    <div>
      <h1>Componente App</h1>
      <h2>Olá, {aluno}.</h2> {/* Usando o hook*/}

      {/*Utilizando função*/}
      {/* <button onClick={handleChangeName}>Mudar Nome</button> */}

      {/* Chamando e executando a função com parâmetro */}
      <button onClick={() => handleChangeName('Marcos Aurélio')}>Mudar Nome</button><br /><br />

      {/* Reutilizando o componente */}
      <Name aluno={aluno} age={8}/>
    </div>
  )
}

export default App;