import { useState } from 'react';

export default function Editor({ setHead, setHeadCount }) {
  function handleSetHead(e) {
    setHead(e.target.value);
    setHeadCount((prevState) => prevState + 1);
  }

  return (
    <div className="editor">
      <div className="form-control">
        <select name="head" onChange={handleSetHead}>
          <option value="obama">Obama</option>
          <option value="rock">The Rock</option>
          <option value="shreck">Shreck</option>
        </select>
      </div>
    </div>
  );
}
