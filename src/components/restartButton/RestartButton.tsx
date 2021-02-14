import React from 'react';

export default function RestartButton({
  handleRestart,
}: {
  handleRestart: () => void;
}): JSX.Element {
  return (
    <button type="button" onClick={handleRestart}>
      Restart
    </button>
  );
}
