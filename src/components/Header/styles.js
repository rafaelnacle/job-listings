import styled from "styled-components";

export const Container = styled.header`
  background: ${({theme}) => theme.colors.primary.normal};
  display: flex;

  img {
    width: 100%;
    height: 15vh;
  }
`