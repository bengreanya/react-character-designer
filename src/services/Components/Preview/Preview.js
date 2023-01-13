import React from 'react';
export default function Preview({ head, body, legs, headCount }) {
  return (
    <>
      <img src={`/${head}.png`} />
      <img src={`/${body}.png`} />
      <img src={`/${legs}.png`} />
      <p>You Have changed the head {`${headCount}`} times! </p>
    </>
  );
}
