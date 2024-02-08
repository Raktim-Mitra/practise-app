import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Services from "./Components/Services";

import "./Styles/app.scss";
import "./Styles/header.scss";
import "./Styles/home.scss";
import "./Styles/services.scss";
function App() {
  return (
<Router>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/services" element={<Services/>}/>
  </Routes>
</Router>
  );
}

export default App;
