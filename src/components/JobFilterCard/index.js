import { Card, Container, Tag } from "./styles";

import IconRemove from '../../assets/images/icon-remove.svg'

export default function JobFilterCard({tagText}) {
  return(
    <Container>
      <Card>
        <Tag>
          <p>{tagText}</p>
          <button className="closeButton"><img src={IconRemove} alt="Remove Icon"/></button>
        </Tag>
        <Tag>
          <p>Ruby</p>
          <button className="closeButton"><img src={IconRemove} alt="Remove Icon"/></button>
        </Tag>
        <Tag>
          <p>CSS</p>
          <button className="closeButton"><img src={IconRemove} alt="Remove Icon"/></button>
        </Tag>

        <p className="closeCard">Close</p>
      </Card>
    </Container>
  )
}