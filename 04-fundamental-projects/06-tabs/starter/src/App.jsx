import { useEffect } from "react";
import { useState } from "react";
import JobInfo from "./JobInfo";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  };
  console.log(jobs);

  useEffect(() => {
fetchJobs();
  }, []);
  
  if(isLoading){
    return <section className="jobs-center">
      <div className="loading"></div>
      
    </section>
  }


  return (
    <section className="jobs-center">
     <JobInfo jobs={jobs}/>
    </section>
  );
};
export default App;
