
import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { makeStyles } from '@mui/styles';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles({
    root: {
      width: "100%",
      position: "fixed",
      bottom: 0,
      backgroundColor: "#2d313a",
      zIndex: 100,
    },
  });

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0 ) navigate("/");
    else if (value === 1) navigate("/movies");
    else if (value === 2) navigate("/series");
    else if (value === 3) navigate("/search");
    
  },
  [value]);



  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
     
       
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
        style={{ backgroundColor: "#2d313a"}}
       
      >
        <BottomNavigationAction style={{color: "white"}} label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction style={{color: "white"}} label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction style={{color: "white"}} label="TV Series" icon={<SearchIcon />} />
        <BottomNavigationAction style={{color: "white"}} label="Search" icon={<TvIcon />} />
      </BottomNavigation>
    </Box>
  );
}