import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: flex-start;
  width: 100%;
  width: 375px;
  padding-left: 27px;
  padding-right: 55px;

  @media (min-width: 768px) {
    width: 454px;
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
`;
