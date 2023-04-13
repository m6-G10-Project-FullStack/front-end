import styled from "styled-components";

export const Section = styled.section`
  width: calc(30% - 64px);
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: flex-start;
  width: 100%;
  max-width: 375px;
  padding-left: 27px;
  padding-right: 55px;

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
      padding-left: 20px;

      @media (min-width: 768px) {
        width: 141px;
      }
    }
    input::placeholder {
      color: var(--gray-3);
      font-weight: var(--weight-2);
      font-size: var(--body-1);
      line-height: 20px;
      padding-left: 10px;
    }
  }
`;

export const divButton = styled.div`
  width: 100%;
  max-width: 375px;
  padding-left: 27px;
  margin-top: 42px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    max-width: 454px;
  }
`;
