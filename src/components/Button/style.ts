import styled from "styled-components";

interface iContainerProps {
  b_color: string;
  bg_color: string;
  t_color: string;
  h_b_color: string;
  h_bg_color: string;
  h_t_color: string;
  variant?: "small" | "default";
}

export const DefaultContainer = styled.button<iContainerProps>`
  padding: ${(props) => (props.variant === "small" ? "4px 6px;" : "4px 12px;")};
  width: ${(props) => (props.variant === "small" ? "fit-content" : "100%")};
  border: 1px solid var(--${(props) => props.b_color});
  border-radius: 4px;
  background-color: var(--${(props) => props.bg_color});
  color: var(--${(props) => props.t_color});
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    border: 1px solid var(--${(props) => props.h_b_color});
    background-color: var(--${(props) => props.h_bg_color});
    color: var(--${(props) => props.h_t_color});
    transition: 0.4s;
  }
`;
