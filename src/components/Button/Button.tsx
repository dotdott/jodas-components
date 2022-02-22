import React from "react";
import "./styles.scss";
import * as MU from "@material-ui/core";

export interface IButtonProps extends React.ComponentProps<typeof MU.Button> {
  btnFunction?: () => void;
  btnClasses?: "_red" | "_blue";
  btnExtraStyles?: {};
  children?: React.ReactNode;
  noUppercase?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}

const Button = ({
  btnFunction,
  btnClasses = "_blue",
  btnExtraStyles,
  children,
  noUppercase = false,
  type = "button",
  disabled,
  ...props
}: IButtonProps) => {
  return (
    <MU.Button
      style={btnExtraStyles}
      className={`button ${btnClasses} ${noUppercase ? "noUppercase" : ""}`}
      onClick={btnFunction}
      type={type}
      disabled={disabled}
      data-testid="button-test-id"
      {...props}
    >
      {children}
    </MU.Button>
  );
};

export default Button;
