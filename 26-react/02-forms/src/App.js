import {useState} from 'react';

function App() {
  // usando o hook useState
  const [name, setName] = useState(''); // hook do name
  const [email, setEmail] = useState(''); // hook do email
  const [age, setAge] = useState(''); // hook da idade

  // message
  const [message, setMessage] = useState('Registre um usuário')

  const [user, setUser] = useState({});

  function handleRegister(e){
    e.preventDefault(); // impede que o formulário seja submetido automaticamente e seu conteúdo apagado

    setMessage('Usuário registrado com sucesso!');

    setUser({
      name: name,
      email: email,
      age: age,
    })
  }

  return (
    <div>
      <h1>Manipulando formulários</h1>
      <form onSubmit={handleRegister}>
        <label htmlFor="name">Nome:</label><br />
        <input type="text" id="name" placeholder='Digite seu nome...'
          required
          value={name} // recebe o valor name
          onChange={ (event) => setName(event.target.value)} // altera o valor no name digitado no input
        /><br /><br />

        <label htmlFor="email">E-mail:</label><br />
        <input type="email" id="email" placeholder='Digite seu e-mail...'
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        /><br /><br />

        <label htmlFor="age">Idade:</label><br />
        <input type="number" id="age" placeholder='Digite sua idade...'
          required
          value={age}
          onChange={(event) => setAge(event.target.value)}
        /><br /><br />

        <button type='submit'>Registrar</button>
      </form>

      <br /><br />

      <div>
        <span>Bem vindo, {user.name}</span><br />
        <span>Idade: {user.age}</span><br />
        <span>E-mail: {user.email} </span><br /><br />
        <span>{message}</span>
      </div>
    </div>
  );
}

export default App;
