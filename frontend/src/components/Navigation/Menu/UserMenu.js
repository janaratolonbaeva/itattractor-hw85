import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Button, Menu, MenuItem} from "@material-ui/core";
import {logoutUser} from "../../../store/actions/usersActions";
import {Link} from "react-router-dom";

const UserMenu = ({user}) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        color="inherit"
      >
        Hello, {user.username}!
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My Account</MenuItem>
        <MenuItem component={Link} to="/add-artist">Add Artist</MenuItem>
        <MenuItem component={Link} to="/add-album">Add Album</MenuItem>
        <MenuItem component={Link} to="/add-track">Add Track</MenuItem>
        <MenuItem onClick={() => dispatch(logoutUser())}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;