import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  height: 26rem;
  width: 112rem;
  display: flex;
  align-items: flex-end;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  margin-top: 16rem;
  margin-bottom: 6.2rem;

  > img {
    width: 60rem;
  }

  > div {
    display: flex;
    gap: .8rem;
    flex-direction: column;
    margin-bottom: 8rem;
  }

  > div > h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 4rem;
    font-weight: 500;
  }

  > div > p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }
`;