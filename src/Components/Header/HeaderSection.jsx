import React, { useEffect, useState } from "react";
import { Popover, MenuItem, ListItemIcon, Typography } from "@mui/material";
import { Logout, AccountCircle, History } from "@mui/icons-material";
import { useNavigate, Link } from "react-router-dom";
import { HiOutlineUserCircle, HiOutlineSparkles } from "react-icons/hi2";

const HeaderSection = () => {
  const userString = localStorage.getItem("formData");
  const user = userString ? JSON.parse(userString) : null;
  const lastTripId = localStorage.getItem("lastTripId");
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("formData");
    localStorage.removeItem("lastTripId");
    navigate("/login");
    handleClose();
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100] px-6 py-4">
      <nav className="max-w-7xl mx-auto glass rounded-full px-8 py-4 flex justify-between items-center border border-white/20 shadow-premium backdrop-blur-xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white shadow-premium">
            <HiOutlineSparkles size={24} />
          </div>
          <span className="font-heading font-bold text-2xl tracking-tighter text-accent">Antigravity AI</span>
        </Link>

        {/* User Section */}
        {user ? (
          <div className="flex items-center gap-8">
            <Link 
              to="/create-trip" 
              className="text-sm font-heading font-semibold text-accent/60 hover:text-ai-glow transition-colors"
            >
              Curate New
            </Link>
            
            {lastTripId && (
               <Link 
                to={`/view-trip/${lastTripId}`} 
                className="text-sm font-heading font-semibold text-accent/60 hover:text-ai-glow transition-colors"
              >
                Recent Trip
              </Link>
            )}

            <button
               onClick={handleProfileClick}
               className="flex items-center gap-3 pl-6 border-l border-accent/10 group text-left"
            >
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-accent/30 uppercase tracking-widest">Explorer</span>
                <span className="text-sm font-heading font-bold text-accent group-hover:text-ai-glow transition-colors">
                  {user.email.split('@')[0]}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center text-accent/40 group-hover:bg-ai-glow group-hover:text-white transition-all">
                <HiOutlineUserCircle size={24} />
              </div>
            </button>

            <Popover
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              PaperProps={{
                className: "mt-4 glass rounded-3xl border border-white/20 shadow-premium overflow-hidden min-w-[200px]"
              }}
            >
              <div className="p-2">
                <MenuItem onClick={() => { navigate("/profile"); handleClose(); }} className="rounded-2xl py-3 gap-3">
                  <ListItemIcon className="min-w-0 text-accent/40">
                    <History fontSize="small" />
                  </ListItemIcon>
                  <span className="font-heading font-semibold text-accent/70 text-sm">Trip History</span>
                </MenuItem>
                <MenuItem onClick={handleLogout} className="rounded-2xl py-3 gap-3 text-red-500">
                  <ListItemIcon className="min-w-0 text-red-400">
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  <span className="font-heading font-semibold text-sm">Sign Out</span>
                </MenuItem>
              </div>
            </Popover>
          </div>
        ) : (
          <div className="flex items-center gap-8">
             <Link to="/login" className="text-sm font-heading font-semibold text-accent/60 hover:text-accent transition-colors">
               Sign In
             </Link>
             <Link 
              to="/login" 
              className="bg-accent text-white px-8 py-3 rounded-full text-sm font-heading font-bold shadow-premium hover:scale-105 transition-all"
             >
               Get Started
             </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default HeaderSection;

