import styled from "styled-components";

interface iContainerProps {
  variant: string;
  size: "small" | "big";
}

export const DefaultContainer = styled.button<iContainerProps>`
  padding: 3px 12px;
  width: ${(props) => (props.size === "small" ? "fit-content" : "274px")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--body-2);
  font-weight: var(--weight-4);
  transition: 0.4s;

  ${({ variant }) => {
    switch (variant) {
      case "dark-1":
        return `
        background-color: var(--gray-0);
        color: var(--white-fixed);
        
        &:hover {
          background-color: var(--white-fixed);
          color: var(--gray-0);
          transition: 0.4s;
        }
        `;

      case "dark-2":
        return `
        background-color: var(--gray-1);
        color: var(--white-fixed);
        
        &:hover {
          background-color: var(--white-fixed);
          color: var(--gray-1);
          transition: 0.4s;
        }
        `;

      case "gray-1":
        return `
        background-color: var(--gray-6);
        color: var(--gray-0);
        
        &:hover {
          background-color: var(--gray-0);
          color: var(--gray-6);
          transition: 0.4s;
        }
        `;

      case "gray-2":
        return `
        background-color: var(--gray-5);
        color: var(--gray-0);
        
        &:hover {
          background-color: var(--white-fixed);
          color: var(--gray-0);
          transition: 0.4s;
        }
        `;

      case "gray-3":
        return `
        background-color: var(--gray-5);
        color: var(--white-fixed);
        
        &:hover {
          background-color: var(--white-fixed);
          color: var(--gray-0);
          transition: 0.4s;
        }
        `;

      case "brand-1":
        return `
        background-color: var(--brand-1);
        color: var(--white-fixed);
        
        &:hover {
          background-color: var(--white-fixed);
          color: var(--brand-1);
          transition: 0.4s;
        }
        `;

      case "brand-2":
        return `
        background-color: var(--brand-2);
        color: var(--white-fixed);
        
        &:hover {
          background-color: var(--white-fixed);
          color: var(--brand-2);
          transition: 0.4s;
        }
        `;

      case "brand-3":
        return `
        background-color: var(--brand-4);
        color: var(--brand-1);
          
        &:hover {
          background-color: var(--brand-1);
          color: var(--brand-4);
          transition: 0.4s;
        }
        `;

      case "brand-disabled":
        return `
        background-color: var(--brand-3);
        color: var(--white-fixed);
        cursor: default;
        `;

      case "success-1":
        return `
        background-color: var(--success-3);
        color: var(--success-1);
        
        &:hover {
          background-color: var(--success-1);
          color: var(--success-3);
          transition: 0.4s;
        }
        `;

      case "success-2":
        return `
        background-color: var(--success-2);
        color: var(--success-1);
        
        &:hover {
          background-color: var(--success-1);
          color: var(--success-2);
          transition: 0.4s;
        }
        `;

      case "alert-1":
        return `
        background-color: var(--alert-3);
        color: var(--alert-1);
        
        &:hover {
          background-color: var(--alert-1);
          color: var(--alert-3);
          transition: 0.4s;
        }
        `;

      case "alert-2":
        return `
        background-color: var(--alert-2);
        color: var(--alert-1);
        
        &:hover {
          background-color: var(--alert-1);
          color: var(--alert-2);
          transition: 0.4s;
        }
        `;
    }
  }}

  @media (min-width: 768px) {
    padding: 6px 18px;
    font-size: var(--body-1);
  }
`;
