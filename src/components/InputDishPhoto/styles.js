import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;  
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const CustomFileInput = styled.label`
  cursor: pointer;
  background: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  height: 4.8rem;
  width: 22.9rem;
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  margin-top: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FileInputLabel = styled.span`
  margin-left: 10px;
  display: flex;
  gap: .8rem;
`;