import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  height: 26rem;
  width: 80%;

  > img {
    width: 60rem;
  }
`;