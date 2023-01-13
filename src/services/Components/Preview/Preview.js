import React from 'react';
export default function Preview({ head, body, legs, headCount, bodyCount, legCount }) {
  return (
    <>
      <img src={`/${head}.png`} />
      <img src={`/${body}.png`} />
      <img src={`/${legs}.png`} />
      <p>
        You Have changed the head {`${headCount}`} times, the body {`${bodyCount}`} times, and the
        legs {`${legCount}`} times.
      </p>
    </>
  );
}
