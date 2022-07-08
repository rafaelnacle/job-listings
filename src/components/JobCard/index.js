import { Card, Container, JobInfo} from "./styles";

import jobData from "../../data/dataJobs"

export default function JobCard(props) {
  return (
    <Container>
        {jobData.map((data) => {
          return (
          <Card key={data.id}>
            <img src={data.logo} alt="Logo" />
            <JobInfo/>
          </Card>)
        })}
    </Container>
  )
}