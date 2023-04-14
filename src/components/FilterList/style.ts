import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: relative;

  @media (min-width: 768px) {
    width: calc(30% - 64px);
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: flex-start;
  width: 100%;
  max-width: 375px;

  @media (min-width: 768px) {
    max-width: 454px;
  }

  h4 {
    margin-top: 34px;
    font-size: var(--heading-4);
    color: #000000;
    font-weight: var(--weight-2);
    line-height: 35px;
  }
  ul {
    padding-left: 10px;
    padding-top: 15px;
  }
  li {
    font-size: var(--heading-6);
    font-weight: var(--weight-3);
    line-height: 25px;
    color: var(--gray-3);
    cursor: pointer;
  }

  .div-inputs {
    display: flex;
    gap: 26px;
    @media (min-width: 768px) {
      gap: 30px;
    }

    input {
      margin-top: 22px;
      width: 125px;
      height: 37px;
      background: var(--gray-5);
      padding: 0 16px;

      @media (min-width: 768px) {
        width: 141px;
      }
    }
    input::placeholder {
      color: var(--gray-3);
      font-weight: var(--weight-2);
      font-size: var(--body-1);
      line-height: 20px;
    }
  }
`;

export const mobileClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: transparent;
  color: var(--gray-3);
  font-size: 22px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const divButton = styled.div`
  width: 100%;
  max-width: 375px;
  margin-top: 42px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    max-width: 454px;
  }
`;
