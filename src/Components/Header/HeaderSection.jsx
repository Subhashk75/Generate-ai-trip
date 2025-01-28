import React, { useEffect, useState } from "react";
import { Button, Popover, MenuItem, ListItemIcon, Typography } from "@mui/material";
import { Logout, AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/profile.jpeg";
import logo from "../../assets/logo.svg";

const HeaderSection = () => {
  const user = JSON.parse(localStorage.getItem("formData"));
  const lastTripId = JSON.parse(localStorage.getItem("lastTripId"));
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    console.log("User login header: ", user);
  }, [user]);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleViewProfile = () => {
    navigate("/profile");
    handleClose();
  };

  const handleLogout = () => {
    localStorage.removeItem("formData");
    localStorage.removeItem("lastTripId");
    navigate("/login");
    handleClose();
  };

  const onClickHandle = () => {
    console.log("my-trip click");
  
    // Check if both the user and lastTripId are valid
    if (user && lastTripId) {
      console.log("Navigate successfully with Last Trip ID:", lastTripId);
      navigate(`/view-trip/${lastTripId}`);
    } else {
      console.error("User or Last Trip ID not found. Redirecting to dashboard or home.");
      // Optional: Redirect to home or show a message
      navigate("/");  // Or any other fallback page
    }
  
    console.log("my-trip click finally");
  };
  
  return (
    <div className="px-4 py-2 flex w-full justify-between items-center shadow-md bg-white">
      {/* Logo */}
      <img src={logo} alt="Logo" className="h-10" />

      {/* User Section */}
      {user ? (
        <div className="flex items-center gap-4">
          <button
            className="text-gray-700 font-medium hover:text-blue-500 rounded-full"
            onClick={onClickHandle}
          >
            My Trip
          </button>
          <img
            src={profile}
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer"
            onClick={handleProfileClick}
          />
          {/* Popover */}
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <div className="p-2">
              <MenuItem onClick={handleViewProfile}>
                <ListItemIcon>
                  <AccountCircle fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">View Profile</Typography>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Logout</Typography>
              </MenuItem>
            </div>
          </Popover>
        </div>
      ) : (
        <a href="/login">
          <Button variant="contained" className="bg-blue-500 hover:bg-blue-600">
            Login
          </Button>
        </a>
      )}
    </div>
  );
};

export default HeaderSection;
