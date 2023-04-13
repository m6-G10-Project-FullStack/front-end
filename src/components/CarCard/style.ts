import styled from "styled-components";

export const StyleDiv = styled.div`
  width: 312px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  text-align: justify;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
  .div-img-car {
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: var(--gray-5);
    box-sizing: border-box;
  }
  .img--div {
    width: 262px;
    height: 100%;
  }
  h2 {
    line-height: 20px;
    font-size: var(--heading-7);
  }
  .div-text-car {
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 15px;
  }
  p {
    font-family: "Inter";
    font-weight: var(--weight-4);
    text-align: left;
  }
  .div--seller {
    display: flex;
    align-items: center;
  }
  .tag--iniciais {
    background-color: var(--brand-1);
    padding: 5px;
    border-radius: 50%;
    color: var(--white-fixed);
    font-size: var(--body-2);
  }
  .name-seller {
    padding-left: 5px;
    align-items: center;
  }
  .tag--details-car {
    display: flex;
    width: 100%;
    gap: 15px;
    align-items: center;
    justify-content: space-around;
  }
  span {
    font-size: 14px;
    padding: 8px 4px 8px 4px;
    color: var(--brand-1);
    background-color: var(--brand-4);
  }
`;
