import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  height: 7.7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  width: 100%;
  position: fixed;


  > img {
    margin-left: 12rem;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    margin-right: 12rem;
  }
`;