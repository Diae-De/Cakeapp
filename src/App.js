
import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductView from './components/productview/ProductView';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/product" element={<ProductView/>}/>    
        </Routes>
      </Router>
        
    </div>
  );
}

export default App;
