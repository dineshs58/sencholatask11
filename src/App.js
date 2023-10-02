import './App.css';
import Create from './components/Create'
import Home from './components/Home';
import Read from './components/Read';
import Update from './components/Update';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import { useNavigate } from 'react-router-dom';
function App() {
  // const navigate = useNavigate()
  return (
    <div>
      <Header />
      
      {/* <h2>Curd operations</h2>
    */}
      
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/create' element={<Create />}></Route>
          <Route exact path='/read' element={<Read />}></Route>
          <Route exact path='/update' element={<Update />}></Route>
        </Routes>
    

    </div>
  );
}

export default App;
