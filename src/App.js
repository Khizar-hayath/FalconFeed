import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";



const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0)

    return (
        <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color="#f11946"
        progress={progress}
      />

          <Routes>
            {/* When props to be used here, and when in NewsItem?*/}
            <Route exact path="/" element={<News setProgress={setProgress} apiKey ={apiKey} pageSize={pageSize} key="science" country="us" category="science"/>} />  
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey ={apiKey} pageSize={pageSize} key="business" country="us" category="business"/>} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey ={apiKey} pageSize={pageSize} key="entertainment" country="us" category="entertainment"/>} />
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey ={apiKey} pageSize={pageSize} key="general" country="us" category="general"/>} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey ={apiKey} pageSize={pageSize} key="health" country="us" category="health"/>} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey ={apiKey} pageSize={pageSize} key="science" country="us" category="science"/>} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey ={apiKey} pageSize={pageSize} key="sports" country="us" category="sports"/>} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey ={apiKey} pageSize={pageSize} key="technology" country="us" category="technology"/>} />
          </Routes>
        </Router>
        </div>
    )
}

export default App

