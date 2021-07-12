import styled from "styled-components";

export const Container = styled.div`
  width: 40vw;
  height: 500px;
  margin: auto;
  position: fixed;
  top: 5%;
  right: 5%;

  @media screen and (max-width: 768px) {
    position: static;
    margin: 2rem auto;
    width: 90vw;
  } ;
`;

export const TheForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 90%;
  background: transparent;
  border-radius: 5px;
  border: 2px solid yellow;

  @media screen and (max-width: 768px) {
    width: 100%;
  } ;
`;

export const Input = styled.input`
  width: 80%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid grey;
  border-radius: 5px;
`;

export const Title = styled.h2`
  color: white;
  margin-bottom: 3rem;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Button1 = styled.button`
  width: 80%;
  padding: 0.4rem;
  background: brown;
  margin-bottom: 0.7rem;
  margin-top: 3rem;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 1.2rem;

  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease;
  }
`;
