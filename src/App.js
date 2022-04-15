
import './App.css';
import {Home} from "./components/home";
import {SeriesHome} from "./components/seriesHome"
import {Routes,Route} from "react-router-dom";
import {MovieHome} from "./components/MovieHome"
function App() {
  return (
    <div className="App">
      <h1>Movie application</h1>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/series" element={<SeriesHome/>}></Route>
        <Route path="/movie" element={<MovieHome/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
