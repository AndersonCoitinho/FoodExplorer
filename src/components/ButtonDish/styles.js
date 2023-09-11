import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  width: 21.6rem;
  height: 5.6rem;
  border: 0;
  font-size: 1.4rem;
  border-radius: .5rem;
  font-family: 'Poppins', sans-serif;

  padding: 1.2rem 3.2rem;
  
  display: flex;
  justify-content: center;
  gap: .8rem;

  align-items: center;


`;