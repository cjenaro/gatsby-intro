import React, { useState } from 'react';
import { css } from '@emotion/core';

const Wave = () => {
  const [waves, setWaves] = useState(0);
  const label = `👋 ${waves} ${waves === 1 ? 'wave' : 'waves'}`;

  return (
    <button
      onClick={() => setWaves(waves + 1)}
      css={css`
        background: rebeccapurple;
        border: none;
        color: white;
        padding: 0.25rem;
        font-size: 1.25rem;
      `}
    >
      {label}
    </button>
  );
};

export default Wave;
