import { styled } from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  width: 30.4rem;
  height: 46.2rem;

  .fav {
    font-size: 24px;
    position: absolute;
    margin-left: 25rem;
    margin-top: 1.6rem;
  }

  .selected {
    color: red;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > div > img {
    max-width: 17.6rem;
    max-height: 17.6rem;
    margin-top: 2.4rem;
  }

  > div > h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 2.4rem;
    margin-top: 1.5rem;
  }

  > div > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    margin-top: 1.5rem;
  }

  .money{
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-family: 'Roboto', sans-serif;
    font-size: 3.2rem;
    margin-top: 1.5rem;
  }
  
  .Quanty {
    display: flex;
    margin-top: 1.5rem;
    align-items: center;
    gap: 16px;
  }

  
`;