import React, { useState } from 'react';
import Editor from '../Editor/Editor.js';
import Preview from '../Preview/Preview.js';

export default function Main() {
  const [head, setHead] = useState('Obama');
  const [headCount, setHeadCount] = useState(0);
  console.log('headCount', headCount);
  return (
    <main>
      <Preview head={head} />
      <Editor setHead={setHead} setHeadCount={setHeadCount} />
    </main>
  );
}
