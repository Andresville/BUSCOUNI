import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { GlobalStyle } from "./GlobalStyle";
import { Home } from "./Components/Home/Home";
import { NavBar } from "./Components/NavBar/NavBar";
import { Universities } from "./Components/Universities/Universities";
import { UniversityDetailContainer } from './Components/UniversityDetailContainer/UniversityDetailContainer';
import { UniversitiesDegreeDetailContainer } from './Components/UniversitiesDegreeDetailContainer/UniversitiesDegreeDetailContainer';
import { Footer } from './Components/Footer/Footer';
import { Vocation } from './Components/Vocation/Vocation';
import { DegreeDetailContainer } from './Components/DegreeDetailContainer/DegreeDetailContainer';


function App() {

  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/universities" element={<Universities />} />
      <Route path="/universities/:name" element={<UniversityDetailContainer />} />
      <Route path="/universities-degree/:carrera" element={<UniversitiesDegreeDetailContainer />} />
      <Route path="/universities-degree/:carrera/:name" element={<DegreeDetailContainer />} />
      <Route path="/vocation" element={<Vocation />} />
      </Routes>
      <footer>
      <Footer />
      </footer>
    </Router>
  )
}

export default App