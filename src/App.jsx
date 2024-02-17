import './App.css';
import Nav from './Nav'
import Create from './Create';

function App() {
  return (
    <div className="flex flex-row bg-gray-400">
        <Nav />
        <Create/>
    </div>
  );
}

export default App;
