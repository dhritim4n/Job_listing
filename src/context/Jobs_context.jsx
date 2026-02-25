import { createContext, useState, useEffect } from "react";
import jobs from "../data/jobs";

const Job_context = createContext();

export function Job_context_provider({ children }) {
  const [allJobs] = useState(jobs);
  const [jobs_list, setJobs_list] = useState(jobs);
  const [job_search_query, setJob_search_query] = useState("")
  const [Job_filters, setjob_filters] = useState({
    location: "",
    category: "",
    workMode: "",
    experience: "",
  });
  const [selected_job, setSelected_job] = useState({})
  const [job_modal_open, setJob_modal_open] = useState(false)
  




  const value = {
    allJobs,
    Job_filters,
    setjob_filters,
    jobs_list,
    setJobs_list,
    job_search_query,
    setJob_search_query,
    selected_job, 
    setSelected_job,
    job_modal_open,
    setJob_modal_open
  };

  return (
    <Job_context.Provider value={value}>
      {children}
    </Job_context.Provider>
  );
}

export default Job_context;