import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
`

export const Card = styled.div`
  height: 100px;
  width: 100px;
  background: ${({theme}) => theme.colors.primary.light};
`