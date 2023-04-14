import { StaticImageData } from "next/image";
import styled from "styled-components";

interface iBannerProps {
  image: StaticImageData;
}

export const Banner = styled.section<iBannerProps>`
  margin-top: 78px;
  height: calc(100vh - 78px);
  position: relative;
  background-image: url(${(props) => props.image.src});
  background-size: cover;
  background-position: center center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.29) 0%,
      #000000 100%
    );
    opacity: 0.7;
  }

  div {
    padding: 16px;
    position: absolute;
    top: 76px;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 26px;
    color: var(--white-fixed);
    text-align: center;

    h1 {
      font-size: var(--heading-3);
      line-height: 40px;
    }

    p {
      font-size: var(--heading-5);
      line-height: 30px;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      position: static;
      top: unset;
      left: unset;
      z-index: 100;

      h1 {
        font-size: var(--heading-1);
        line-height: 45px;
      }

      p {
        font-size: var(--heading-2);
        line-height: 56px;
      }
    }
  }
`;

export const Container = styled.section`
  margin-top: 64px;
  padding: 0 16px;
  width: 100vw;
  max-width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column-reverse;
  gap: 64px;

  @media (min-width: 768px) {
    height: 100%;
    margin-top: 32px;
    flex-direction: row;
    gap: unset;
    justify-content: space-between;
  }
`;

export const CarSection = styled.ul`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 6px;
  height: fit-content;
  overflow-x: auto;

  li {
    height: 390px;
    min-width: 312px;
  }

  @media (min-width: 768px) {
    width: calc((312px * 3) + 24px);
    gap: 6;
    overflow-x: hidden;
    flex-wrap: wrap;
  }
`;

export const Pagination = styled.div`
  margin: 64px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  font-size: var(--heading-6);

  p {
    color: var(--gray-4);

    span {
      color: var(--gray-3);
    }
  }

  button {
    border: none;
    background-color: transparent;
    color: var(--brand-1);
    font-family: var(--font-family);
    font-size: var(--heading-6);
    font-weight: bold;
    cursor: pointer;
  }
`;
