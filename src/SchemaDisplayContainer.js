/* 
stateful functional container component responsible for rendering 
as many SchemaDisplay components as the uploaded Schema require
*/ 

import React, { useState } from 'react';
import SchemaDisplay from './SchemaDisplay';




const SchemaDisplayContainer = () => {
    
    // list of Schema to be rendered by SchemaDisplay
    const [schemaList, setSchemaList] = useState([
        // for now, we are hard-coding initial schema
        // later, we will start with an empty array and update when...
        // schema are uploaded or entered by text
        {text: 'here is a Schema', id: 1}, 
        {text: 'here is another Schema', id: 2}
    ]);

    // input for addint additional Schema directly
    const [schemaInput, setSchemaInput] = useState('');
    
    // for now, we are hard-coding a single newSchema
    const newSchema = {text: 'yet another Schema', id: 3}

    // updateSchema checks to see if the newSchema to be added already... 
    // ...exists in the schemaList and updates if not
    const updateSchema = () => {
        const index = schemaList.findIndex(schema => schema.id === newSchema.id);
        if (index === -1) {
            setSchemaList((prev) => {
                return [...prev, newSchema];
            });
        }
    }

    return (
        <div class="schema-display-container">
            <ul>
                {schemaList.map(schema => {
                    return <li><SchemaDisplay key={schema.id} schema={schema}/></li>
                })}
            </ul>
            <p>The button below will currently add a single additional schema</p>
            <input></input>
        <button onClick={updateSchema}>Update Schema</button>
        </div>
    )
}

export default SchemaDisplayContainer;