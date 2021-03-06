import React from 'react';
import './Instructions.scss';

interface Props {
  setDisplayInstructions: (b: boolean) => void;
  displayInstructions: boolean;
}

function Instructions(props: Props): JSX.Element {
  const { setDisplayInstructions, displayInstructions } = props;

  const handleInstructions = () => {
    setDisplayInstructions(!displayInstructions);
  };

  return (
    <div className="instructions-container">
      <h4>Instructions</h4>
      <p>1. roll dice</p>
      <p>2. add the dice up</p>
      <p>3. play the blocks that add up to the sum of the dice</p>
      <button onClick={handleInstructions} type="button">
        Hide Instructions
      </button>
    </div>
  );
}

export default Instructions;
