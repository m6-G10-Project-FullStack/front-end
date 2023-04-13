import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 351px;
  background: var(--gray-10);
  border-radius: 4px;
  padding: 12px;
  @media (min-width: 768px) {
    max-width: 440px;
  }
  h3 {
    padding-top: 36px;
    padding-left: 30px;
    font-weight: var(--weight-2);
    font-size: var(--heading-6);
    line-height: 25px;
  }
  section {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1px;
    padding-top: 20px;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 36px;
    background: var(--gray-10);
    border-radius: 4px;
    .gray-div-car-photos {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90px;
      height: 90px;
      background-color: var(--gray-7);
    }
  }
`;
