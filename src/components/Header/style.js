import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header; 
  display: flex;
  justify-content: center;
  height: 10.4rem;
  width: 100%;

  padding: 2.4rem 12.3rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const Navbar = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 2.4rem
  }
`;

export const Input = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_100}; 
`;