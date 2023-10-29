import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { makeStyles } from '@mui/styles';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';

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
  
  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
     
       
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction style={{color: "white"}} label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction style={{color: "white"}} label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction style={{color: "white"}} label="TV Series" icon={<SearchIcon />} />
        <BottomNavigationAction style={{color: "white"}} label="Search" icon={<TvIcon />} />
      </BottomNavigation>
    </Box>
  );
}