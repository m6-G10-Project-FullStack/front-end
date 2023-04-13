import styled from "styled-components";

export const MainStyled = styled.main`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  gap: 15px;
  background: linear-gradient(
    180deg,
    #4529e6 31.25%,
    #f1f3f5 31.26%,
    #f1f3f5 100%
  );
  border-radius: 8px;

  .section-global {
    display: flex;
    flex-direction: column;
    margin: 120px 667px 20px 181px;
    gap: 10px;
    .section-car {
      display: flex;
      box-sizing: border-box;
      width: 752px;
      height: 355px;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      background-color: var(--white-fixed);

      .img-car {
        width: 441px;
        height: 252px;
      }
    }

    .section-details-car {
      display: flex;
      flex-direction: column;
      width: 751px;
      height: Hug (239.39px);
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      gap: 8px;
      border-radius: 8px;
      padding: 44px;
      background-color: var(--white-fixed);

      .div-price {
        display: flex;
        justify-content: space-between;

        span {
          background-color: var(--brand-4);
          height: 32px;
          width: 50px;
          left: 0px;
          top: 89.392578125px;
          border-radius: 4px;
          padding: 4px 8px 4px 8px;
          margin-right: 5px;
          color: var(--brand-1);
        }
      }
    }

    .section-description {
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 36px 44px;
      gap: 32px;
      background-color: var(--white-fixed);
      border-radius: 8px;
    }

    .section-comment {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 36px 44px;
      gap: 24px;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      background-color: var(--white-fixed);
      border-radius: 8px;
    }

    .section-inputComment {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 36px 44px;
      gap: 24px;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      border-radius: 8px;
      background-color: var(--white-fixed);
    }
  }

  aside {
    display: flex;
    flex-direction: column;
  }
`;
