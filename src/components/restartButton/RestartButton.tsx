import React from 'react';
import './RestartButton.scss';

export interface RestartButtonPropTypes {
  handleRestart: () => void;
}

export default function RestartButton({
  handleRestart,
}: RestartButtonPropTypes): JSX.Element {
  return (
    <button id="restart-button" type="button" onClick={handleRestart}>
      Restart
    </button>
  );
}
