import styled from "styled-components";

export const MenuItemContainer = styled.div`
  height: ${({ size }) => (size ? "380px" : "240px")};
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    & .background-image {
      transform: scale(1.1);
    }
    & .content {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  transition: all 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
`;

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: #fff;
  opacity: 0.7;
  position: absolute;
  transition: all 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
`;

export const TitleContainer = styled.h1`
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const SubtitleContainer = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
