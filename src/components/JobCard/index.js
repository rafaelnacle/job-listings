import { Card, Container, JobInfo, SkillsTags, Tags} from "./styles";

export default function JobCard({
  logo,
  company,
  isNew,
  isFeatured,
  position,
  postedAt, 
  contract, 
  location, 
  handleFilter, 
  jobTags
}) {
  
  return (
    <Container>
      <Card>
        <img src={logo} alt={company} />
        <JobInfo>
          <div className="companyAndTags">
            <h3>{company}</h3>  
            {isNew > 0 && 
              <Tags isNew>
                {isNew && <p>NEW!</p>}
              </Tags>
            }
            {isFeatured > 0 &&
              <Tags>
                {isFeatured && <p>FEATURED</p>}
              </Tags>
            }    
          </div>
          <h2>{position}</h2>
          <p>{postedAt} • {contract} • {location}</p>
        </JobInfo>
        <SkillsTags>
          {jobTags.map((tag, index) => {
            return <button onClick={() => handleFilter(tag)} key={index}>{tag}</button>
          })}
        </SkillsTags>
      </Card> 
    </Container>
  )
}