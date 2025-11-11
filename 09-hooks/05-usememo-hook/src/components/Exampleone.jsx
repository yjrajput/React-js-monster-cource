import React, { useState, useMemo } from 'react';

const Exampleone = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const slowFunction = (num) => {
    console.log('Running slow function...');
    for (let i = 0; i <= 1000000000; i++) 
    return num * 2;
  };

  
  const doubled = useMemo(() => slowFunction(count), [count]);

//   const doubled = slowFunction(count)

  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };

  return (
    <div style={themeStyles}>
      <h2>Count: {doubled}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
};
export default Exampleone