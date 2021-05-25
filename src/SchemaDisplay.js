/* 
stateless presentation functional component sole responsible for displaying a single Schema into the Schema Display Container
*/ 

import React from 'react';

const SchemaDisplay = ({schema}) => {
    return(
        <div class="schema">
            <p>{schema.text}</p>
        </div>
    )
}

export default SchemaDisplay;