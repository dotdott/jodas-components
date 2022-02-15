import { Icon } from "@material-ui/core";
import "./styles.scss";

export interface IIConsProps {
  name: string;
  Styles?: {};
  ClassName?: string;
  handleClick?: () => void;
  circleRadius?: boolean;
  color?: string;
}

const Icons = ({
  name = "home",
  Styles,
  ClassName,
  handleClick,
  circleRadius = false,
  color = "#000",
}: IIConsProps) => {
  return (
    <Icon
      className={`icon ${circleRadius && "circle-radius"} ${ClassName}`}
      style={{ ...Styles, color: color, borderColor: color }}
      onClick={handleClick}
      data-testid="icon-test-id"
    >
      {name}
    </Icon>
  );
};

export default Icons;
