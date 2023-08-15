import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header; //Para ficar fixo na tela

  height: 10.4rem;
  width: 100%;

  padding: 2.4rem 12.3rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const Navbar = styled.div`
  height: 100%;
  background-color: red;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

`;