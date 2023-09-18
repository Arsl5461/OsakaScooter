
import Text from "./components/Text";
import Form from "./components/Form";
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";




function App() {
  return (
    <div className="App">
  
<Navbar/>

<Routes>

<Route path ="/" element={<Home/>} />
<Route path ="/Form" element={<Form/>} />

</Routes>
<Footer/>


      
    </div>
  );
} 

export default App;
