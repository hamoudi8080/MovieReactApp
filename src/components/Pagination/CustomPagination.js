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
    <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
    }}>
      <ThemeProvider theme={darkTheme}>
        
        <Pagination
          count={numberOfPages}
          onChange={(e) => handlePageChange(e.target.textContent)}
          color="primary"
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
