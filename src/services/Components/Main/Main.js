import React, { useState } from 'react';
import Editor from '../Editor/Editor.js';
import Preview from '../Preview/Preview.js';

export default function Main() {
  const [head, setHead] = useState('Obama');
  const [headCount, setHeadCount] = useState(0);
  const [body, setBody] = useState('Suit');
  const [bodyCount, setBodyCount] = useState(0);
  const [legs, setLegs] = useState('Heels');
  const [legCount, setLegCount] = useState(0);
  const [catchPhrase, setCatchPhrase] = useState('I am boring and do not have a catchphrase');
  return (
    <main>
      <Editor
        setHead={setHead}
        setHeadCount={setHeadCount}
        setBody={setBody}
        setBodyCount={setBodyCount}
        setLegs={setLegs}
        setLegCount={setLegCount}
        setCatchPhrase={setCatchPhrase}
      />
      <Preview
        head={head}
        body={body}
        legs={legs}
        headCount={headCount}
        bodyCount={bodyCount}
        legCount={legCount}
        catchPhrase={catchPhrase}
      />
    </main>
  );
}
