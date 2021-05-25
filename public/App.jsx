import React, { useState } from 'react';
import render from 'react-dom'
import './styles.css';

import VaribleInput from './VaribleInput'

const App = () => {
    const [editorLanguage, setEditorLanguage] = useState('javascript');
    return (
        <div className='App'>
            <h1>React code syntax highLighter</h1>
            <fieldset>
                <legend>Choose Language:</legend>
                <input type='radio' 
                id='javascript' 
                name='language' 
                value='javascrippt'
                checked={editorLanguage === 'markup'}
                onChange={() => setEditorLanguage('markup')}
                />
                <label htmlFor='css'>CSS</label>
            </fieldset>
            <VaribleInput language={editorLanguage}/>
        </div>
    )
}
render(<App />, document.querySelector("#root"));
export default App;