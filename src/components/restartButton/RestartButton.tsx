import React from 'react';
import './RestartButton.scss';

export default function RestartButton({
  handleRestart,
}: {
  handleRestart: () => void;
}): JSX.Element {
  return (
    <button id="restart-button" type="button" onClick={handleRestart}>
      Restart
    </button>
  );
}
