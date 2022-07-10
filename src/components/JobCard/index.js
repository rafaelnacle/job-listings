import { Card, Container, JobInfo, SkillsTags, Tags} from "./styles";

import jobData from "../../data/dataJobs"
import { useState } from "react";
import JobFilterCard from "../JobFilterCard";
export default function JobCard() {
  
  const [filterTag, setFilterTag] = useState([]);

  const handleTagsFilter = (e) => {

    const tag = e.target.innerHTML

    setFilterTag(tag)

    // console.log(setFilterTag);
  }

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
              <p onClick={handleTagsFilter}>{data.role}</p>
              <p onClick={handleTagsFilter}>{data.level}</p>
              {data.tools != 0 && data.tools.map((tool) => {
                return (
                  <p onClick={handleTagsFilter}>{tool}</p>
                )
              })}
              {data.languages.map((lang) => {
                return (
                  <p onClick={handleTagsFilter}>{lang}</p>
                )
              })}
            </SkillsTags>
          </Card>)
        })}
    </Container>
  )
}