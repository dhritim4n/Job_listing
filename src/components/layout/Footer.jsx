import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-(--color-bg) text-(--color-fg) border-t border-(--color-fg)/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              Job<span className="text-(--color-accent)">Portal</span>
            </h2>
            <p className="text-sm leading-relaxed text-(--color-fg)/70">
              Connecting the world's best talent with the most innovative companies. Your next career move starts here.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-6 uppercase text-xs tracking-widest text-(--color-fg)">
              Navigation
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-(--color-accent) transition-colors">Find Jobs</a></li>
              <li><a href="#" className="hover:text-(--color-accent) transition-colors">Browse Companies</a></li>
              <li><a href="#" className="hover:text-(--color-accent) transition-colors">Career Advice</a></li>
              <li><a href="#" className="hover:text-(--color-accent) transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 uppercase text-xs tracking-widest text-(--color-fg)">
              Support
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-(--color-accent) transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-(--color-accent) transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-(--color-accent) transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-(--color-accent) transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 uppercase text-xs tracking-widest text-(--color-fg)">
              Stay Updated
            </h3>
            <p className="text-sm mb-4 text-(--color-fg)/70">
              Get the latest job alerts in your inbox.
            </p>
            <div className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="bg-(--color-bg) border border-(--color-fg)/20 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-(--color-accent) outline-none transition-all"
              />
              <button className="bg-(--color-accent) text-(--color-bg) text-sm font-bold py-2 rounded-lg hover:brightness-110 transition-all">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-(--color-fg)/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-(--color-fg)/60">
            © {currentYear} JobPortal Inc. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-(--color-fg)/60 hover:text-(--color-accent) transition-colors">LinkedIn</a>
            <a href="#" className="text-sm text-(--color-fg)/60 hover:text-(--color-accent) transition-colors">Twitter</a>
            <a href="#" className="text-sm text-(--color-fg)/60 hover:text-(--color-accent) transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;