import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Recommendedvideos from './Recommendedvideos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './SearchPage.js';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/search/:searchTerm"
            element={
              <>
              <div className="app-page">
                <Sidebar />
                <SearchPage />
                </div>
              </>
              
            }
          />

          <Route
            exact
            path="/"
            element={
              <>
                <div className="app-page">
                  <Sidebar />
                  <Recommendedvideos />
                </div>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
