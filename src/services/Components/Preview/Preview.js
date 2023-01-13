import React from 'react';
export default function Preview({ head }) {
  return <img src={`/${head}.png`} />;
}
