import styled from 'styled-components';

export const Container = styled.header`
  //color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  height: 7.7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

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