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
  background: linear-gradient(to right, #0b0d0d, #4529e6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.2rem;
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
  background-color: #fdfdfd;
  border: 2px solid gray;
  &:hover {
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
  background-color: #5126ea;
  color: #fff;
  font-size: 1.25rem;
  font-weight: bold;
`;

export const HeaderUserName = styled.span`
  font-weight: bold;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 0;
  display: flex;
  flex-direction: column;
  min-width: 12rem;
  padding: 0.5rem 0;
  background-color: #fff;
  border: 1px solid #dcdcdc;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  z-index: 1;
`;

export const DropdownMenuItem = styled.button`
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #1d253f;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;
