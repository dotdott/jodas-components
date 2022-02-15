import { Icon } from "@material-ui/core";
import "./styles.scss";

export interface IIConsProps {
  name: string;
  Styles?: {};
  ClassName?: string;
  handleClick?: () => void;
  circleRadius?: boolean;
  color?: string;
  disabled?: boolean;
}

const Icons = ({
  name = "home",
  Styles,
  ClassName,
  handleClick,
  circleRadius = false,
  color = "#000",
  disabled = false,
}: IIConsProps) => {
  const disabledColor = disabled ? "#b4b4b4" : color;

  return (
    <Icon
      className={`icon ${circleRadius && "circle-radius"} ${ClassName}`}
      style={{
        ...Styles,
        color: disabledColor,
        borderColor: disabledColor,
        opacity: disabled ? ".6" : "1",
        cursor: disabled ? "default" : "pointer",
      }}
      onClick={handleClick}
      data-testid="icon-test-id"
    >
      {name}
    </Icon>
  );
};

export default Icons;
