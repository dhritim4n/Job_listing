import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import JobCard from "./Job_card";
import jobs from "../data/jobs";
import Job_details_modal from "./Job_details_modal";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
export default function Featured_jobs() {
    return (
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col justify-center items-center py-10">
            <h2 className="cursor-pointer text-4xl font-bold px-2 py-6 text-[--color-fg]">
                Featured <span className="text-[--color-accent]">Jobs</span>
            </h2>

            <Carousel 
                responsive={responsive} 
                infinite={true} 
                autoPlay={true}
                itemClass="px-3 py-4"
                containerClass="w-full"
            >
                {jobs.map((job) => (
                    <div key={job.id} className="flex justify-center">
                        <JobCard job={job} />
                    </div>
                ))}
            </Carousel>
            
            <Job_details_modal/>
        </div>
    )
}