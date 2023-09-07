import styled from 'styled-components';

export const Container = styled.header`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  width: 112rem;
  height: 52rem;

  background-color: black;
  margin-bottom: 4.8rem;

  > h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 3.2rem;
    margin-bottom: 2.3rem;
  }
`;

export const Section = styled.header`
  background-color: black;
  width: 112rem;
  display: flex;
  justify-content: space-around;
`;