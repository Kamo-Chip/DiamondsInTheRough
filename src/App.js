import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Main from './pages/Main';
import StockTicker from "./components/StockTicker";
import StockDetails  from './components/StockDetails';
import Footer from "./components/Footer";


const App = () => {

  return (
    <BrowserRouter>
    <StockTicker/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/stockdata/:title" element={<StockDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App