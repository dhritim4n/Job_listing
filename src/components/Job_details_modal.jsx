import { useContext } from "react";
import Job_context from "../context/Jobs_context";
import { 
  X, MapPin, Briefcase, Users, 
  Clock, IndianRupee, GraduationCap, Building2 
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Job_details_modal() {
    const {
        selected_job,
        job_modal_open,
        setJob_modal_open,
    } = useContext(Job_context);

    if (typeof window !== "undefined") {
        document.body.style.overflow = job_modal_open ? "hidden" : "auto";
    }

    if (!job_modal_open || !selected_job) return null;

    return (
        <div
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-(--color-fg)/20 backdrop-blur-md animate-fadeIn"
            onClick={() => setJob_modal_open(false)}
        >
            <div
                className="bg-(--color-bg) w-full max-w-2xl max-h-[90vh] overflow-y-scroll rounded-3xl shadow-2xl border border-(--color-fg)/10 relative animate-slideUp"
                onClick={(e) => e.stopPropagation()} 
            >
                <div className="h-20  w-full relative">
                    <button 
                        onClick={() => setJob_modal_open(false)}
                        className="absolute top-4 right-4 p-2 bg-(--color-bg) rounded-full text-(--color-fg) hover:scale-110 transition-transform shadow-md"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="px-6 pb-8 -mt-12">
                    <div className="bg-(--color-bg) w-24 h-24 rounded-2xl p-3 shadow-lg border border-(--color-fg)/5 mb-4">
                        <img 
                            src={selected_job.company_logo} 
                            alt={selected_job.company} 
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className="mb-6">
                        <h2 className="text-3xl font-extrabold text-(--color-fg) mb-1">
                            {selected_job.title}
                        </h2>
                        <div className="flex flex-wrap items-center gap-4 text-(--color-fg)/70">
                            <span className="flex items-center gap-1 font-semibold text-(--color-accent)">
                                <Building2 size={18} /> {selected_job.company}
                            </span>
                            <span className="flex items-center gap-1">
                                <MapPin size={18} /> {selected_job.location}
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                        <div className="p-3 rounded-2xl bg-(--color-fg)/5 border border-(--color-fg)/5">
                            <p className="text-[10px] uppercase font-bold text-(--color-fg)/40 mb-1">Experience</p>
                            <p className="text-sm font-bold flex items-center gap-1"><GraduationCap size={16} /> {selected_job.experience}</p>
                        </div>
                        <div className="p-3 rounded-2xl bg-(--color-fg)/5 border border-(--color-fg)/5">
                            <p className="text-[10px] uppercase font-bold text-(--color-fg)/40 mb-1">Work Mode</p>
                            <p className="text-sm font-bold flex items-center gap-1"><Clock size={16} /> {selected_job.time}</p>
                        </div>
                        <div className="p-3 rounded-2xl bg-(--color-success)/10 border border-(--color-success)/20">
                            <p className="text-[10px] uppercase font-bold text-(--color-success) mb-1">Vacancies</p>
                            <p className="text-sm font-bold flex items-center gap-1 text-(--color-success)"><Users size={16} /> {selected_job.vacancies}</p>
                        </div>
                        <div className="p-3 rounded-2xl bg-(--color-accent)/10 border border-(--color-accent)/20">
                            <p className="text-[10px] uppercase font-bold text-(--color-accent) mb-1">Salary</p>
                            <p className="text-sm font-bold flex items-center gap-0.5 text-(--color-accent)">
                                <IndianRupee size={14} />{selected_job.salary_min/1000}k-{selected_job.salary_max/1000}k
                            </p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h4 className="text-lg font-bold text-(--color-fg) mb-3 flex items-center gap-2">
                            <Briefcase size={20} className="text-(--color-accent)" /> Job Description
                        </h4>
                        <p className="text-(--color-fg)/80 leading-relaxed bg-(--color-fg)/5 p-4 rounded-2xl border border-(--color-fg)/5">
                            {selected_job.description}
                        </p>
                    </div>

                    <div className="flex gap-4">
                        
                        <button className="flex-1 bg-(--color-accent) hover:bg-(--color-accent)/90 text-(--color-bg) py-4 rounded-2xl font-bold transition-all active:scale-95 shadow-lg shadow-(--color-accent)/30">
                            <Link to ="/">
                            Apply for this Position
                            </Link>
                        </button>
                        
                        <button 
                            onClick={() => setJob_modal_open(false)}
                            className="px-6 py-4 rounded-2xl font-bold border-2 border-(--color-fg)/10 text-(--color-fg)/60 hover:bg-(--color-fg)/5 transition-all"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}