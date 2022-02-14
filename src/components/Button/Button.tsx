import React from "react";
import "./styles.scss";
import * as MU from "@material-ui/core";

export interface IButtonProps {
  btnFunction?: () => void;
  btnClasses?: "_red" | "_blue";
  btnExtraStyles?: {};
  children?: React.ReactNode;
  noUppercase?: boolean;
}

const Button = ({
  btnFunction,
  btnClasses = "_blue",
  btnExtraStyles,
  children,
  noUppercase = false,
}: IButtonProps) => {
  return (
    <MU.Button
      style={btnExtraStyles}
      className={`button ${btnClasses} ${noUppercase ? "noUppercase" : ""}`}
      onClick={btnFunction}
      data-testid="button-test-id"
    >
      {children}
    </MU.Button>
  );
};

export default Button;
