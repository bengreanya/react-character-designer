import React from 'react';
export default function Preview({ head, body, legs }) {
  return (
    <>
      <img src={`/${head}.png`} />
      <img src={`/${body}.png`} />
      <img src={`/${legs}.png`} />
    </>
  );
}
