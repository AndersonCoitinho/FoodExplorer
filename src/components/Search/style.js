import styled from 'styled-components'

export const Container = styled.div`
  width: 58.1rem;
  height: 4.8rem;
  display: flex;
  align-items: center;
  
  border-radius: .5rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  
  > input {
    border: 0;
    background: transparent;
    width: 50rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_500}; 
  }
`;