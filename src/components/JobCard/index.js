import { Card, Container, JobInfo, SkillsTags, Tags} from "./styles";

import jobData from "../../data/dataJobs"
export default function JobCard() {
  return (
    <Container>
        {jobData.map((data) => {
          return (
          <Card key={data.id}>
            <img src={data.logo} alt="Logo" />
            <JobInfo>
              <div className="companyAndTags">
                <h3>{data.company}</h3>  
                {data.new > 0 && 
                  <Tags new>
                    {data.new && <p>NEW!</p>}
                  </Tags>
                }
                {data.featured > 0 &&
                <Tags>
                  {data.featured && <p>FEATURED</p>}
                </Tags>
                }    
              </div>
              <h2>{data.position}</h2>
              <p>{data.postedAt} • {data.contract} • {data.location}</p>
            </JobInfo>
            <SkillsTags>
              <p>{data.role}</p>
              <p>{data.level}</p>
              {data.tools != 0 && data.tools.map((tool) => {
                return (
                  <p>{tool}</p>
                )
              })}
              {data.languages.map((lang) => {
                return (
                  <p>{lang}</p>
                )
              })}
            </SkillsTags>
          </Card>)
        })}
    </Container>
  )
}