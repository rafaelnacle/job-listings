import { Card, Container, Tag} from "./styles";
import IconRemove from '../../assets/images/icon-remove.svg'

export default function Filter({filters, clearFilter, clearAll}) {
  return(
    <Container>
      <Card>
        <Tag>
          {filters.map((tag, index) => 
            <h3 key={index}>{tag}
              <button onClick={() => {clearFilter(tag)}} type="button" className="closeButton"><img src={IconRemove} alt="Remove Icon"/></button>
            </h3>
          )}
        </Tag>
        <p className="closeCard" onClick={() => {clearAll()}}>Clear</p>
      </Card>
    </Container>
  )
}