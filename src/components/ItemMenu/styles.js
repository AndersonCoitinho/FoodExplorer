import { styled } from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  //background-color: red;
  width: 30rem;
  height: 46rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 17.6rem;
    margin-top: 1.2rem;
  }

  > h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 2.4rem;
    margin-top: 1.5rem;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    margin-top: 1.5rem;
  }

  > div {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-family: 'Roboto', sans-serif;
    font-size: 3.2rem;
    margin-top: 1.5rem;
  }
`;