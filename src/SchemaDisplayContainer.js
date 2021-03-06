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
        // schema are uploaded or entered by schemaText
        {
            schemaText: `type Starship {
            id: ID!
            name: String!
            length(unit: LengthUnit = METER): Float
          }`
        }, 
        {
            schemaText: `type Character {
            name: String!
            appearsIn: [Episode!]!
        }`
        }
    ]);

    // input for addint additional Schema directly
    const [schemaInput, setSchemaInput] = useState('');
    
    // updateSchema checks to see if the schemaText of the schemaInput to be added already... 
    // ...exists in the schemaList and updates if not
    const updateSchemaList = () => {
        const index = schemaList.findIndex(schema => schema.schemaText === schemaInput);
        if (index === -1 && schemaInput !== '') {
            setSchemaList((prev) => {
                return [...prev, {schemaText: schemaInput}];
            });
            setSchemaInput('');
        }
    }

    const updateSchemaInput = (e) => {
        setSchemaInput(e.target.value);
    }

    return (
        <div className="schema-display-container">
            <ul>
                {schemaList.map(schema => {
                    return <SchemaDisplay 
                            key={schema.schemaText} 
                            schema={schema}/>
                })}
            </ul>
            <input 
              type="schemaText" 
              onChange={updateSchemaInput} 
              value={schemaInput}>
            </input>
            <button 
              onClick={updateSchemaList}>
              Update Schema
            </button>
        </div>
    )
}

export default SchemaDisplayContainer;