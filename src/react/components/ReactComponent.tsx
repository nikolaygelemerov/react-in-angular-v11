import * as React from "react";
import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { Button } from "@mui/material";

import { MUIform } from "./MUIform";

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

    setStateCounter((prevState) => prevState + 1);
  }, [stateCounter]);

  return (
    <div className="Container">
      <Button onClick={handleClick} variant="contained">
        Click to increase
      </Button>
      <p className="Container">Angular Prop counter: {propsCounter}</p>
      <p>React State counter: {stateCounter}</p>
      <MUIform />
    </div>
  );
};
