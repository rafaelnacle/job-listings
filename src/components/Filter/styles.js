import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  top: -40px;
  width: 100%;


  @media only screen and (max-width: 600px) {
    margin: 20px;
    width: auto;
  }
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  background: ${({theme}) => theme.colors.primary.main};
  box-shadow: 1px 3px 8px 2px rgba(0,0,0,0.2);
  width: 100%;
  height: 80px;

  .closeCard {
    margin-left: auto;
    padding-right: 30px;
    color: ${({theme}) => theme.colors.primary.normal};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    height: auto;
  }
`

export const Tag = styled.div`
  width: auto;
  display: flex;


  h3 {
    background: ${({theme}) => theme.colors.primary.light};
    color: ${({theme}) => theme.colors.primary.normal};
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0 0 0 20px;
    margin: 0 10px;
    font-size: .9em;
    font-weight: 700;
  }

  .closeButton {
    background-color: ${({theme}) => theme.colors.primary.normal};
    width: auto;
    border: none;
    border-radius: 0px 3px 3px 0px;
    padding: 10px;
    margin-left: 10px;
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

  @media only screen and (max-width: 600px) {
    display: flex;
    width: 80%;
    flex-wrap: wrap;

    h3 {
      margin: 10px;
    }
  }
`