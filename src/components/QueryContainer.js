import { useState } from 'react';


const QueryContainer = (props) => {
  const [query, setQuery] = useState('');

  const updateQuery = (e) => {
    setQuery(e.target.value);
  }

  const submitQuery = () => {
    //perform GraphQl query with text contained in query state.
    //update contents of ResponseDisplay with returned value of query.
  }
  
  return (
    <div>
      <textarea type="text" rows="20" cols="20" value={query} onChange={updateQuery} placeholder="Enter Query Here"></textarea>
      <br></br>
      <button onClick={submitQuery}>Submit Query</button>
    </div>
  );
}

export default QueryContainer;