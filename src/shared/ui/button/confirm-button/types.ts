export interface Props {
  type: "button" | "submit" | "reset";
  label?: string;
  color: "primary" | "warning" | "danger" | "gray";
  disabled?: boolean;
  rounded: boolean;
  outlined?: boolean;
  size?: "normal" | "large";
}
