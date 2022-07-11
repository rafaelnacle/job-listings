import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/global'
import defaultTheme from '../../assets/styles/themes/default'
import Filter from '../Filter';
import Header from '../Header';
import JobCard from '../JobCard';
import { Attribution, Container } from './styles';
import jobData from "../../data/dataJobs"

function App() {
  const [filters, setFilters] = useState([])

  function handleFilter(tag) {
    if(filters.indexOf(tag) === -1) {
      setFilters(prevValue => [...prevValue, tag])
    }
  }

  function clearAll() {
    setFilters([])
  }

  function clearFilter(tag) {
    setFilters(filters.filter(item => item !== tag))
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles/>
        <Header />
        {filters.length > 0 && <Filter
          filters={filters}
          clearAll={clearAll}
          clearFilter={clearFilter}
        />}
        <Container>
          {jobData.map((jobs) => {

            let jobTags = [jobs.role, jobs.level, ...(jobs.languages) || [], ...(jobs.tools) || []]

            let filterJobs = (jobTags, filters) => {
              filters.every((tag) => jobTags.includes(tag))
            }

            return filters.length >= 0
            ? (
              <JobCard
                key={jobs.id}
                logo={jobs.logo}
                company={jobs.company}
                isNew={jobs.new}
                isFeatured={jobs.featured}
                position={jobs.position}
                postedAt={jobs.postedAt}
                contract={jobs.contract}
                location={jobs.location}
                handleFilter={handleFilter}
                jobTags={jobTags}
              />
            )
            : (filterJobs(jobTags, filters) && (
              <JobCard
              key={jobs.id}
              logo={jobs.logo}
              company={jobs.company}
              isNew={jobs.new}
              isFeatured={jobs.featured}
              position={jobs.position}
              postedAt={jobs.postedAt}
              contract={jobs.contract}
              location={jobs.location}
              handleFilter={handleFilter}
              jobTags={jobTags}
              />
            ))
          })}
      </Container>
      <Attribution>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://www.linkedin.com/in/rafael-nacle/">Rafael Nacle</a>.
      </Attribution>

    </ThemeProvider>
  );
}

export default App;
