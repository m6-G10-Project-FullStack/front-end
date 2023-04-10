import { DefaultContainer } from "./style";

interface iButtonProps {
  children: React.ReactNode;
  b_color: string;
  bg_color: string;
  t_color: string;
  h_b_color: string;
  h_bg_color: string;
  h_t_color: string;
  clickFunction: () => void;
  variant?: "small" | "default";
}

export const Button = ({
  children,
  clickFunction,
  bg_color,
  b_color,
  h_b_color,
  t_color,
  h_bg_color,
  h_t_color,
  variant,
}: iButtonProps) => {
  return (
    <DefaultContainer
      b_color={b_color}
      bg_color={bg_color}
      t_color={t_color}
      h_b_color={h_b_color}
      h_bg_color={h_bg_color}
      h_t_color={h_t_color}
      variant={variant}
      onClick={clickFunction}
    >
      {children}
    </DefaultContainer>
  );
};
