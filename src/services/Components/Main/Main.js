import React, { useState } from 'react';
import Editor from '../Editor/Editor.js';
import Preview from '../Preview/Preview.js';

export default function Main() {
  const [head, setHead] = useState('Obama');
  const [headCount, setHeadCount] = useState(0);
  const [body, setBody] = useState('Suit');
  const [bodyCount, setBodyCount] = useState(0);
  return (
    <main>
      <Preview head={head} body={body} />
      <Editor
        setHead={setHead}
        setHeadCount={setHeadCount}
        setBody={setBody}
        setBodyCount={setBodyCount}
      />
    </main>
  );
}
