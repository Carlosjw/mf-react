import {useState} from 'react';

function App() {
  return (
    <div>
      <h1>Manipulando formulários</h1>
      <form>
        <label htmlFor="name">Nome:</label><br />
        <input type="text" id="name" placeholder='Digite seu nome...' required/><br /><br />

        <label htmlFor="email">E-mail:</label><br />
        <input type="email" id="email" placeholder='Digite seu e-mail...' required/><br /><br />

        <label htmlFor="age">Idade:</label><br />
        <input type="number" id="age" placeholder='Digite sua idade...' required/>
      </form>
    </div>
  );
}

export default App;
