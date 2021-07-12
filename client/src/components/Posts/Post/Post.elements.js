import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  border-radius: 7px;
  border: 2px solid yellow;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }
`;
export const TextWrapper = styled.div`
  text-align: left;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const Title = styled.h2`
  border: 1px solid yellow;
  border-radius: 5px;
  color: white;
  width: 100%;
  margin: 1rem auto;
  padding: 0.5rem;
`;

export const Content = styled.p`
  border: 1px solid yellow;
  border-radius: 5px;
  color: white;
  width: 100%;
  margin: 1rem auto;
  padding: 0.5rem;
`;

export const Date = styled.p`
  border: 1px solid yellow;
  border-radius: 5px;
  color: white;
  width: 100%;
  margin: 1rem auto;
  padding: 0.5rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  margin: 0 1rem;

  @media screen and (max-width: 768px) {
    width: 80%;
    margin: 2rem auto;
  }
`;

export const Button1 = styled.button`
  padding: 0.4rem;
  background: #e98a15;
  margin-bottom: 0.7rem;

  cursor: pointer;
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 1.1rem;
  width: 100%;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease;
  }
`;

export const Button2 = styled.button`
  padding: 0.4rem;
  background: darkred;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 1.1rem;
  width: 100%;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease;
  }
`;
