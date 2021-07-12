import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 40vw;
  height: 100%;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    margin: 2rem auto;
    width: 90vw;
  } ;
`;
export const Wrapper = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;
