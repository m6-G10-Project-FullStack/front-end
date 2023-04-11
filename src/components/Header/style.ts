import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f0f0f0;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

export const HeaderTitleAccent = styled.span`
  color: #1d253f;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderButton = styled.button`
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: transparent;
  color: #1d253f;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #e2e2e2;
  }
`;

export const HeaderButtonPrimary = styled(HeaderButton)`
  background-color: #1d253f;
  color: #fff;

  &:hover {
    background-color: #0d1221;
  }
`;

export const HeaderUser = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const HeaderUserIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.5rem;
  border-radius: 50%;
  background-color: #1d253f;
  color: #fff;
  font-size: 1.25rem;
  font-weight: bold;
`;

export const HeaderUserName = styled.span`
  font-weight: bold;
`;
