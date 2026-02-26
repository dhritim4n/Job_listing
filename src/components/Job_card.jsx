import { MapPin, Briefcase, Users } from "lucide-react";
import { useContext } from "react";
import Job_context from "../context/Jobs_context";

export default function JobCard({ job }) {
  const {
    title,
    time,
    experience,
    salary_min,
    salary_max,
    vacancies,
    company,
    location,
    company_logo,
  } = job;
  
  const {
    job_modal_open,
    setJob_modal_open,
    selected_job,
    setSelected_job,
  } = useContext(Job_context)

  return (
    <div className="bg-(--color-bg)/80 backdrop-blur-xl border border-(--color-fg)/10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 group flex flex-col h-full w-full  md:w-68 text-(--color-fg)">

      <div className="flex justify-between items-start mb-4">
        <div className="w-14 h-14 rounded-lg overflow-hidden border border-(--color-fg)/10 p-2 bg-white shrink-0">
          <img
            src={company_logo}
            alt={`${company} logo`}
            className="w-full h-full object-contain"
          />
        </div>
        <span className="px-3 py-1 rounded-full bg-(--color-accent)/10 text-(--color-accent) text-[10px] font-bold uppercase tracking-wider">
          {time}
        </span>
      </div>

      <div className="mb-4 grow">
        <h3 className="text-lg font-bold text-(--color-fg) group-hover:text-(--color-accent) transition-colors line-clamp-1">
          {title}
        </h3>
        <p className="text-sm text-(--color-fg)/70 font-medium flex items-center gap-1 mt-1">
          <Briefcase size={14} className="text-(--color-accent)" /> {company}
        </p>
        <p className="text-xs text-(--color-fg)/50 flex items-center gap-1 mt-1">
          <MapPin size={14} /> {location}
        </p>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-1 text-xs font-semibold text-(--color-fg)/80 bg-(--color-fg)/5 px-2 py-1 rounded-md">
          {experience}
        </div>
        <div className="flex items-center gap-1 text-xs font-semibold text-(--color-success) bg-(--color-success)/10 px-2 py-1 rounded-md">
          <Users size={12} /> {vacancies} Openings
        </div>
      </div>

      <div className="pt-4 border-t border-(--color-fg)/10">
        <div className="flex justify-between items-end mb-4">
          <div>
            <p className="text-[10px] text-(--color-fg)/50 uppercase font-bold">Monthly Salary</p>
            <p className="text-md font-bold text-(--color-fg)">
              ₹{salary_min.toLocaleString()} - {salary_max.toLocaleString()}
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            setSelected_job(job)
            setJob_modal_open(true)
          }}
          className="w-full bg-(--color-accent) hover:bg-(--color-accent)/80 text-(--color-bg) py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95 shadow-md shadow-(--color-accent)/20">
          View Details
        </button>
      </div>
    </div>
  );
}