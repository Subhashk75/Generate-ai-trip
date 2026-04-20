import React, { useState } from 'react';
import { HiOutlineArrowRight, HiOutlineSparkles } from "react-icons/hi2";

const SUGGESTIONS = [
  "Plan a 5-day budget trip to Goa for friends",
  "Romance in Paris for 3 days with luxury dining",
  "Family adventure in Kyoto, 7 days of culture",
  "Solo backpacking through Patagonia for 2 weeks"
];

const AIInput = ({ onGenerate, loading }) => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim()) {
      onGenerate(prompt);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <form onSubmit={handleSubmit} className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-ai-glow/20 to-purple-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative glass shadow-premium rounded-[2.5rem] p-4 flex items-center gap-4 border border-white/40">
          <div className="pl-6 text-ai-glow">
            <HiOutlineSparkles size={32} className={loading ? "animate-pulse" : ""} />
          </div>
          
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Where should we explore next?"
            className="flex-1 bg-transparent border-none outline-none text-2xl font-heading placeholder:text-accent/20 py-4"
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading || !prompt.trim()}
            className={`mr-2 p-5 rounded-full transition-all ${
              prompt.trim() 
                ? "bg-accent text-white shadow-premium hover:scale-105 active:scale-95" 
                : "bg-accent/5 text-accent/20 cursor-not-allowed"
            }`}
          >
            {loading ? (
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <HiOutlineArrowRight size={24} />
            )}
          </button>
        </div>
      </form>

      <div className="flex flex-wrap justify-center gap-3">
        {SUGGESTIONS.map((suggestion, idx) => (
          <button
            key={idx}
            onClick={() => setPrompt(suggestion)}
            className="px-6 py-3 rounded-full glass border border-accent/5 text-sm font-body text-accent/60 hover:border-ai-glow/30 hover:text-ai-glow transition-all hover:scale-105"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AIInput;
