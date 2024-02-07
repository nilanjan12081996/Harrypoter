
import './App.css';
import AllChar from './Component/AllChar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SingleChar from './Component/SingleChar';
function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path='/' element={<AllChar/>}/>
        <Route path='/single/:id' element={<SingleChar/>}/>
      </Routes>
    </Router>
   </>
  );
}

export default App;
