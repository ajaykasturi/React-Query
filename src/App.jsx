import "./App.css";
import { HomePage } from "./components/Home.page";
import { SuperHerosPage } from "./components/SuperHeros.page";
import { RQSuperHerosPage } from "./components/RQSuper.page";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/super-heroes" element={<SuperHerosPage />} />
          <Route path="/rq-super-heroes" element={<RQSuperHerosPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
