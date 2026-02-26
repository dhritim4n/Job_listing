import { Link } from "react-router-dom";

export default function About_pg() {
  return (
    <section className="bg-(--color-bg) text-(--color-fg)">
      
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-(--color-accent)">JobPortal</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Connecting talented professionals with top employers. 
          We make job searching simple, fast, and efficient.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to bridge the gap between job seekers and companies.
            We provide a seamless platform where talent meets opportunity.
            Whether you're a fresher or an experienced professional,
            we help you find the right fit.
          </p>
        </div>

        <div className="bg-(--color-accent)/10 p-10 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-3 text-(--color-accent)">
            Why Choose Us?
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li>✔ Easy job search & filtering</li>
            <li>✔ Trusted employers</li>
            <li>✔ Quick application process</li>
            <li>✔ Remote & on-site opportunities</li>
          </ul>
        </div>

      </div>

      <div className="bg-(--color-fg)/10 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div>
            <h3 className="text-3xl font-bold text-(--color-accent)">500+</h3>
            <p className="text-(--color-fg)/70">Active Jobs</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-(--color-success)">200+</h3>
            <p className="text-(--color-fg)/70">Companies</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-(--color-accent)">10K+</h3>
            <p className="text-(--color-fg)/70">Job Seekers</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-(--color-success)">95%</h3>
            <p className="text-(--color-fg)/70">Success Rate</p>
          </div>

        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Ready to Find Your Dream Job?
        </h2>
        <Link to="/jobs" className="bg-(--color-accent) hover:opacity-90 text-(--color-bg) px-8 py-3 rounded-xl font-medium transition">
          Explore Jobs
        </Link>
      </div>

    </section>
  );
}