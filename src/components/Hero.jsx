import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center px-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1920&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-(--color-bg)/60 backdrop-blur-[2px]"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center gap-10 animate-fadeIn">

        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-(--color-fg) leading-tight tracking-tight">
            Find Your{" "}
            <span className="text-(--color-accent) drop-shadow-sm">
              Dream Job
            </span>
          </h1>

          <p className="text-(--color-fg)/80 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
            Thousands of jobs in all the leading sectors are waiting for you.
            <br className="hidden md:block" /> Start your journey today and build the career you deserve.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <Link
            to="/jobs"
            className="bg-(--color-accent) hover:bg-(--color-accent)/80 transition-all duration-300 text-(--color-bg) px-10 py-4 rounded-xl font-bold shadow-xl hover:shadow-(--color-accent)/40 hover:-translate-y-1"
          >
            Find Jobs
          </Link>

          <Link
            to="/contact"
            className="bg-(--color-bg)/40 border-2 border-(--color-accent) text-(--color-accent) hover:bg-(--color-accent) hover:text-(--color-bg) transition-all duration-300 px-10 py-4 rounded-xl font-bold backdrop-blur-md"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}