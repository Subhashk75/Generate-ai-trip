import React from 'react';

const AISkeleton = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-12 py-20 animate-pulse">
      <div className="space-y-4">
        <div className="h-12 bg-accent/5 rounded-2xl w-2/3 mx-auto" />
        <div className="h-6 bg-accent/5 rounded-xl w-1/3 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map(i => (
          <div key={i} className="glass h-[400px] rounded-[2rem] border border-white/40" />
        ))}
      </div>

      <div className="space-y-8 glass p-12 rounded-[3rem] border border-white/40">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="flex gap-8">
            <div className="w-16 h-16 rounded-full bg-accent/5 shrink-0" />
            <div className="space-y-4 w-full">
              <div className="h-6 bg-accent/5 rounded-lg w-1/4" />
              <div className="h-20 bg-accent/5 rounded-2xl w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AISkeleton;
