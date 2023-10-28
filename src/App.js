import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpListing from './Components/EmpListing';
import EmpCreate from './Components/EmpCreate';
import EmpDetail from './Components/EmpDetail';
import EmpEdit from './Components/EmpEdit';

function App() {
  return (
    <div className="App">
      <h1>CRUD Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>

          <Route path='/employee/detail/:empid' element={<EmpDetail />}></Route>
          <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
