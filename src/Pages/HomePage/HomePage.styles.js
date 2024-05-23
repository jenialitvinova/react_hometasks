import styled from "styled-components";
import BG from "../../assets/BG Shape Home.svg";
export const Background = styled.div`
  display: flex;
  background-image: url("${BG}");
  background-size: cover;
  background-position: right top;
  padding: 3rem 5rem 5rem;
  height: 100%;
`;
export const MainWrapper = styled.main`
  flex: 1;
  flex-direction: row;
`;
export const HomeInfo = styled.div`
  align-items: start;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  gap: 2rem;
  max-width: 32rem;
`;

export const Title = styled.h1`
  font-size: 3.158rem;
  text-wrap: balance;
`;

export const SubTitle = styled.h2`
  color: #546285;
  font-size: 0.947rem;
`;

export const StarRating = styled.div`
  flex-direction: column;
`;
export const StarText = styled.p`
  color: var(--color-black);
  font-weight: bold;
`;

export const FlexedWrapper = styled.div`
  align-items: center;
  gap: 0.2rem;
`;

export const StarDiv = styled.div`
  width: 1.368rem;
`;

export const StarImg = styled.img`
  width: 100%;
`;

export const HomeImgDiv = styled.div`
  max-width: 32rem;
`;

export const HomeImg = styled.img`
  width: 100%;
`;