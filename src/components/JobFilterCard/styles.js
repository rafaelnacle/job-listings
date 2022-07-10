import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  display: flex;
  position: relative;
  justify-content: center;
  margin: 0 auto;
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  background: ${({theme}) => theme.colors.primary.main};
  box-shadow: 1px 3px 8px 2px rgba(0,0,0,0.2);
  width: 100%;
  height: 80px;
  position: absolute;
  top: -60px;

  .closeCard {
    margin-left: auto;
    padding-right: 30px;
    color: ${({theme}) => theme.colors.primary.normal};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const Tag = styled.div`
  background: ${({theme}) => theme.colors.primary.light};
  color: ${({theme}) => theme.colors.primary.normal};
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 16px;
  
  p {
    padding: 10px;
    margin-left: 10px;
  }

  .closeButton {
    background-color: ${({theme}) => theme.colors.primary.normal};
    width: 30px;
    border: none;
    border-radius: 0px 3px 3px 0px;
    padding: 10px;
    &:hover {
      background-color: ${({theme}) => theme.colors.primary.veryDark};
      color: ${({theme}) => theme.colors.primary.light};
    }

    img {
      width: 10px;
      height: 10px;
      /* color: ${({theme}) => theme.colors.primary.light}; */
      margin: 0;
    }
  }
`