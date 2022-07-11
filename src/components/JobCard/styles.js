import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 50px !important;
  position: relative;

  @media only screen and (max-width: 600px) {
    margin: 25px;
    display: flex;
  }

`

export const Card = styled.div`
  height: 130px;
  width: 100%;
  border-radius: 5px;
  background: ${({theme}) => theme.colors.primary.main};
  box-shadow: 1px 3px 8px 2px rgba(0,0,0,0.2);
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

  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    padding: 40px 15px 0 15px;
    flex-direction: column;
    position: relative;

    img {
      position: absolute;
      top: -30px;
      left: 20px;
    }
  }
`

export const Tags = styled.div`
  background: ${props => props.isNew ? 'hsl(180, 29%, 50%)' : 'hsl(180, 14%, 20%)'};
  border-radius: 20px;
  width: auto;
  padding: 5px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #ffffff !important;
    font-size: 15px;
  }


`

export const JobInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 20px;
  h3 {
    color: ${({theme}) => theme.colors.primary.normal};
  }

  h2 {
    cursor: pointer;

    &:hover {
      color: ${({theme}) => theme.colors.primary.normal};
    }
  }

  p {
    color: ${({theme}) => theme.colors.primary.dark};
  }

  .companyAndTags {
    display: flex;
    gap: 15px;
    align-items: center;

  }

  @media only screen and (max-width: 600px) {
    display: flex;
    order: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin: 0;

    .companyAndTags {
      /* margin-top: -30px; */
      margin-bottom: 10px;
    }

    h3 {
      font-size: 16px;
    }

    h2 {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }

`

export const SkillsTags = styled.div`
  display: flex;
  margin: 0 auto;
  margin-right: 50px;

  button {
    display: flex;
    justify-content: space-between;
    background-color: ${({theme}) => theme.colors.primary.light};
    width: 80px;
    height: 30px;
    border-radius: 5px;
    border: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    color: ${({theme}) => theme.colors.primary.normal};

    &:hover {
      color: ${({theme}) => theme.colors.primary.light};
      background-color: ${({theme}) => theme.colors.primary.normal};
      
    }
    & {
      margin-left: 10px;
    }
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    margin: 20px 0;
    /* padding: 10px; */
    gap: 5px;
    width: 100%;
    flex-wrap: wrap;
    order: 2;
  }
`;