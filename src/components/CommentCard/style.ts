import styled from "styled-components";

interface iDivProps {
  cor: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 24px;
  margin-bottom: 44px;
  .div-header {
    display: flex;
    width: 100%;
    gap: 8px;
    align-items: center;
    h6 {
      font-weight: var(--weight-3);
      font-size: var(--body-2);
      line-height: 24px;
      color: var(--gray-1);
    }
    span {
      font-weight: var(--weight-4);
      font-size: 12px;
      line-height: 24px;
      color: var(--gray-3);
    }
  }
  p {
    padding-top: 16px;
    font-weight: var(--weight-3);
    font-size: var(--body-2);
    line-height: 24px;
    color: var(--gray-2);
    text-align: justify;
  }
`;

export const Div = styled.div<iDivProps>`
  background-color: ${(props) => props.cor};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: var(--weight-3);
  font-size: var(--body-2);
  line-height: 0px;
  color: var(--white-fixed);
`;
