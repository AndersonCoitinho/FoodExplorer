import styled from 'styled-components';

export const Container = styled.div`
  width: 9.9rem;
  height: 3.2rem;
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;