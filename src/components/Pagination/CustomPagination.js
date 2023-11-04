import React from "react";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from '@mui/material/styles';
 
 

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const CustomPagination = ({ setPage, numberOfPages = 10 }) => {
  const handlePageChange = (page) => {
    console.log("hello " + page);
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        
        <Pagination
          count={numberOfPages}
          onChange={(e) => handlePageChange(e.target.textContent)}
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
