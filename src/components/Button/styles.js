import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  height: 6.4rem;
  border: 0;
  padding: 0 1.6rem;
  margin-top: 1.6rem;
  border-radius: .5rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;

  &:disabled {
    opacity: 0.5;
  }

`;