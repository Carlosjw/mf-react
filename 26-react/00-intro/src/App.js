const myFamily = ['Carlos', 'Solange', 'Saymon', 'bebê']


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      {myFamily.forEach(member => {
        <li>{member}</li>
      })}
    </div>
  );
}

export default App;
