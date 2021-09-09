import React, { useState, useEffect, useCallback } from 'react';

export function Counter(props) {

  const [i, updateI] = useState(0);
  const [j, setJ] = useState(0);
  const [content, setContent] = useState([]);

  useEffect(() => {

    fetch("https://dbadmin_api_test.dtvlaweb.com/coverage/Cds/Article")
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setContent(result.content);
      })
      .catch(error => console.log('error', error));

  }, [j]);

  return (
    <div>
      <h1>Hello, {props.name} {i} {j}</h1>
      <button onClick={() => updateI(i + 1)}> add +1</button>
      <button onClick={() => setJ(j + 1)}> add +1</button>

      {content.map((item) => <p>{item.value}</p>)}
    </div >
  );
}