import React from 'react';
import { HiOutlineSparkles } from "react-icons/hi2";

const FooterSection = () => {
  return (
    <footer className="bg-base border-t border-accent/5 py-20 px-6 mt-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
        <div className="max-w-sm space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white">
                <HiOutlineSparkles size={18} />
             </div>
             <span className="font-heading font-bold text-xl tracking-tighter text-accent">Antigravity AI</span>
          </div>
          <p className="text-accent/40 font-body leading-relaxed text-sm">
            Curating the world's most intelligent and elegant travel experiences. Design-led, AI-first, human-centered.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
          <div className="space-y-6">
            <h4 className="text-xs font-heading font-bold text-accent uppercase tracking-widest">Platform</h4>
            <ul className="space-y-4 text-sm font-body text-accent/50">
              <li className="hover:text-ai-glow cursor-pointer transition-colors">Experience</li>
              <li className="hover:text-ai-glow cursor-pointer transition-colors">Intelligence</li>
              <li className="hover:text-ai-glow cursor-pointer transition-colors">Curated Stays</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-heading font-bold text-accent uppercase tracking-widest">Connect</h4>
            <ul className="space-y-4 text-sm font-body text-accent/50">
              <li className="hover:text-ai-glow cursor-pointer transition-colors">Instagram</li>
              <li className="hover:text-ai-glow cursor-pointer transition-colors">Journal</li>
              <li className="hover:text-ai-glow cursor-pointer transition-colors">Support</li>
            </ul>
          </div>
          <div className="space-y-6 md:col-span-1">
             <h4 className="text-xs font-heading font-bold text-accent uppercase tracking-widest">Join the Circle</h4>
             <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-accent/5 border-none rounded-xl px-4 py-2 text-sm focus:ring-1 focus:ring-ai-glow outline-none w-full"
                />
             </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-accent/5 flex justify-between items-center text-[10px] uppercase font-heading font-bold text-accent/20 tracking-[0.3em]">
         <span>&copy; {new Date().getFullYear()} Antigravity Studio</span>
         <span>Privacy & Terms</span>
      </div>
    </footer>
  );
};

export default FooterSection;

