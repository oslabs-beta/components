import React, { useState, useEffect } from 'react';


const ResponseDisplay = () => {

  // add useState hook to add state to be dummy data
  const [responseText, setResponseText] = useState(`{
    "data": {
      "hero": {
        "name": "R2-D2",
        "friends": [
          {
            "name": "Luke Skywalker"
          },
          {
            "name": "Han Solo"
          },
          {
            "name": "Leia Organa"
          }
        ]
      }
    }
  }`);

  // const handleResponseText = () => {
  //   setResponseText();
  // };

  

  return (
    <div id="responseText">
    <h1>
      Response
    </h1>
    <h4>
      {responseText}
    </h4>
  </div>
  );
};

export default ResponseDisplay;