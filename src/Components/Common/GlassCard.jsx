import React from 'react';

const GlassCard = ({ children, className = "" }) => {
  return (
    <div className={`glass shadow-premium rounded-3xl p-8 border border-white/20 ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
