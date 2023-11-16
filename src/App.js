import './App.css';
import Navbar from './component/Navbar';
import News from './component/News';
import {
   
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
function App() {
  return (
    <div className="App">
     {/* <News pageSize={6} category='general'/> */}
      <BrowserRouter>
     <Navbar/>
      <Routes>
     
     <Route exact path="/"
           element= {<News key="general" pageSize={6} category='general' />}
          />
     <Route exact path="/general"
           element= {<News key="general" pageSize={6} category='general' />}
          />
     <Route exact path="/comedy"
           element= {<News key="comedy" pageSize={6} category='comedy' />}
          />
     <Route exact path="/business"
           element= {<News key="business" pageSize={6} category='business' />}
          />
     <Route exact path="/entertment"
           element= {<News key="entertainment" pageSize={6} category='entertainment' />}
          />
     <Route exact path="/health"
           element= {<News key="health" pageSize={6} category='health' />}
          />
     <Route exact path="/science"
           element= {<News key="science" pageSize={6} category='science' />}
          />
     <Route exact path="/sports"
           element= {<News key="sports" pageSize={6} category='sports' />}
          />
     <Route exact path="/technology"
           element= {<News key="technology" pageSize={6} category='technology' />}
          
        />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
