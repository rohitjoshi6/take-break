import './App.css';
import Navbar from './Components/Navbar/navbar';
import {BrowserRouter , Route, Routes} from 'react-router-dom';

//import pages 
import Home  from './Pages/Home/home.js';
import Activities from './Pages/Activities/activities.js';
import Jokes from './Pages/Jokes/jokes.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/activities" element={<Activities/>} />
          <Route path="/jokes" element={<Jokes/>} />

        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
