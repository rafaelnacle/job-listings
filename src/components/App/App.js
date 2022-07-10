import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global'
import defaultTheme from '../../assets/styles/themes/default'
import Header from '../Header';
import JobCard from '../JobCard';
import JobFilterCard from '../JobFilterCard';
import { Container } from './styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles/>
      <Container>
        <Header />
        <JobFilterCard/>
        <JobCard/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
{/* <div class="attribution">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
  Coded by <a href="https://www.linkedin.com/in/rafael-nacle/">Rafael Nacle</a>.
</div> */}