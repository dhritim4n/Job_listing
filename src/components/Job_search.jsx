import { Search } from "lucide-react";
import { useContext } from "react";
import Job_context from "../context/Jobs_context";

export default function Job_search() {
    const {
        job_search_query,
        setJob_search_query,
        allJobs,
        jobs_list,
        setJobs_list
    } = useContext(Job_context);

    const handle_job_search = () => {
        if (job_search_query === "") {
            setJobs_list(allJobs);
        }
        else {
            const searched_jobs = allJobs.filter(
                job => {
                    return job.title.toLowerCase().includes(job_search_query.toLowerCase()) ||
                        job.company.toLowerCase().includes(job_search_query.toLowerCase()) ||
                        job.location.toLowerCase().includes(job_search_query.toLowerCase()) ||
                        job.category.toLowerCase().includes(job_search_query.toLowerCase()) ||
                        job.experience.toLowerCase().includes(job_search_query.toLowerCase()) || 
                        job.time.toLowerCase().includes(job_search_query.toLowerCase())
                }
            )
            setJobs_list(searched_jobs)
        }
    }


    return (
        <div className="w-full max-w-4xl bg-(--color-bg)/80 backdrop-blur-xl border border-(--color-fg)/10 rounded-2xl shadow-xl p-6">

            <div className="flex flex-col md:flex-row items-stretch gap-4">


                <div className="flex items-center gap-3 flex-1 border border-(--color-fg)/20 rounded-lg px-4 py-3 focus-within:border-(--color-accent) bg-(--color-bg)">
                    <Search className="text-(--color-accent)" size={20} />
                    <input
                        type="text"
                        placeholder="Job title, keyword..."
                        className="bg-transparent outline-none w-full text-(--color-fg) placeholder:text-(--color-fg)/50"
                        value={job_search_query}
                        onChange={e => setJob_search_query(e.target.value)}
                        onKeyDown={ e => e.key === "Enter" && handle_job_search() }
                    />
                </div>


                <button
                    onClick={() => handle_job_search()}
                    className="bg-(--color-accent) hover:bg-(--color-accent)/80 transition-all text-(--color-bg) px-8 py-3 rounded-lg font-bold shadow-md active:scale-95">
                    Find Job
                </button>

            </div>

            <p className="text-sm text-(--color-fg)/60 mt-4 text-left">
                Suggestion:
                <span className="text-(--color-accent) cursor-pointer ml-1 hover:underline">UI/UX Designer</span>,
                <span className="hover:text-(--color-accent) cursor-pointer transition-colors"> Developer</span>,
                <span className="hover:text-(--color-accent) cursor-pointer transition-colors"> Product Manager</span>
            </p>
        </div>
    );
}