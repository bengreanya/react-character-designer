import { useState } from 'react';

export default function Editor({ setHead, setHeadCount, setBody, setBodyCount }) {
  function handleSetHead(e) {
    setHead(e.target.value);
    setHeadCount((prevState) => prevState + 1);
  }
  function handleSetBody(e) {
    setBody(e.target.value);
    setBodyCount((prevState) => prevState + 1);
  }
  function handleSetLegs(e) {
    setLegs(e.target.value);
    setLegCount((prevState) => prevState + 1);
  }

  return (
    <div className="editor">
      <div className="form-control">
        <select name="head" onChange={handleSetHead}>
          <option value="obama">Obama</option>
          <option value="rock">The Rock</option>
          <option value="shreck">Shreck</option>
        </select>
        <select name="body" onChange={handleSetBody}>
          <option value="hulk">Hulk</option>
          <option value="suit">Suit</option>
          <option value="shirt">Shirt</option>
        </select>
        <select name="legs" onChange={handleSetLegs}>
          <option value="chick">Hulk</option>
          <option value="suit">Suit</option>
          <option value="shirt">Shirt</option>
        </select>
      </div>
    </div>
  );
}
