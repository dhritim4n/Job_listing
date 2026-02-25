import { Filter, ChevronDown, ChevronUp } from "lucide-react";
import { useContext, useState } from "react";
import Job_context from "../context/Jobs_context";

export default function JobFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const { Job_filters, setjob_filters, setJobs_list, allJobs } = useContext(Job_context);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setjob_filters((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setjob_filters({
      location: "",
      category: "",
      workMode: "",
      experience: "",
    });
    setJobs_list(allJobs);
  };

  const filter_jobs = () => {
      const filteredJobs = allJobs.filter((job) => {
      const matchesLocation = 
        Job_filters.location === "" || 
        job.location.toLowerCase().includes(Job_filters.location.toLowerCase());

      const matchesCategory = 
        Job_filters.category === "" || 
        job.category === Job_filters.category;

      const matchesWorkMode = 
        Job_filters.workMode === "" || 
        job.time.toLowerCase() === Job_filters.workMode.toLowerCase();

      const matchesExperience = 
        Job_filters.experience === "" || 
        job.experience.toLowerCase() === Job_filters.experience.toLowerCase();

      return matchesLocation && matchesCategory && matchesWorkMode && matchesExperience;
    });

    setJobs_list(filteredJobs);
  }

  const cities = ["Delhi", "Bangalore", "Kolkata", "Pune"];

  return (
    <div className="w-full md:w-72 bg-(--color-bg)/80 backdrop-blur-xl border border-(--color-fg)/10 rounded-2xl shadow-xl p-4 md:p-6 text-(--color-fg)">
      <div 
        className="flex items-center justify-between cursor-pointer md:cursor-default"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <Filter className="text-(--color-accent)" size={20} />
          <h2 className="font-semibold text-lg text-(--color-fg)">Filters</h2>
        </div>
        <div className="md:hidden text-(--color-fg)">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </div>

      <div className={`flex flex-col gap-5 mt-6 ${isOpen ? "block" : "hidden"} md:flex`}>
        
        <div>
          <label className="text-sm text-(--color-fg)/70 mb-2 block font-medium">Location</label>
          <div className="border border-(--color-fg)/20 rounded-lg px-4 py-3 focus-within:border-(--color-accent) bg-(--color-bg)">
            <select
              name="location"
              value={Job_filters.location}
              onChange={handleChange}
              className="bg-transparent outline-none w-full text-sm text-(--color-fg) appearance-none"
            >
              <option value="" className="bg-(--color-bg)">All Cities</option>
              {cities.map((city) => (
                <option key={city} value={city} className="bg-(--color-bg)">{city}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm text-(--color-fg)/70 mb-2 block font-medium">Category</label>
          <div className="border border-(--color-fg)/20 rounded-lg px-4 py-3 focus-within:border-(--color-accent) bg-(--color-bg)">
            <select
              name="category"
              value={Job_filters.category}
              onChange={handleChange}
              className="bg-transparent outline-none w-full text-sm text-(--color-fg) appearance-none"
            >
              <option value="" className="bg-(--color-bg)">All Categories</option>
              <option value="IT" className="bg-(--color-bg)">IT</option>
              <option value="Design" className="bg-(--color-bg)">Design</option>
              <option value="Marketing" className="bg-(--color-bg)">Marketing</option>
              <option value="Finance" className="bg-(--color-bg)">Finance</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm text-(--color-fg)/70 mb-2 block font-medium">Work Mode</label>
          <div className="border border-(--color-fg)/20 rounded-lg px-4 py-3 focus-within:border-(--color-accent) bg-(--color-bg)">
            <select
              name="workMode"
              value={Job_filters.workMode}
              onChange={handleChange}
              className="bg-transparent outline-none w-full text-sm text-(--color-fg) appearance-none"
            >
              <option value="" className="bg-(--color-bg)">Select Mode</option>
              <option value="Full Time" className="bg-(--color-bg)">Full Time</option>
              <option value="Part Time" className="bg-(--color-bg)">Part Time</option>
              <option value="Office" className="bg-(--color-bg)">Office</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm text-(--color-fg)/70 mb-2 block font-medium">Experience</label>
          <div className="border border-(--color-fg)/20 rounded-lg px-4 py-3 focus-within:border-(--color-accent) bg-(--color-bg)">
            <select
              name="experience"
              value={Job_filters.experience}
              onChange={handleChange}
              className="bg-transparent outline-none w-full text-sm text-(--color-fg) appearance-none"
            >
              <option value="" className="bg-(--color-bg)">Experience Level</option>
              <option value="fresher" className="bg-(--color-bg)">Fresher</option>
              <option value="mid-level" className="bg-(--color-bg)">Mid-level</option>
              <option value="senior" className="bg-(--color-bg)">Senior</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-4">
          <button
            onClick={() => filter_jobs()}
            className="bg-(--color-accent) text-(--color-bg) hover:bg-(--color-accent)/80 transition-colors px-4 py-2 rounded-lg font-semibold text-sm shadow-sm active:scale-95"
          >
            Apply Filters
          </button>
          <button
            onClick={handleReset}
            className="bg-(--color-bg) text-(--color-accent) border border-(--color-accent) hover:bg-(--color-accent) hover:text-(--color-bg) transition-colors px-4 py-2 rounded-lg font-semibold text-sm shadow-sm active:scale-95"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
}