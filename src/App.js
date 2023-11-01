
import { Container } from '@mui/material';
import './App.css';
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trending from './pages/Trending/Trending';
import Search from './pages/Search/Search';
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';




const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="app">
          <Container>
            <Routes>
              <Route path='/' element={<Trending />} />
              <Route path='/movies' element={<Movies />} />
              <Route path='/series' element={<Series />} />
              <Route path='/search' element={<Search />} />
            </Routes>
          </Container>
        </div>

        <SimpleBottomNavigation />
      </BrowserRouter>
    </>

  );
}; 

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Header />
//         <div className="app">
//           <Container>
//             <Routes>
//               <Route path='/' element={<Trending />} />
//               <Route path='/movies' element={<Movies />} />
//               <Route path='/series' element={<Series />} />
//               <Route path='/search' element={<Search />} />
//             </Routes>
//           </Container>
//         </div>

//         <SimpleBottomNavigation />
//       </BrowserRouter>
//     </>

//   );
// }

export default App;
