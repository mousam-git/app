import { useState } from 'react';

function Count() {
  const [count, setCount] = useState(0);

  return (
    <div className="count-container">
      <h1 className="count">{count}</h1>
      <div className="btns">
        <button className="btn btn-one" onClick={() => setCount(count + 1)}>
          +1
        </button>
        <button className="btn btn-reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Count;
