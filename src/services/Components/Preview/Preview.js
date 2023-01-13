import React from 'react';
export default function Preview({ head, body }) {
  return (
    <>
      <img src={`/${head}.png`} />
      <img src={`/${body}.png`} />
    </>
  );
}
