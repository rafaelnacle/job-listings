import { Container } from "./styles";

import headerBackground from '../../assets/images/bg-header-desktop.svg';
import JobFilterCard from "../JobFilterCard";

export default function Header() {
  return (
    <Container>
      <img src={headerBackground} alt="Background"/>
      
    </Container>
  )
}