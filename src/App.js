import { BrowserRouter,Route,Routes } from "react-router-dom";
import Index from "./pages";
import Main from "./pages/main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}>
          <Route path="/" element={<Main/>}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
