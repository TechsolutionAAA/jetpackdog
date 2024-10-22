import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FirstPage from './pages/FirstPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' exact element={<FirstPage />} />
        </Routes>
      </div>  
    </Router>
  );
}

export default App;
