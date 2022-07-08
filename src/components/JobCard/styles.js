import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 50px !important;
`

export const Card = styled.div`
  height: 130px;
  width: 100%;
  background: ${({theme}) => theme.colors.primary.light};
  box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  padding: 0 30px;

  &  {
    margin-bottom: 20px;
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 100%;
  }
`

export const JobInfo = styled.div`
  
`