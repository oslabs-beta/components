import './App.css';
import SchemaDisplayContainer from './SchemaDisplayContainer';
import ResponseDisplay from './ResponseDisplay';
import QueryContainer from './components/QueryContainer';

function App() {
  return (
    <div>
      <h1 className="App">PeachQL React App</h1>
      <SchemaDisplayContainer/>
      <div id="ResponseDisplay">
      <ResponseDisplay />
      <QueryContainer />
      </div>
    </div>
    
  );
}

export default App;
