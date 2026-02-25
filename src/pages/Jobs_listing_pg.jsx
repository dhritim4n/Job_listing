import { useContext } from "react"
import Job_filter from "../components/Job_filter"
import Job_search from "../components/Job_search"
import Job_context from "../context/Jobs_context"
import JobCard from "../components/Job_card"
import Job_details_modal from "../components/Job_details_modal"

export default function Jobs_listing_pg() {
    const { jobs_list, setJobs_list, filters, setFilters } = useContext(Job_context)

    return (
        <section className="max-w-7xl bg-(--color-bg) mx-auto flex flex-col md:flex-row items-start gap-6 p-4 md:p-8">
            
            <aside className="w-full md:w-72 md:sticky md:top-8">
                <Job_filter />
            </aside>

            <main className="flex-1 w-full flex flex-col gap-6">
                
                <div className="w-full">
                    <Job_search />
                </div>

                <div className="flex flex-col justify-between md:flex-row md:flex-wrap md:shrink gap-4">
                    {jobs_list && jobs_list.length > 0 ? (
                        jobs_list.map((job) => (
                            <JobCard key={job.id || job.title} job={job} />
                        ))
                    ) : (
                        <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                            <p className="text-gray-500 font-medium">No jobs found matching your criteria.</p>
                        </div>
                    )}
                </div>
                
            </main>
            <Job_details_modal/>
        </section>
    )
}