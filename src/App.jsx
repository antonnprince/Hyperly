import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Create from './Create';
import Nav from './Nav';
import Dash from './Dash';


function App() {
  return (
    <div className="flex flex-row bg-[#141414] h-screen">
    <BrowserRouter>
      <Routes>
            <Route path='/' element={<Nav />}> 
            <Route index element={<Dash/>} />
            <Route path="/create" element={<Create/>} />
            </Route>
          
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
