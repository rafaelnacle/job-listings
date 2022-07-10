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
`

export const Tags = styled.div`
  background: ${props => props.new ? 'hsl(180, 29%, 50%)' : 'hsl(180, 14%, 20%)'};
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

  .companyAndTags {
    display: flex;
    gap: 15px;
    align-items: center;
  }

  p {
    color: ${({theme}) => theme.colors.primary.dark};
  }
  
`

export const SkillsTags = styled.div`
  display: flex;
  margin: 0 auto;
  margin-right: 50px;


  p {
    display: flex;
    justify-content: space-between;
    background-color: ${({theme}) => theme.colors.primary.light};
    width: 80px;
    height: 30px;
    border-radius: 5px;
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
`;