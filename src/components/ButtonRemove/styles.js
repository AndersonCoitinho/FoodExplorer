import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  width: 13.5rem;
  height: 4.8rem;
  border: 0;
  font-size: 1.4rem;
  border-radius: .5rem;
  font-family: 'Poppins', sans-serif;
  padding: 1.2rem 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;