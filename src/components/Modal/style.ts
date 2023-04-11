import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  width: 100%;
  max-width: 344px;
  height: 365px;
  display: flex;
  flex-direction: column;
  align-content: center;
  border-radius: 8px;

  @media (min-width: 768px) {
    max-width: 520px;
  }

  .div_title {
    display: flex;
    justify-content: space-between;
    padding: 30px 16px;
    align-items: center;
    h6 {
      font-weight: var(--weight-3);
      font-size: var(--body-1);
      line-height: 20px;
    }
    button {
      border: None;
      cursor: pointer;
    }
  }
`;

export const DivIMG = styled.div`
  display: flex;
  width: 100%;
  max-width: 344px;
  height: 239px;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    max-width: 100%;
  }
`;
