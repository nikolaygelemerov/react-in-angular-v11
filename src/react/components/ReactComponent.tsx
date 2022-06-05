import * as React from "react";
import { FunctionComponent, useCallback, useEffect, useState } from "react";

export interface IMyComponentProps {
  counter?: number;
  onClick?: (stateCounter: number) => void;
}

export const ReactComponent: FunctionComponent<IMyComponentProps> = ({
  counter: propsCounter,
  onClick,
}: IMyComponentProps) => {
  const [stateCounter, setStateCounter] = useState(0);

  useEffect(() => {
    console.log("propsCounter: ", propsCounter);
  }, [propsCounter]);

  useEffect(() => {
    console.log("stateCounter: ", stateCounter);
  }, [stateCounter]);

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick(stateCounter);
    }

    setStateCounter((prevState) => prevState + 10);
  }, [stateCounter]);

  return (
    <div className="Container">
      <div className="Container">
        React Props counter: {propsCounter}
        <button type="button" onClick={handleClick}>
          click to increase
        </button>
      </div>
      <div>React State counter: {stateCounter}</div>
    </div>
  );
};
